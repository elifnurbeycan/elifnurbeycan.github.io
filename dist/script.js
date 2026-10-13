const projects = [
  {
    title: "SIRIUS<br>AUTONOMOUS",
    short: "SIRIUS Autonomous",
    type: "Robotik · Gerçek zamanlı",
    desc: "TEKNOFEST 2026 için geliştirilen otonom mobil forklift. ROS 2, sensör füzyonu, PLC/FMS haberleşmesi ve web kontrol arayüzü.",
    tech: "ROS 2 · Python · Flask",
    url: "https://github.com/elifnurbeycan/sirius-autonomous-forklift",
    art: "sirius",
    accent: "#a78bfa"
  },
  {
    title: "VISITOR &<br>MEETING",
    short: "Visitor & Meeting",
    type: "Backend · Multi-tenant SaaS",
    desc: "Şirket çapında oda rezervasyonu için granular yetki, tenant izolasyonu, audit log ve raporlama içeren production-ready REST API.",
    tech: "Java 21 · Spring · PostgreSQL",
    url: "https://github.com/elifnurbeycan/visitor-meeting-management",
    art: "meeting",
    accent: "#d8b4fe"
  },
  {
    title: "SAFE<br>WORKER",
    short: "SafeWorker",
    type: "IoT · İş güvenliği",
    desc: "Telefon sensörleriyle gerçek zamanlı risk tespiti, SOS akışı, tehlikeli bölge takibi ve canlı yönetici panelini bir araya getiren full-stack MVP.",
    tech: "Node.js · Flutter · React",
    url: "https://github.com/elifnurbeycan/SafeWorker",
    art: "safety",
    accent: "#c4b5fd"
  },
  {
    title: "SİNYAL<br>CATALOG",
    short: "SİNYAL Catalog",
    type: "Mobile · IoT kataloğu",
    desc: "Sensör ve gömülü sistem bileşenleri için çevrimdışı çalışan, filtrelenebilir ve proje kiti oluşturabilen editoryal Flutter deneyimi.",
    tech: "Flutter · Dart · Material 3",
    url: "https://github.com/elifnurbeycan/sinyal-flutter-catalog",
    art: "signal",
    accent: "#e9d5ff"
  },
  {
    title: "ATS<br>SYSTEM",
    short: "ATS System",
    type: "Backend · İnsan kaynakları",
    desc: "Aday, pozisyon ve mülakat süreçleri için Keycloak tabanlı kimlik yönetimi ve kurum bazlı veri izolasyonu sunan takip sistemi.",
    tech: "Spring Boot · Keycloak · Docker",
    url: "https://github.com/elifnurbeycan/ats-system",
    art: "ats",
    accent: "#8b5cf6"
  },
  {
    title: "ANNOUNCEMENT<br>TRACKER",
    short: "Announcement Tracker",
    type: "Automation · Web scraping",
    desc: "Resmî kaynakları paralel tarayan, ilgili duyuruları sınıflandırıp çalışanlara güvenilir bir outbox akışıyla ileten Spring Boot uygulaması.",
    tech: "Java · Jsoup · Testcontainers",
    url: "https://github.com/elifnurbeycan/announcement-tracker",
    art: "announce",
    accent: "#c084fc"
  },
  {
    title: "DEFAULT<br>PREDICTION",
    short: "Default Prediction",
    type: "Machine learning · Finans",
    desc: "30 bin müşteri kaydı üzerinde özellik mühendisliği, Random Forest optimizasyonu ve performans değerlendirmesiyle kredi temerrüt tahmini.",
    tech: "Python · Pandas · Scikit-learn",
    url: "https://github.com/elifnurbeycan/credit-card-default-prediction",
    art: "ml",
    accent: "#a78bfa"
  },
  {
    title: "GLADIATOR<br>DUEL AI",
    short: "Gladiator Duel AI",
    type: "Game AI · Reinforcement learning",
    desc: "Durum, aksiyon, ödül ve keşif kavramlarını oynanabilir sıra tabanlı bir dövüş sisteminde birleştiren Q-Learning ajanı.",
    tech: "Unity · C# · Q-Learning",
    url: "https://github.com/elifnurbeycan/GladiatorDuel_AI",
    art: "gladiator",
    accent: "#ddd6fe"
  }
];

const artTemplates = {
  sirius: `<div class="radar"><i></i><i></i><i></i><b></b></div><div class="forklift"><i></i><b></b><em></em></div><div class="route"><i></i><i></i><i></i></div>`,
  meeting: `<div class="room-plan"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="booking"><b>10:30</b><span>ROOM_04</span></div><div class="tenant-tag">TENANT / 07</div>`,
  safety: `<div class="phone"><div class="pulse"><i></i></div><span>SOS</span></div><div class="sensor-lines"><i></i><i></i><i></i></div><div class="risk">RISK <b>84</b></div>`,
  signal: `<div class="chip"><span>SİNYAL</span><i></i><i></i><i></i><i></i></div><div class="circuit c1"></div><div class="circuit c2"></div><div class="catalog-code">COMPONENT<br>CATALOG_24</div>`,
  ats: `<div class="pipeline"><i><b>12</b></i><i><b>07</b></i><i><b>03</b></i></div><div class="candidate"><span></span><b>ELIF_01</b></div><div class="flow-arrow">→</div>`,
  announce: `<div class="documents"><i></i><i></i><i></i></div><div class="scanner"></div><div class="source-count"><b>06</b><span>LIVE SOURCES</span></div>`,
  ml: `<div class="ml-chart"><i></i><i></i><i></i><i></i><i></i><svg viewBox="0 0 200 90"><path d="M0 79 C38 72, 42 55, 71 59 S115 22, 140 36 S171 16, 200 4"/></svg></div><div class="metric">ROC—AUC <b>.77</b></div>`,
  gladiator: `<div class="arena"><i></i><b>VS</b></div><div class="sword s1"></div><div class="sword s2"></div><div class="reward">Q(s,a) +1.0</div>`
};

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
    <div class="project-visual art-${project.art}">
      <div class="visual-grid"></div>
      ${artTemplates[project.art]}
    </div>
    <div class="card-glare"></div>
    <span class="card-no">${String(index + 1).padStart(2,"0")}</span>
    <div class="project-card-content"><small>${project.type}</small><h3>${project.short}</h3></div>`;
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
  document.querySelectorAll(".project-card").forEach((card, i) => card.classList.toggle("is-active", i === index));
}

let targetProgress = 0;
let smoothProgress = 0;
let animationFrame = 0;

function updateWheel() {
  if (innerWidth <= 820) return;
  const section = document.querySelector(".project-scroll");
  const rect = section.getBoundingClientRect();
  const max = section.offsetHeight - innerHeight;
  targetProgress = Math.min(1, Math.max(0, -rect.top / max));
  if (!animationFrame) animationFrame = requestAnimationFrame(animateWheel);
}

function animateWheel() {
  smoothProgress += (targetProgress - smoothProgress) * .095;
  wheel.style.setProperty("--rotation", `${smoothProgress * -315}deg`);
  els.progress.style.width = `${smoothProgress * 100}%`;
  renderProject(Math.min(projects.length - 1, Math.round(smoothProgress * (projects.length - 1))));
  if (Math.abs(targetProgress - smoothProgress) > .0001) animationFrame = requestAnimationFrame(animateWheel);
  else animationFrame = 0;
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
