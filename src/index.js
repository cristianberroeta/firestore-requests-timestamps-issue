import {initializeData, updateDocument, getDocument, startListeningForDocumentChanges, stopListeningForDocumentChanges} from "./FirestoreProxy";

function addButtonsListeners() {
    document.getElementById("initializeData").addEventListener("click", initializeData);
    document.getElementById("updateDocument").addEventListener("click", updateDocument);
    document.getElementById("getDocument").addEventListener("click", getDocument);
    document.getElementById("startListening").addEventListener("click", startListeningForDocumentChanges);
    document.getElementById("stopListening").addEventListener("click", stopListeningForDocumentChanges);
}

function init() {
    addButtonsListeners();
}

init();