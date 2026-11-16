// ---- SETTINGS ----
// Paste your Google Apps Script web app URL here (see README.md, step 2).
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdnA0b6SqCVABdl-_JDXY71wqaH4m6BoS-KuSf3J4Ol7x2nqVS704pmf02SMR90bLk/exec";
const EVENT_TIME = new Date("2026-11-29T10:00:00+01:00").getTime();

// Countdown
const cd = document.getElementById("cd");
function tick() {
  const d = EVENT_TIME - Date.now();
  if (d <= 0) { cd.innerHTML = '<div style="width:auto;padding:12px 22px"><b style="font-size:24px">Today is the day!</b></div>'; return; }
  const v = [Math.floor(d / 864e5), Math.floor(d % 864e5 / 36e5), Math.floor(d % 36e5 / 6e4), Math.floor(d % 6e4 / 1e3)];
  const l = ["Days", "Hours", "Mins", "Secs"];
  cd.innerHTML = v.map((n, i) => `<div><b>${n}</b><span>${l[i]}</span></div>`).join("");
}
tick(); setInterval(tick, 1000);

// RSVP -> Google Sheet
const form = document.getElementById("rsvp-form");
const status = document.getElementById("status");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  if (!form.name.value.trim()) { status.textContent = "Please enter your full name."; return; }
  if (form.website.value) return; // spam trap
  if (SCRIPT_URL.startsWith("PASTE")) { status.textContent = "RSVP is not connected yet."; return; }
  btn.disabled = true; status.textContent = "Sending...";
  const body = new URLSearchParams({
    name: form.name.value.trim(), attending: form.attending.value,
    guests: form.guests.value, message: form.message.value.trim()
  });
  try {
    await fetch(SCRIPT_URL, { method: "POST", body, mode: "no-cors" });
    status.textContent = "Thank you! Your RSVP has been received.";
    form.reset();
  } catch (err) {
    status.textContent = "That did not go through. Check your connection and try again.";
  }
  btn.disabled = false;
});
