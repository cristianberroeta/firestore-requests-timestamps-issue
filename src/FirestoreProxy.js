import {initializeApp} from "firebase/app"
import {doc, setDoc, getDoc, onSnapshot, getFirestore, connectFirestoreEmulator} from "firebase/firestore";

const firebaseApp = initializeApp({
    projectId: 'demo-firestore-requests-timestamps-issue'
});
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

export async function initializeData() {
    console.log("initializeData running");
    try {
        await setDoc(doc(db, "people", "John Doe"), {
            age: "50",
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateDocument() {
    console.log("updateDocument running");
    try {
        await setDoc(doc(db, "people", "John Doe"), {
            age: `${Math.floor(Math.random() * 1000000)}`,
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getDocument() {
    console.log("getDocument running");
    try {
        const docRef = doc(db, "people", "John Doe");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (error) {
        console.log(error);
    }
}

let unsubscribe;

export async function startListeningForDocumentChanges() {
    console.log("startListeningForDocumentChanges running");
    try {
        unsubscribe = onSnapshot(doc(db, "people", "John Doe"), (doc) => {
            console.log("Current data: ", doc.data());
        });
    } catch (error) {
        console.log(error);
    }
}

export async function stopListeningForDocumentChanges() {
    console.log("stopListeningForDocumentChanges running");
    if (!unsubscribe) return;
    console.log("unsubscribe running");
    unsubscribe();
}