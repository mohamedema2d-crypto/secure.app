// تشغيل الخلفية المتحركة
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});

// Toast Notification
function showToast(message) {
  let toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// تشفير
function encrypt() {
  let text = document.getElementById("text").value.trim();
  let password = document.getElementById("password").value.trim();
  let result = document.getElementById("result");
  let loading = document.getElementById("loading");

  if (!text || !password) {
    showToast("⚠️ Enter text & password");
    return;
  }

  loading.style.display = "block";

  setTimeout(() => {
    try {
      let encrypted = CryptoJS.AES.encrypt(text, password).toString();
      result.innerText = encrypted;
      showToast("🔒 Encrypted successfully");
    } catch (e) {
      showToast("❌ Encryption error");
    }
    loading.style.display = "none";
  }, 500);
}

// فك التشفير
function decrypt() {
  let text = document.getElementById("text").value.trim();
  let password = document.getElementById("password").value.trim();
  let result = document.getElementById("result");

  if (!text || !password) {
    showToast("⚠️ Enter encrypted text & password");
    return;
  }

  try {
    let bytes = CryptoJS.AES.decrypt(text, password);
    let decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
      showToast("❌ Wrong password");
    } else {
      result.innerText = decrypted;
      showToast("🔓 Decrypted successfully");
    }
  } catch (e) {
    showToast("❌ Decryption error");
  }
}

// نسخ النتيجة
function copyText() {
  let text = document.getElementById("result").innerText;

  if (!text || text === "Your result will appear here...") {
    showToast("⚠️ Nothing to copy");
    return;
  }

  navigator.clipboard.writeText(text);
  showToast("📋 Copied!");
}

// مسح الكل
function clearAll() {
  document.getElementById("text").value = "";
  document.getElementById("password").value = "";
  document.getElementById("result").innerText = "Your result will appear here...";
  showToast("🧹 Cleared!");
}
