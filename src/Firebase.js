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

export const Authentication = Firebase.auth()
