const projects = [
  {
    title: "SIRIUS<br>AUTONOMOUS",
    short: "SIRIUS Autonomous",
    type: "Robotik · Gerçek zamanlı",
    desc: "TEKNOFEST 2026 için geliştirilen otonom mobil forklift. ROS 2, sensör füzyonu, PLC/FMS haberleşmesi ve web kontrol arayüzü.",
    tech: "ROS 2 · Python · Flask",
    url: "https://github.com/elifnurbeycan/sirius-autonomous-forklift",
    image: "https://raw.githubusercontent.com/elifnurbeycan/sirius-autonomous-forklift/main/assets/images/sirius-competition.png",
    accent: "#ff4d2e"
  },
  {
    title: "VISITOR &<br>MEETING",
    short: "Visitor & Meeting",
    type: "Backend · Multi-tenant SaaS",
    desc: "Şirket çapında oda rezervasyonu için granular yetki, tenant izolasyonu, audit log ve raporlama içeren production-ready REST API.",
    tech: "Java 21 · Spring · PostgreSQL",
    url: "https://github.com/elifnurbeycan/visitor-meeting-management",
    image: "https://raw.githubusercontent.com/elifnurbeycan/visitor-meeting-management/main/screenshots/architecture-overview.png",
    accent: "#c8ff3d"
  },
  {
    title: "SAFE<br>WORKER",
    short: "SafeWorker",
    type: "IoT · İş güvenliği",
    desc: "Telefon sensörleriyle gerçek zamanlı risk tespiti, SOS akışı, tehlikeli bölge takibi ve canlı yönetici panelini bir araya getiren full-stack MVP.",
    tech: "Node.js · Flutter · React",
    url: "https://github.com/elifnurbeycan/SafeWorker",
    image: "https://opengraph.githubassets.com/1/elifnurbeycan/SafeWorker",
    accent: "#ffb000"
  },
  {
    title: "SİNYAL<br>CATALOG",
    short: "SİNYAL Catalog",
    type: "Mobile · IoT kataloğu",
    desc: "Sensör ve gömülü sistem bileşenleri için çevrimdışı çalışan, filtrelenebilir ve proje kiti oluşturabilen editoryal Flutter deneyimi.",
    tech: "Flutter · Dart · Material 3",
    url: "https://github.com/elifnurbeycan/sinyal-flutter-catalog",
    image: "https://raw.githubusercontent.com/elifnurbeycan/sinyal-flutter-catalog/main/screenshots/01-home.png",
    accent: "#e8e3d8"
  },
  {
    title: "ATS<br>SYSTEM",
    short: "ATS System",
    type: "Backend · İnsan kaynakları",
    desc: "Aday, pozisyon ve mülakat süreçleri için Keycloak tabanlı kimlik yönetimi ve kurum bazlı veri izolasyonu sunan takip sistemi.",
    tech: "Spring Boot · Keycloak · Docker",
    url: "https://github.com/elifnurbeycan/ats-system",
    image: "https://opengraph.githubassets.com/1/elifnurbeycan/ats-system",
    accent: "#ff7a59"
  },
  {
    title: "ANNOUNCEMENT<br>TRACKER",
    short: "Announcement Tracker",
    type: "Automation · Web scraping",
    desc: "Resmî kaynakları paralel tarayan, ilgili duyuruları sınıflandırıp çalışanlara güvenilir bir outbox akışıyla ileten Spring Boot uygulaması.",
    tech: "Java · Jsoup · Testcontainers",
    url: "https://github.com/elifnurbeycan/announcement-tracker",
    image: "https://opengraph.githubassets.com/1/elifnurbeycan/announcement-tracker",
    accent: "#c8ff3d"
  },
  {
    title: "DEFAULT<br>PREDICTION",
    short: "Default Prediction",
    type: "Machine learning · Finans",
    desc: "30 bin müşteri kaydı üzerinde özellik mühendisliği, Random Forest optimizasyonu ve performans değerlendirmesiyle kredi temerrüt tahmini.",
    tech: "Python · Pandas · Scikit-learn",
    url: "https://github.com/elifnurbeycan/credit-card-default-prediction",
    image: "https://raw.githubusercontent.com/elifnurbeycan/credit-card-default-prediction/main/images/roc_curve.png",
    accent: "#ff4d2e"
  },
  {
    title: "GLADIATOR<br>DUEL AI",
    short: "Gladiator Duel AI",
    type: "Game AI · Reinforcement learning",
    desc: "Durum, aksiyon, ödül ve keşif kavramlarını oynanabilir sıra tabanlı bir dövüş sisteminde birleştiren Q-Learning ajanı.",
    tech: "Unity · C# · Q-Learning",
    url: "https://github.com/elifnurbeycan/GladiatorDuel_AI",
    image: "https://opengraph.githubassets.com/1/elifnurbeycan/GladiatorDuel_AI",
    accent: "#c29cff"
  }
];

const wheel = document.querySelector("#project-wheel");
projects.forEach((project, index) => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.style.setProperty("--i", index);
  card.style.setProperty("--accent", project.accent);
  card.setAttribute("aria-label", `${project.short} projesini GitHub'da aç`);
  card.innerHTML = `
    <div class="fallback-art"></div>
    <img src="${project.image}" alt="" loading="lazy" />
    <span class="card-no">${String(index + 1).padStart(2,"0")}</span>
    <div class="project-card-content"><small>${project.type}</small><h3>${project.short}</h3></div>`;
  card.querySelector("img").addEventListener("error", e => e.currentTarget.style.display = "none");
  wheel.appendChild(card);
});

const els = {
  type: document.querySelector("#project-type"), title: document.querySelector("#project-title"),
  desc: document.querySelector("#project-desc"), tech: document.querySelector("#project-tech"),
  link: document.querySelector("#project-link"), current: document.querySelector("#project-current"),
  progress: document.querySelector("#scroll-progress-bar")
};
let currentIndex = -1;

function renderProject(index) {
  if (index === currentIndex) return;
  currentIndex = index;
  const p = projects[index];
  els.type.textContent = p.type;
  els.title.innerHTML = p.title;
  els.desc.textContent = p.desc;
  els.tech.textContent = p.tech;
  els.link.href = p.url;
  els.current.textContent = String(index + 1).padStart(2, "0");
}

function updateWheel() {
  if (innerWidth <= 820) return;
  const section = document.querySelector(".project-scroll");
  const rect = section.getBoundingClientRect();
  const max = section.offsetHeight - innerHeight;
  const progress = Math.min(1, Math.max(0, -rect.top / max));
  wheel.style.setProperty("--rotation", `${progress * -315}deg`);
  els.progress.style.width = `${progress * 100}%`;
  renderProject(Math.min(projects.length - 1, Math.round(progress * (projects.length - 1))));
}

const viewport = document.querySelector(".wheel-viewport");
viewport.addEventListener("scroll", () => {
  if (innerWidth > 820) return;
  const cardWidth = 256;
  renderProject(Math.min(projects.length - 1, Math.max(0, Math.round(viewport.scrollLeft / cardWidth))));
}, { passive: true });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
}, { threshold: .14 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
}, { passive: true });

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) requestAnimationFrame(() => { updateWheel(); ticking = false; });
  ticking = true;
}, { passive: true });
window.addEventListener("resize", updateWheel);
renderProject(0);
updateWheel();
