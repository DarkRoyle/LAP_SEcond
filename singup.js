// Імпортуємо необхідні функції з Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Ваш Firebase конфігураційний об'єкт
const firebaseConfig = {
  apiKey: "AIzaSyAqYtVukf2hJceCB2URk110KMubrgq7yg8",
  authDomain: "lapku02.firebaseapp.com",
  projectId: "lapku02",
  storageBucket: "lapku02.firebasestorage.app",
  messagingSenderId: "543345322504",
  appId: "1:543345322504:web:100d41a9610119fd5d7fbd"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Функція для показу повідомлень на сторінці
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.opacity = 0;
  }, 5000);
}

// Обробка натискання кнопки реєстрації
const signUpButton = document.getElementById("highlightButton");
signUpButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Отримання введених значень електронної пошти та паролю
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const auth = getAuth();

  // Виконання реєстрації користувача
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showMessage("Реєстрація успішна!", "signInMessage");

      // Збереження ID користувача в localStorage
      localStorage.setItem("loggedInUserId", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Цей email вже використовується!", "signInMessage");
      } else {
        showMessage("Сталася помилка при реєстрації!", "signInMessage");
      }
    });
});
// Отримуємо елемент кнопки за її ID
const redirectButton = document.getElementById("highlightButton");

// Додаємо обробник події на клік
redirectButton.addEventListener("click", function() {
  // Переходимо на іншу сторінку
  window.location.href = "./Pages/page1.html"; // Заміни "./index.html" на потрібний шлях
});