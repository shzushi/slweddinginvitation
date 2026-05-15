 /* =========================
    =========================
	
     SCROLL RESET ON RELOAD
	
	=========================
    ========================= */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = function () {
  window.scrollTo(0, 0);
};

 /* =========================
    =========================
	
        BACKGROUND MUSIC
	
	=========================
    ========================= */
	
document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".lux-envelope");
  const music = document.getElementById("bg-music");

  if (!music) return;

  // Auto-play attempt (muted)
  music.play().catch(() => {});

  if (envelope) {
    envelope.addEventListener("click", () => {
      music.muted = false;   // unmute on interaction
      music.play().catch(() => {});
    });
  }
});

const rsvpSection = document.getElementById("rsvpSection");
const deadline = new Date("2026-03-21T00:00:00"); // March 21 start

function checkDeadline() {
  const now = new Date();
  if (now >= deadline && rsvpSection.style.display !== "none") {
    rsvpSection.style.display = "none";
  }
}

// Run once immediately
checkDeadline();

// Keep checking every 10 seconds
setInterval(checkDeadline, 10000);

 /* =========================
    =========================
	
    ENVELOPE ANIMATION LOGIC
	
	=========================
    ========================= */
        
function openInvite() {
  const invite = document.getElementById("luxInvite");

  invite.classList.add("open");

  setTimeout(() => {
    invite.classList.add("zoom");
  }, 1200);

  setTimeout(() => {
    invite.classList.add("done");
  }, 2000);
}

 /* =========================
    =========================
	
           COUNTDOWN
	
	=========================
    ========================= */
	
function startCountdown() {
  const wedding = new Date("April 30, 2026 15:00:00").getTime();
  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  function tick() {
    const now = Date.now();
    const diff = wedding - now;
    if (diff < 0) {
      d.innerText = h.innerText = m.innerText = s.innerText = "0";
      return;
    }
    d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    h.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    m.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    s.innerText = Math.floor((diff % (1000 * 60)) / 1000);
  }

  tick();
  setInterval(tick, 1000);
}

document.body.classList.add("modal-open");
document.body.classList.remove("modal-open");


 

 /* =========================
    =========================
	
        DATA ANIMATION
	
	=========================
    ========================= */
	
document.addEventListener("DOMContentLoaded", () => {
  startCountdown(); // start countdown when DOM is ready
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
});

 /* =========================
    =========================
	
              RSVP
	
	=========================
    ========================= */

