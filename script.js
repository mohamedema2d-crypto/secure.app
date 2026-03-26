// 🔐 Encrypt
function encrypt() {
  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  if (!text) {
    result.innerText = "⚠️ Enter text first!";
    return;
  }

  let encrypted;

  // لو فيه باسورد → AES
  if (password) {
    encrypted = CryptoJS.AES.encrypt(text, password).toString();
  } 
  // لو مفيش باسورد → تشفير بسيط بـ CryptoJS (يدعم العربي)
  else {
    encrypted = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(text)
    );
  }

  result.innerText = encrypted;
}

// 🔓 Decrypt
function decrypt() {
  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  // لو المستخدم ما كتبش في التكست
  if (!text) {
    text = result.innerText;
  }

  try {
    let decrypted;

    // لو فيه باسورد
    if (password) {
      let bytes = CryptoJS.AES.decrypt(text, password);
      decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (!decrypted) throw "error";
    } 
    // بدون باسورد
    else {
      decrypted = CryptoJS.enc.Utf8.stringify(
        CryptoJS.enc.Base64.parse(text)
      );
    }

    result.innerText = decrypted;

  } catch {
    result.innerText = "❌ Wrong password or invalid text!";
  }
}

// 📋 Copy
function copyText() {
  let text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
}

// 🧹 Clear
function clearAll() {
  document.getElementById("text").value = "";
  document.getElementById("password").value = "";
  document.getElementById("result").innerText = "Your result will appear here...";
}

// 🌌 Background
particlesJS("particles-js", {
  particles: {
    number: {
      value: window.innerWidth < 600 ? 40 : 80
    },
    size: { value: 3 },
    color: { value: "#00ffff" },
    line_linked: {
      enable: true,
      color: "#00ffff"
    },
    move: { speed: 2 }
  }
});
