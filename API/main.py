from fastapi import FastAPI, Depends, Response, status
import random
from fastapi.security import HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from database import db, firestore
from utils import VerifyToken
import uvicorn

system_random = random.SystemRandom()

tags_metadata = [
    {
        "name": "True Random Generator",
        "description": "Get an uniquely generated Salt, Password or Encryption Key generated with a true random generator.",
    },
]

app = FastAPI(openapi_tags=tags_metadata, redoc_url=None)
token_auth_scheme = HTTPBearer()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/v1/password", tags=["True Random Generator"])
async def get_password():
    """Get a 16 character password, No Authentication required!"""
    ref = db.collection("generated").document("Passwords")
    pw_dict = ref.get(field_paths={"PassArray"}).to_dict().get("PassArray")
    index = system_random.randrange(0, len(pw_dict))
    val = [pw_dict[index]]
    db.collection("generated").document("Passwords").update({"PassArray": firestore.ArrayRemove(val)})
    return f"{pw_dict[index]}"


@app.get("/v1/salt32", tags=["True Random Generator"])
async def get_salt32(response: Response, token: str = Depends(token_auth_scheme)):
    """Get a 32Bit Salt, Authentication required!"""
    authResult = VerifyToken(token.credentials).verify()

    if authResult.get("status"):
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return authResult

    ref = db.collection("generated").document("Salt32")
    pw_dict = ref.get(field_paths={"Salts"}).to_dict().get("Salts")
    index = system_random.randrange(0, len(pw_dict))
    val = [pw_dict[index]]
    db.collection("generated").document("Salt32").update({"Salts": firestore.ArrayRemove(val)})
    return f"{pw_dict[index]}"


@app.get("/v1/salt256", tags=["True Random Generator"])
async def get_salt256(response: Response, token: str = Depends(token_auth_scheme)):
    """Get a 256Bit Salt, Authentication required!"""
    authResult = VerifyToken(token.credentials).verify()

    if authResult.get("status"):
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return authResult

    ref = db.collection("generated").document("Salt256")
    pw_dict = ref.get(field_paths={"Salts"}).to_dict().get("Salts")
    index = system_random.randrange(0, len(pw_dict))
    val = [pw_dict[index]]
    db.collection("generated").document("Salt256").update({"Salts": firestore.ArrayRemove(val)})
    return f"{pw_dict[index]}"


@app.get("/v1/aes128", tags=["True Random Generator"])
async def get_aes128(response: Response, token: str = Depends(token_auth_scheme)):
    """Get a 128Bit AESIV, Authentication required!"""
    authResult = VerifyToken(token.credentials).verify()

    if authResult.get("status"):
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return authResult

    ref = db.collection("generated").document("AESIV")
    pw_dict = ref.get(field_paths={"IVS"}).to_dict().get("IVS")
    index = system_random.randrange(0, len(pw_dict))
    val = [pw_dict[index]]
    db.collection("generated").document("AESIV").update({"IVS": firestore.ArrayRemove(val)})
    return f"{pw_dict[index]}"


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=80, reload=True)
