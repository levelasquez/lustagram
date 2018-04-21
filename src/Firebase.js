import * as Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBofSHwKh8jhRC6s3xSbxGfqrjevjG2yOs',
  authDomain: 'memegram-rn.firebaseapp.com',
  databaseURL: 'https://memegram-rn.firebaseio.com',
  projectId: 'memegram-rn',
  storageBucket: 'memegram-rn.appspot.com',
  messagingSenderId: '357090886974',
}

Firebase.initializeApp(config)

export const firebaseRegister = (email, password) =>
  Firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => user.toJSON())

export const registerDatabase = (userId, email, name) =>
  Firebase.database().ref(`users/${userId}`).set({
    name,
    email,
  })

export const firebaseLogin = (email, password) =>
  Firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => user.toJSON())
