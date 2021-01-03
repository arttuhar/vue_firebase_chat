import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyCx5-8So-Nl6QOpOlS_0XvF2TqlbykjcWg",
	authDomain: "vue-firebase-chat-ba0ff.firebaseapp.com",
	projectId: "vue-firebase-chat-ba0ff",
	storageBucket: "vue-firebase-chat-ba0ff.appspot.com",
	messagingSenderId: "234948591824",
	appId: "1:234948591824:web:3c0d887050429cd1a81ed5",
};

const db = firebase.initializeApp(config);
export default db;
