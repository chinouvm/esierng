import cv2
import random
from statistics import mode
from database import db, firestore

collector = ""
bufferPasswords = []
characters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "?",
    ";",
    ":",
    "[",
    "]",
    "{",
    "}",
    "?",
]
system_random = random.SystemRandom()

cap = cv2.VideoCapture("traffic720.mp4")


ret, frame1 = cap.read()
ret, frame2 = cap.read()


def AddToBuffer(password):
    global bufferPasswords
    if password != 0:
        bufferPasswords.append(password)
        if len(bufferPasswords) == 20:
            print("Sending Passwords to database")
            ref = db.collection("generated").document("Passwords")
            ref.update({"PassArray": firestore.ArrayUnion(bufferPasswords)})
            bufferPasswords = []


def randomBit(contourNum):
    rndArray = []
    for i in range(contourNum):
        length = system_random.randrange(4, 16)
        randomInt = 0
        for x in range(length):
            randomInt += system_random.randint(0, 79)
            if randomInt <= 79:
                rndArray.append(randomInt)
    return mode(rndArray)


def generatePassword(getal):
    global characters
    global collector
    if len(collector) < 16:
        collector += characters[int(getal)]
    elif len(collector) >= 16:
        AddToBuffer(collector)
        collector = ""


while cap.isOpened():
    diff = cv2.absdiff(frame1, frame2)
    gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
    dilated = cv2.dilate(thresh, None, iterations=3)
    contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for contour in contours:
        (x, y, w, h) = cv2.boundingRect(contour)

        if cv2.contourArea(contour) < 300:
            continue
        cv2.rectangle(frame1, (x, y), (x + w, y + h), (0, 255, 0), 2)
        cv2.putText(frame1, "Status: {}".format("Movement"), (10, 20), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 3)
        cv2.putText(frame1, "Counter: {}".format(len(contours)), (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3)

    cv2.imshow("Feed", frame1)
    frame1 = frame2
    ret, frame2 = cap.read()

    generatePassword(randomBit(len(contours)))

    if cv2.waitKey(40) == 27:
        break

cv2.destroyAllWindows()
cap.release()
