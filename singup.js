import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAqYtVukf2hJceCB2URk110KMubrgq7yg8",
    authDomain: "lapku02.firebaseapp.com",
    projectId: "lapku02",
    storageBucket: "lapku02.firebasestorage.app",
    messagingSenderId: "543345322504",
    appId: "1:543345322504:web:100d41a9610119fd5d7fbd"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const classInput = document.getElementById("class");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Додайте обробник для кнопки реєстрації
submitButton.addEventListener("click", async (event) => {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  // Очищаємо пробіли навколо введених значень
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const classValue = classInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Логування значень, щоб побачити, що ми отримуємо
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Class:", classValue);
  console.log("Email:", email);
  console.log("Password:", password);

  // Перевіряємо, чи всі поля заповнені
  if (!name || !age || !classValue || !email || !password) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  try {
    // Реєстрація користувача у Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Логіка після успішної реєстрації
    console.log("Користувач створений:", user);
    alert(`Реєстрація успішна! Вітаємо, ${name}!`);
  } catch (error) {
    // Обробка помилок
    console.error("Помилка реєстрації:", error.message);
    alert(`Помилка: ${error.message}`);
  }
});