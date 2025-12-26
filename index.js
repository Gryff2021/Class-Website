// 1. Imports et Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDosOnyimFQr3CGBE7tJuAt0nW0uSFJwvo",
  authDomain: "realtimechat-51ad5.firebaseapp.com",
  databaseURL: "https://realtimechat-51ad5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "realtimechat-51ad5",
  storageBucket: "realtimechat-51ad5.firebasestorage.app",
  messagingSenderId: "81210677560",
  appId: "1:81210677560:web:cbe2b70fb1db93839f09cd",
  measurementId: "G-YLHHP0YW9X"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// 2. Éléments HTML
const enter = document.getElementById("chat_enter");
const container = document.getElementById("chat_container");

// 3. ENVOYER (Quand tu cliques)
enter.addEventListener('click', function() {
    const messageInput = document.getElementById("enter_message");
    const usernameInput = document.getElementById("username");

    if (messageInput.value.trim() !== "") {
        push(messagesRef, {
            pseudo: usernameInput.value,
            contenu: messageInput.value
        });
        messageInput.value = ""; 
    }
});

// 4. RECEVOIR (Pour tout le monde, en temps réel)
onChildAdded(messagesRef, (data) => {
    const messageData = data.val(); // On crée la variable messageData ici
    const textBox = document.createElement("div");
    
    // Maintenant messageData.pseudo et messageData.contenu fonctionneront !
    textBox.textContent = `${messageData.pseudo || "Anonyme"} : ${messageData.contenu}`;
    textBox.className = "text_box";

    // --- AJOUT DES STYLES POUR LA BULLE ---
    textBox.style.backgroundColor = "lightblue";
    textBox.style.width = "200px";
    textBox.style.border = "1px solid black";
    textBox.style.borderRadius = "8px";
    textBox.style.padding = "10px";
    textBox.style.marginBottom = "10px";
    textBox.style.wordWrap = "break-word"; // Pour éviter que le texte dépasse
    textBox.style.whiteSpace = "normal";   // Pour permettre le retour à la ligne
    // --------------------------------------

    container.prepend(textBox);
});

const inputUsername = document.getElementById("username");

inputUsername.addEventListener("input", function() {

if (inputUsername.value.trim() === "") {
    inputUsername.style.backgroundColor = "red";
}
else {
    inputUsername.style.backgroundColor = "green";
}
})
