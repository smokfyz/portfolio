import * as firebase from 'firebase'
let database

export const init = () => { 
    let config = {
        apiKey: "AIzaSyBqCZq1ian4xKiQyG91lCoyGz43Yb_fpws",
        authDomain: "portfolio-2c774.firebaseapp.com",
        databaseURL: "https://portfolio-2c774.firebaseio.com",
        projectId: "portfolio-2c774",
        storageBucket: "portfolio-2c774.appspot.com",
        messagingSenderId: "241322847847"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}