const guestDatabase = [

  /* - VIP 1 - */
  { id: 1, name: "Graciano & Herminia Jacinto", seats: 2, table: "VIP 1" },
  { id: 2, name: "Lope & Yolanda Masilungan", seats: 2, table: "VIP 1" },
  { id: 3, name: "Fredo & Sally Bulaklak", seats: 2, table: "VIP 1" },
  { id: 4, name: "Domingo & Sally Bulaklak", seats: 2, table: "VIP 1" },

  /* - VIP 2 - */
  { id: 5, name: "Richard & Julietta Lapig", seats: 4, table: "VIP 2" },
  { id: 6, name: "Doodz Arriesgado", seats: 1, table: "VIP 2" },
  { id: 7, name: "Delia Fortus", seats: 2, table: "VIP 2" },
  { id: 8, name: "Charlie & Malou Mesina", seats: 2, table: "VIP 2" },
  { id: 9, name: "Joel & Jing Fortus", seats: 2, table: "VIP 2" },

  /* - VIP 3 - */
  { id: 10, name: "Ernie & Marilou Comia", seats: 2, table: "VIP 3" },
  { id: 11, name: "Manny & Mrs Andal", seats: 2, table: "VIP 3" },
  { id: 12, name: "Donny Lopez", seats: 1, table: "VIP 3" },
  { id: 13, name: "Marcy Javin", seats: 1, table: "VIP 3" },
  { id: 14, name: "Feliciano & Emma Nipay", seats: 3, table: "VIP 3" },

  /* - Table 1 - */
  { id: 15, name: "Roy Balboa", seats: 1, table: "Table 1" },
  { id: 16, name: "Thea Tawatao", seats: 1, table: "Table 1" },
  { id: 17, name: "Khai Bautista", seats: 1, table: "Table 1" },
  { id: 18, name: "Gardon Booc", seats: 1, table: "Table 1" },
  { id: 19, name: "Marvin Schaer", seats: 1, table: "Table 1" },
  { id: 20, name: "Raymund & Mrs Afortadera", seats: 2, table: "Table 1" },

  /* - Table 2 - */
  { id: 21, name: "Rosemarie & Eri Maruta", seats: 2, table: "Table 2" },
  { id: 22, name: "Jolo Dahilog", seats: 1, table: "Table 2" },
  { id: 23, name: "Hiro Hashida & Nanay/Tatay", seats: 3, table: "Table 2" },
  { id: 24, name: "Lando Timbang", seats: 1, table: "Table 2" },
  { id: 25, name: "Jake Jacinto", seats: 1, table: "Table 2" },

  /* - Table 3 - */
  { id: 26, name: "Rosabell & Edmond Pallera", seats: 3, table: "Table 3" },
  { id: 27, name: "Rosenda Marie Timbang", seats: 1, table: "Table 3" },
  { id: 28, name: "Rosemil Joy & Rosario Timbang", seats: 2, table: "Table 3" },
  { id: 29, name: "Pedro Timbang Jr.", seats: 1, table: "Table 3" },

  /* - Table 4 - */
  { id: 30, name: "Robert & Girlie Timbang", seats: 2, table: "Table 4" },
  { id: 31, name: "Kimberly Timbang", seats: 1, table: "Table 4" },
  { id: 32, name: "Jherone & Joan Salazar", seats: 2, table: "Table 4" },
  { id: 33, name: "Rodimzon Sayco & GF", seats: 2, table: "Table 4" },
  { id: 34, name: "TJay Siapel", seats: 1, table: "Table 4" },

  /* - Table 5 - */
  { id: 35, name: "Roxanne & Jericson Abellera", seats: 3, table: "Table 5" },
  { id: 36, name: "Mely Caviteño Daluz", seats: 1, table: "Table 5" },
  { id: 37, name: "Eduardo Caviteño", seats: 1, table: "Table 5" },

  /* - Table 6 - */
  { id: 38, name: "Denver Castillon", seats: 1, table: "Table 6" },
  { id: 39, name: "Domenick Dequiña", seats: 1, table: "Table 6" },
  { id: 40, name: "Jhaypee Bithao", seats: 1, table: "Table 6" },
  { id: 41, name: "Leah & Bjay Araña", seats: 4, table: "Table 6" },
  { id: 42, name: "Daisy Arenas Mercado", seats: 1, table: "Table 6" },

  /* - Table 7 - */
  { id: 43, name: "Mario & Nenita Comia", seats: 4, table: "Table 7" },
  { id: 44, name: "Illuminada & Leovino Cuevas", seats: 2, table: "Table 7" },
  { id: 45, name: "Jay-R & Mrs Dimaculangan", seats: 2, table: "Table 7" },

  /* - Table 8 - */
  { id: 46, name: "Elma & Tzadee Kim Arnoza", seats: 2, table: "Table 8" },
  { id: 47, name: "Lilibeth Comia", seats: 1, table: "Table 8" },
  { id: 48, name: "Ella & Bryan Lascano", seats: 3, table: "Table 8" },
  { id: 49, name: "Mikka & Nida Ali-ali", seats: 2, table: "Table 8" },

  /* - Table 9 - */
  { id: 50, name: "Mae Ann Manguiat", seats: 1, table: "Table 9" },
  { id: 51, name: "Generous Matala", seats: 1, table: "Table 9" },
  { id: 52, name: "Kenneth Anog", seats: 1, table: "Table 9" },
  { id: 53, name: "Dexter Garcia", seats: 1, table: "Table 9" },
  { id: 54, name: "Marwell Ramos", seats: 1, table: "Table 9" },
  { id: 55, name: "Katherine Magbuhos", seats: 1, table: "Table 9" },
  { id: 56, name: "Vivora Aycardo", seats: 1, table: "Table 9" },
  { id: 57, name: "Jean Marie Mendoza", seats: 1, table: "Table 9" },

  /* - Table 10 - */
  { id: 58, name: "Lerma & Jay-R Basadre", seats: 5, table: "Table 10" },
  { id: 59, name: "Angela Ebrao", seats: 1, table: "Table 10" },
  { id: 60, name: "Imdela De Castro", seats: 1, table: "Table 10" },
  { id: 61, name: "Shindarry Lopez", seats: 1, table: "Table 10" },

  /* - Table 11 - */
  { id: 62, name: "Cherry & Rex Cuevas", seats: 3, table: "Table 11" },
  { id: 63, name: "Josiah Cuevas", seats: 1, table: "Table 11" },
  { id: 64, name: "Jacob Cuevas", seats: 1, table: "Table 11" },
  { id: 65, name: "Shekinah Lopez", seats: 1, table: "Table 11" },
  { id: 66, name: "Shemini Lopez", seats: 1, table: "Table 11" },
  { id: 67, name: "Shyrdon Lopez", seats: 1, table: "Table 11" },

  /* - Table 12 - */
  { id: 68, name: "Nezar & Amy Serdon", seats: 2, table: "Table 12" },
  { id: 69, name: "Buena", seats: 3, table: "Table 12" },
  { id: 70, name: "Joy Eileen & Jamil Vidal", seats: 3, table: "Table 12" },
  { id: 71, name: "Cely Depusoy Caviteño", seats: 1, table: "Table 12" },
  { id: 72, name: "Bong Velasco & Aileen Dueñas", seats: 2, table: "Table 12" },
  { id: 73, name: "Sahara Enoc", seats: 1, table: "Table 12" },
  { id: 74, name: "Krizia Nicor", seats: 1, table: "Table 12" }

];

