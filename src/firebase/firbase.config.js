// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFL7pXLz2jNnG6ewnHOGumoZT5Cmevgoo',
  authDomain: 'craft-house-ad549.firebaseapp.com',
  projectId: 'craft-house-ad549',
  storageBucket: 'craft-house-ad549.appspot.com',
  messagingSenderId: '303173435710',
  appId: '1:303173435710:web:3dc0c55c14e23558716c6f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
