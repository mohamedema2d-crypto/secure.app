// 🔐 Encrypt (بباسورد أو بدونه)
function encrypt() {
  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  if (!text) {
    result.innerText = "⚠️ Enter text first!";
    return;
  }

  let encrypted;

  // لو فيه باسورد
  if (password) {
    encrypted = CryptoJS.AES.encrypt(text, password).toString();
  } 
  // لو مفيش باسورد (حل مشكلة العربي)
  else {
    encrypted = btoa(unescape(encodeURIComponent(text)));
  }

  result.innerText = encrypted;
}

// 🔓 Decrypt (بباسورد أو بدونه)
function decrypt() {
  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  if (!text) {
    result.innerText = "⚠️ Enter encrypted text!";
    return;
  }

  try {
    let decrypted;

    // لو فيه باسورد
    if (password) {
      let bytes = CryptoJS.AES.decrypt(text, password);
      decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (!decrypted) throw "error";
    } 
    // لو مفيش باسورد (حل العربي)
    else {
      decrypted = decodeURIComponent(escape(atob(text)));
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

// 🌌 الخلفية
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
