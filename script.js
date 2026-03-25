// تشفير
function encrypt() {
  let text = document.getElementById("text").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  if (!text) {
    result.innerText = "⚠️ Enter text first!";
    return;
  }

  let encrypted;

  if (password) {
    encrypted = CryptoJS.AES.encrypt(text, password).toString();
  } else {
    encrypted = btoa(text);
  }

  result.innerText = encrypted;
}

// فك التشفير
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

    if (password) {
      let bytes = CryptoJS.AES.decrypt(text, password);
      decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (!decrypted) throw "error";
    } else {
      decrypted = atob(text);
    }

    result.innerText = decrypted;

  } catch {
    result.innerText = "❌ Wrong password or invalid text!";
  }
}

// copy
function copyText() {
  let text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text);
}

// clear
function clearAll() {
  document.getElementById("text").value = "";
  document.getElementById("password").value = "";
  document.getElementById("result").innerText = "Your result will appear here...";
}

// particles background
particlesJS("particles-js", {
  particles: {
    number: {
      value: window.innerWidth < 600 ? 40 : 80
    },
    size: {
      value: 3
    },
    color: {
      value: "#00ffff"
    },
    line_linked: {
      enable: true,
      color: "#00ffff"
    },
    move: {
      speed: 2
    }
  }
});
