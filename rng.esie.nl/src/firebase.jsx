import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAPDsDsR5m4E9ztdmhwEGyDJO5L3yySm8A',
  authDomain: 'esierng.firebaseapp.com',
  projectId: 'esierng',
  storageBucket: 'esierng.appspot.com',
  messagingSenderId: '432384003635',
  appId: '1:432384003635:web:796089b359e4a3978add46',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