let selectedGuest = null;

const searchInput = document.getElementById("searchName");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
  const value = this.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!value) return;

const matches = guestDatabase.filter(g => {
  return g.name.toLowerCase().includes(value.toLowerCase());
});

  matches.forEach(guest => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerText = `${guest.name} (${guest.table})`;
    div.onclick = () => selectGuest(guest.id);
    suggestionsBox.appendChild(div);
  });
});

function selectGuest(id) {
  const guest = guestDatabase.find(g => g.id === id);
  if (!guest) return;

  selectedGuest = guest;
  suggestionsBox.innerHTML = "";
  searchInput.value = guest.name;

  document.getElementById("rsvpResult").style.display = "block";
  document.getElementById("welcomeMsg").innerText = `Welcome, ${guest.name}!`;
  document.getElementById("seatMsg").innerHTML = `We have reserved <strong>${guest.seats} seat(s)</strong> for you.`;
  document.getElementById("tableMsg").innerHTML = `Your assigned table: <strong> ${guest.table}</strong>`;

  // Count main guests
  const mainGuests = guest.name.split("&").length; // Split by "&" for couples
  const extra = Math.max(0, guest.seats - mainGuests);

  const guestInput = document.getElementById("guestNames");
  document.getElementById("guestLimitMsg").innerText =
    extra > 0
      ? `You may enter up to ${extra} additional guest name(s).`
      : `No additional guests allowed.`;

  if (extra > 0) {
    guestInput.style.display = "block";
    limitGuestInput(extra);
  } else {
    guestInput.style.display = "none";
    guestInput.value = "";
  }
}

function limitGuestInput(limit) {
  const textarea = document.getElementById("guestNames");

  textarea.oninput = function () {
    const names = this.value.split(",").map(n => n.trim()).filter(n => n);

    if (names.length > limit) {
      this.value = names.slice(0, limit).join(", ");
      alert(`You can only add ${limit} guest(s).`);
    }
  };
}

function openRSVP() {
  const intro = document.getElementById("rsvpIntro");
  const content = document.getElementById("rsvpContent");

  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    content.style.display = "block";
    content.classList.add("fade-in");
  }, 500);
}

function closeRSVPModal() {
  document.getElementById("rsvpModal").style.display = "none";

  // Reset everything
  selectedGuest = null;
  isSubmitting = false;

  document.getElementById("searchName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("guestNames").value = "";
  document.getElementById("rsvpResult").style.display = "none";

  const yesBtn = document.querySelector(".btn.yes");
  const noBtn = document.querySelector(".btn.no");

  yesBtn.disabled = false;
  noBtn.disabled = false;
}

function goBack() {
  selectedGuest = null;
  document.getElementById("rsvpResult").style.display = "none";
  searchInput.value = "";
  document.getElementById("guestNames").value = "";
  suggestionsBox.innerHTML = "";
}

let isSubmitting = false;

function submitRSVP(attending) {
  if (!selectedGuest || isSubmitting) return;

  isSubmitting = true;

  const form = document.getElementById("googleForm");
  const yesBtn = document.querySelector(".btn.yes");
  const noBtn = document.querySelector(".btn.no");
  const title = document.getElementById("rsvpTitle");
  const message = document.getElementById("rsvpMessage");

  // Disable buttons to prevent double click
  yesBtn.disabled = true;
  noBtn.disabled = true;

  form.elements[0].value = selectedGuest.name;
  form.elements[1].value = selectedGuest.table;
  form.elements[2].value = selectedGuest.seats;
  form.elements[3].value = document.getElementById("email").value;
  form.elements[4].value = document.getElementById("guestNames").value;
  form.elements[5].value = attending ? "Yes" : "No";
  
    // Change modal message depending on response
  if (attending) {
    title.textContent = "RSVP Sent 💌";
    message.textContent = "Thank you! We look forward to celebrating with you.";
  } else {
    title.textContent = "RSVP Received 💌";
    message.textContent = "We're sorry to hear that we will be missing you at our wedding.\nWe hope to celebrate with you another time soon!\n\nSending you love from both of us.";
  }

  form.submit();

  document.getElementById("rsvpModal").style.display = "flex";

  // Auto close after 3 seconds
  setTimeout(() => {
    closeRSVPModal();
  }, 3000);
}

const reveals = document.querySelectorAll(".card, .venue-box, .timeline-event");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

reveals.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

 /* =========================
    =========================
	
          MODAL ZOOM
	
	=========================
    ========================= */
	
function openZoom(img) {
  const modal = document.getElementById('zoom-modal');
  const modalImg = document.getElementById('zoom-modal-img');

  modalImg.src = img.src;
  modal.classList.add('active');
}

function closeZoom(event) {
  const modal = document.getElementById('zoom-modal');

  // Close only if clicking background or X button
  if (event.target.id === 'zoom-modal' || event.target.id === 'zoom-close') {
    modal.classList.remove('active');
  }
}