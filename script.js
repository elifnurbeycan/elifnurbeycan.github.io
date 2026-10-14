const projects = [
  {
    title: "ATS System", short: "ATS System", category: "BACKEND · İŞE ALIM",
    desc: "Aday, pozisyon ve mülakat süreçleri için takip sistemi. Keycloak ile OAuth 2.0 / OpenID Connect ve şirket bazlı erişim ayrımı içeriyor.",
    tech: ["Spring Boot", "Keycloak", "Docker"], url: "https://github.com/elifnurbeycan/ats-system", label: "CANDIDATE FLOW / 01",
    cover: "./assets/projects/ats-system.png"
  },
  {
    title: "SpyderRobot", short: "SpyderRobot", category: "ROBOTİK · GÖMÜLÜ SİSTEMLER",
    desc: "Webots’ta geliştirilen yürüyüş kontrolünü gerçek altı bacaklı robota taşıyan takım projesi. 18 servo, Arduino Mega, firmware, kontrolcü ve kalibrasyon araçlarını kapsıyor.",
    tech: ["C++", "Arduino Mega", "Webots"], url: "https://github.com/elifnurbeycan/SpyderRobot", label: "HEXAPOD / 18 ACTUATORS",
    cover: "./assets/projects/spyderrobot.png"
  },
  {
    title: "SIRIUS Autonomous Forklift", short: "SIRIUS Forklift", category: "ROBOTİK · OTONOM SİSTEMLER",
    desc: "TEKNOFEST için geliştirilen otonom mobil forklift projesi. PLC/FMS haberleşmesi, sensör verileri ve web kontrol arayüzü üzerinde çalıştım.",
    tech: ["ROS 2", "Python", "Flask"], url: "https://github.com/elifnurbeycan/sirius-autonomous-forklift", label: "AUTONOMOUS FORKLIFT",
    cover: "./assets/projects/sirius-forklift.png"
  },
  {
    title: "Announcement Tracker", short: "Announcement Tracker", category: "OTOMASYON · WEB SCRAPING",
    desc: "Resmî duyuru kaynaklarını tarayıp güncellemeleri ileten Spring Boot uygulaması. Zamanlanmış ve paralel tarama stratejileri kullanıyor.",
    tech: ["Java", "Jsoup", "PostgreSQL"], url: "https://github.com/elifnurbeycan/announcement-tracker", label: "PUBLIC NOTICE TRACKER",
    cover: "./assets/projects/announcement-tracker.png"
  },
  {
    title: "SİNYAL Catalog", short: "SİNYAL Catalog", category: "MOBİL · IoT BİLEŞENLERİ",
    desc: "Sensör ve gömülü sistem bileşenlerini arama ve filtrelemeyle keşfetmeye, seçilen parçalarla proje kiti oluşturmaya yarayan Flutter uygulaması.",
    tech: ["Flutter", "Dart", "Local JSON"], url: "https://github.com/elifnurbeycan/sinyal-flutter-catalog", label: "COMPONENT CATALOG",
    cover: "./assets/projects/sinyal-catalog.png"
  },
  {
    title: "Garantim", short: "Garantim", category: "WEB · GARANTİ TAKİBİ",
    desc: "Satın alınan ürünlerin garanti sürelerini tek yerde takip etmeyi sağlayan responsive bir web uygulaması. Ürün kayıtları, arama ve filtreleme ile garanti bitiş takibi içeriyor.",
    tech: ["React", "TypeScript", "Vite", "LocalStorage"], url: "https://github.com/elifnurbeycan/garantim-web", label: "WARRANTY TRACKER / WEB APP",
    cover: "./assets/projects/garantim-web.png"
  },
  {
    title: "Visitor & Meeting Management", short: "Visitor & Meeting", category: "BACKEND · MULTI-TENANT",
    desc: "Şirketler için toplantı odası rezervasyon REST API’si. Tenant izolasyonu, yetkilendirme, audit log ve raporlama içeriyor.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL"], url: "https://github.com/elifnurbeycan/visitor-meeting-management", label: "MEETING MANAGEMENT API"
  },
  {
    title: "SafeWorker", short: "SafeWorker", category: "IoT · ÇALIŞAN GÜVENLİĞİ",
    desc: "Telefon sensörleriyle risk takibi, SOS ve tehlikeli bölge akışlarını mobil uygulama ve yönetici paneliyle birleştiren full-stack proje.",
    tech: ["Node.js", "Flutter", "React"], url: "https://github.com/elifnurbeycan/SafeWorker", label: "WORKER SAFETY / IoT",
    cover: "./assets/projects/safeworker.png"
  },
  {
    title: "Credit Card Default Prediction", short: "Credit Default", category: "MAKİNE ÖĞRENMESİ · FİNANS",
    desc: "UCI kredi kartı veri setinde keşifsel analiz, özellik mühendisliği ve sınıflandırma modelleriyle temerrüt tahmini çalışması.",
    tech: ["Python", "Pandas", "Scikit-learn"], url: "https://github.com/elifnurbeycan/credit-card-default-prediction", label: "CREDIT RISK / UCI DATA",
    cover: "./assets/projects/credit-card-default.png"
  },
  {
    title: "Galactic Shooter 2D", short: "Galactic Shooter", category: "OYUN · ARCADE",
    desc: "Unity ile geliştirilen 2D uzay savaş oyunu. Düşman üretimi, lazerler, güçlendirmeler ve skor sistemi içeriyor; WebGL sürümü tarayıcıda oynanabiliyor.",
    tech: ["Unity 6", "C#", "WebGL"], url: "https://github.com/elifnurbeycan/Galactic-Shooter-2D", label: "2D ARCADE / WEBGL",
    cover: "./assets/projects/galactic-shooter.png"
  },
  {
    title: "BLE Energy Optimizer", short: "BLE Energy", category: "IoT · MAKİNE ÖĞRENMESİ",
    desc: "BLE cihazlarında enerji tüketimi ve bağlantı kalitesini dengeleyen adaptif sistem. RSSI ve yayın verilerinden karar ağacıyla uygun güç seviyesini belirliyor.",
    tech: ["BLE", "IoT", "Decision Tree"], url: "https://github.com/elifnurbeycan/ble-energy-optimizer", label: "ADAPTIVE BLE / ENERGY"
  },
  {
    title: "Gladiator Duel AI", short: "Gladiator Duel", category: "OYUN · REINFORCEMENT LEARNING",
    desc: "Q-Learning kullanan uyarlanabilir bir ajanla sıra tabanlı dövüş oyunu. Durum, aksiyon ve ödül kavramlarını oyun mekaniği içinde deniyor.",
    tech: ["Unity", "C#", "Q-Learning"], url: "https://github.com/elifnurbeycan/GladiatorDuel_AI", label: "GAME AI / Q-LEARNING",
    cover: "./assets/projects/gladiator-duel.png"
  }
];

function projectImages(project) {
  const images = project.cover ? [project.cover] : [];
  if (Array.isArray(project.images)) images.push(...project.images);
  if (images.length) return images;
  return project.image ? [project.image] : [];
}

function projectImage(project, className, imageIndex = 0) {
  const images = projectImages(project);
  const source = images[imageIndex] || images[0];
  if (source) {
    return `<img class="${className}" src="${source}" alt="${project.title} projesinden görüntü" loading="${className === "preview-image" ? "eager" : "lazy"}" decoding="async">`;
  }
  return `<div class="${className} image-pending" aria-label="${project.title} için proje görseli eklenecek"><span>PROJE GÖRSELİ</span></div>`;
}

const pages = [...document.querySelectorAll("[data-view]")];
const tabs = [...document.querySelectorAll("[data-page]")];
const pageHashes = { about: "#hakkimda", projects: "#projeler", contact: "#iletisim" };
const pageFromHash = () => Object.keys(pageHashes).find(name => pageHashes[name] === location.hash) || "about";

function showPage(name) {
  if (!pages.some(page => page.dataset.view === name)) return;
  pages.forEach(page => {
    const active = page.dataset.view === name;
    page.hidden = !active;
    page.classList.toggle("is-active", active);
  });
  tabs.forEach(tab => {
    const active = tab.dataset.page === name;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  window.scrollTo(0, 0);
  if (name === "projects") requestAnimationFrame(fitPreviewWithinPanel);
}

function navigate(name) {
  showPage(name);
  if (location.hash !== pageHashes[name]) location.hash = pageHashes[name];
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => navigate(tab.dataset.page));
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    tabs[next].focus();
    navigate(tabs[next].dataset.page);
  });
});
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => {
  navigate(button.dataset.go);
  document.querySelector(`[data-page="${button.dataset.go}"]`)?.focus();
}));
document.querySelector(".wordmark").addEventListener("click", event => {
  event.preventDefault();
  navigate("about");
});
window.addEventListener("hashchange", () => {
  const name = pageFromHash();
  if (tabs.some(tab => tab.dataset.page === name && tab.classList.contains("is-active"))) return;
  showPage(name);
});

const wheel = document.querySelector("#wheel-track");
const cards = [];
let selectedProjectIndex = projects.length - 1;
let hasSelectedProject = false;
let hoveredProjectIndex = null;
const stage = document.querySelector("#wheel-stage");
const projectPrev = document.querySelector("#project-prev");
const projectNext = document.querySelector("#project-next");
const projectCount = document.querySelector("#project-count");
const previewFrame = document.querySelector("#preview-frame");
const previewExpand = document.querySelector("#preview-expand");
const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxPrev = document.querySelector("#lightbox-prev");
const lightboxNext = document.querySelector("#lightbox-next");
const lightboxClose = document.querySelector("#lightbox-close");
let displayedProjectIndex = selectedProjectIndex;
let previewSource = null;
let previewRequest = 0;
let lightboxProjectIndex = selectedProjectIndex;
let lightboxImageIndex = 0;
let lightboxReturnFocus = null;
let scrollPositionBeforeLightbox = 0;
let backgroundInertState = [];
const mobileGallery = window.matchMedia("(max-width: 900px)");
const archiveLayer = index => 10 + index;
projects.forEach((project, index) => {
  const card = document.createElement("button");
  card.className = "archive-file";
  card.type = "button";
  card.setAttribute("aria-label", `${project.title} projesini göster`);
  const cover = projectImages(project).length
    ? projectImage(project, "archive-file-image")
    : `<span class="archive-file-typographic">${project.short}</span>`;
  card.innerHTML = `<span class="archive-file-side" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="archive-file-face"><span class="archive-file-head"><span class="archive-file-index">${String(index + 1).padStart(2, "0")}</span><span class="archive-file-name">${project.short}</span></span><span class="archive-file-art">${cover}</span></span>`;
  card.addEventListener("click", () => selectProject(index, !(hasSelectedProject && selectedProjectIndex === index)));
  card.addEventListener("pointerenter", event => {
    if (event.pointerType === "mouse") showHover(index);
  });
  card.addEventListener("focus", () => {
    showHover(index);
  });
  wheel.appendChild(card);
  cards.push(card);
  card.addEventListener("pointerleave", () => clearHover(index));
  card.addEventListener("blur", () => clearHover(index));
});

function showHover(index) {
  if (hoveredProjectIndex === index) return;
  if (hoveredProjectIndex !== null && hoveredProjectIndex !== index) {
    cards[hoveredProjectIndex].classList.remove("is-hovered");
  }
  hoveredProjectIndex = index;
  cards[index].classList.add("is-hovered");
  renderProjectDetails(hoveredProjectIndex ?? selectedProjectIndex);
}

function clearHover(index) {
  if (hoveredProjectIndex !== index) return;
  hoveredProjectIndex = null;
  cards[index].classList.remove("is-hovered");
  renderProjectDetails(hoveredProjectIndex ?? selectedProjectIndex);
}

function layoutArchive() {
  if (mobileGallery.matches) return;
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  if (!width || !height) return;
  const count = projects.length;
  const railHeight = parseFloat(getComputedStyle(stage).getPropertyValue("--rail-height")) || 78;
  const displayHeight = height - railHeight;
  const gaps = count - 1;
  const marginX = Math.max(18, width * .035);
  const topMargin = 34;
  const bottomMargin = 16;
  const availableWidth = width - 2 * marginX;
  const availableHeight = displayHeight - topMargin - bottomMargin;
  const stepX = Math.min(19, Math.max(11, width * .023), availableWidth / (gaps + 3));
  const stepY = Math.min(30, Math.max(23, availableHeight * .05), availableHeight / (gaps + 3));
  const cardWidth = Math.min(430, width * .7, availableWidth - gaps * stepX);
  const cardHeight = Math.min(300, availableHeight - gaps * stepY);
  const firstX = (width - cardWidth - gaps * stepX) / 2;
  const firstY = topMargin + (availableHeight - cardHeight - gaps * stepY) / 2;
  cards.forEach((card, index) => {
    card.style.setProperty("--file-left", `${firstX + index * stepX}px`);
    card.style.setProperty("--file-top", `${firstY + index * stepY}px`);
  });
  wheel.style.setProperty("--archive-card-width", `${cardWidth}px`);
  wheel.style.setProperty("--archive-card-height", `${cardHeight}px`);
  wheel.style.setProperty("--archive-head-height", `${stepY}px`);
}

new ResizeObserver(layoutArchive).observe(stage);

function browseProject(index) {
  selectProject(index, true);
}

function selectProject(index, persist = true) {
  const nextSelected = (index + projects.length) % projects.length;
  selectedProjectIndex = nextSelected;
  hasSelectedProject = persist;
  hoveredProjectIndex = null;
  cards.forEach((card, i) => {
    card.classList.toggle("is-selected", hasSelectedProject && i === selectedProjectIndex);
    card.classList.remove("is-hovered");
    card.setAttribute("aria-pressed", String(hasSelectedProject && i === selectedProjectIndex));
    card.setAttribute("aria-label", `${projects[i].title} dosyasını ${hasSelectedProject && i === selectedProjectIndex ? "kapat" : "aç"}`);
    card.tabIndex = 0;
    card.style.zIndex = String(archiveLayer(i));
  });
  renderProjectDetails(selectedProjectIndex);
}

function renderProjectDetails(index) {
  const project = projects[index];
  displayedProjectIndex = index;
  document.querySelector("#detail-category").textContent = project.category;
  document.querySelector("#detail-title").textContent = project.title;
  document.querySelector("#detail-description").textContent = project.desc;
  document.querySelector("#detail-link").href = project.url;
  document.querySelector("#detail-link").setAttribute("aria-label", `${project.title} projesini GitHub'da aç`);
  document.querySelector("#preview-label").textContent = project.label;
  const previewArt = document.querySelector("#preview-art");
  const source = projectImages(project)[0] || null;
  const hasPreviewImage = Boolean(source);
  previewFrame.classList.toggle("has-image", hasPreviewImage);
  previewExpand.hidden = !hasPreviewImage;
  previewExpand.disabled = !hasPreviewImage;
  previewExpand.setAttribute("aria-label", `${project.title} görselini büyüt`);
  document.querySelector("#preview-index").textContent = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  projectCount.textContent = `${String(selectedProjectIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  document.querySelector("#wheel-status").textContent = `${String(index + 1).padStart(2, "0")} — ${project.short.toLocaleUpperCase("tr-TR")}`;
  const tech = document.querySelector("#detail-tech");
  tech.replaceChildren(...project.tech.map(name => {
    const tag = document.createElement("span");
    tag.textContent = name;
    return tag;
  }));
  fitPreviewWithinPanel();
  if (source === previewSource && previewArt.firstElementChild) return;

  previewSource = source;
  const request = ++previewRequest;
  previewFrame.classList.remove("is-portrait");
  if (!source) {
    previewArt.innerHTML = projectImage(project, "preview-image");
    return;
  }

  const image = document.createElement("img");
  image.className = "preview-image";
  image.alt = `${project.title} projesinden görüntü`;
  image.decoding = "async";
  image.style.visibility = "hidden";
  let revealed = false;
  const reveal = () => {
    if (revealed || request !== previewRequest || previewArt.firstElementChild !== image || !image.naturalWidth || !image.naturalHeight) return;
    revealed = true;
    previewFrame.classList.toggle("is-portrait", image.naturalHeight > image.naturalWidth);
    fitPreviewWithinPanel();
    image.style.visibility = "";
  };
  image.addEventListener("load", reveal, { once: true });
  image.addEventListener("error", () => {
    if (request !== previewRequest) return;
    previewSource = null;
    previewFrame.classList.remove("has-image", "is-portrait");
    previewExpand.hidden = true;
    previewExpand.disabled = true;
    previewArt.innerHTML = projectImage({ ...project, cover: undefined, images: [], image: undefined }, "preview-image");
  }, { once: true });
  previewArt.replaceChildren(image);
  image.src = source;
  if (image.complete && image.naturalWidth) reveal();
}

function fitPreviewWithinPanel() {
  if (mobileGallery.matches) {
    previewFrame.style.removeProperty("--preview-available-height");
    return;
  }
  const detail = previewFrame.closest(".project-detail");
  const layout = detail.closest(".project-layout");
  if (!layout.getClientRects().length) return;
  const layoutHeight = parseFloat(getComputedStyle(layout).minHeight);
  const detailStyle = getComputedStyle(detail);
  const linkBottom = document.querySelector("#detail-link").getBoundingClientRect().bottom;
  const panelBottom = detail.getBoundingClientRect().top + layoutHeight - parseFloat(detailStyle.paddingBottom);
  const availableHeight = Math.max(0, Math.floor(panelBottom - linkBottom - 24));
  previewFrame.style.setProperty("--preview-available-height", `${availableHeight}px`);
}

window.addEventListener("resize", fitPreviewWithinPanel);

stage.addEventListener("pointerleave", () => {
  if (mobileGallery.matches || hoveredProjectIndex === null) return;
  clearHover(hoveredProjectIndex);
});

document.addEventListener("keydown", event => {
  if (!lightbox.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      browseLightbox(event.key === "ArrowLeft" ? -1 : 1);
    } else if (event.key === "Tab") {
      const focusables = [lightboxPrev, lightboxNext, lightboxClose];
      const current = focusables.indexOf(document.activeElement);
      if (event.shiftKey && current <= 0) {
        event.preventDefault();
        lightboxClose.focus();
      } else if (!event.shiftKey && (current === focusables.length - 1 || current < 0)) {
        event.preventDefault();
        lightboxPrev.focus();
      }
    }
    return;
  }
});

stage.addEventListener("keydown", event => {
  const focusedTab = event.target.closest(".archive-file");
  if (!focusedTab || !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const current = cards.indexOf(focusedTab);
  const next = event.key === "Home" ? 0 : event.key === "End" ? projects.length - 1 : (current + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : projects.length - 1)) % projects.length;
  selectProject(next, true);
  cards[next].focus();
});

function renderLightboxProject() {
  const project = projects[lightboxProjectIndex];
  const images = projectImages(project);
  lightboxImageIndex %= images.length;
  lightboxImage.src = images[lightboxImageIndex];
  lightboxImage.alt = `${project.title} projesinden görüntü`;
  lightboxCaption.textContent = images.length > 1 ? `${project.title} — ${lightboxImageIndex + 1} / ${images.length}` : project.title;
  lightboxPrev.setAttribute("aria-label", `Önceki proje: ${projects[nextImageProjectIndex(lightboxProjectIndex, -1)].title}`);
  lightboxNext.setAttribute("aria-label", `Sonraki proje: ${projects[nextImageProjectIndex(lightboxProjectIndex, 1)].title}`);
}

function nextImageProjectIndex(index, direction) {
  let next = index;
  do {
    next = (next + direction + projects.length) % projects.length;
  } while (!projectImages(projects[next]).length && next !== index);
  return next;
}

function openLightbox(index, imageIndex = 0) {
  if (!lightbox.hidden || !projectImages(projects[index]).length) return;
  lightboxProjectIndex = index;
  lightboxImageIndex = imageIndex;
  lightboxReturnFocus = document.activeElement === document.body ? previewExpand : document.activeElement;
  renderLightboxProject();
  scrollPositionBeforeLightbox = window.scrollY;
  backgroundInertState = [...document.body.children]
    .filter(element => element !== lightbox && element.tagName !== "SCRIPT")
    .map(element => ({ element, inert: element.inert }));
  backgroundInertState.forEach(({ element }) => { element.inert = true; });
  lightbox.hidden = false;
  document.body.style.setProperty("--lightbox-scroll-offset", `-${scrollPositionBeforeLightbox}px`);
  document.documentElement.classList.add("lightbox-open");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function browseLightbox(direction) {
  lightboxProjectIndex = nextImageProjectIndex(lightboxProjectIndex, direction);
  lightboxImageIndex = 0;
  renderLightboxProject();
}

function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  backgroundInertState.forEach(({ element, inert }) => { element.inert = inert; });
  backgroundInertState = [];
  document.documentElement.classList.remove("lightbox-open");
  document.body.classList.remove("lightbox-open");
  document.body.style.removeProperty("--lightbox-scroll-offset");
  window.scrollTo(0, scrollPositionBeforeLightbox);
  lightboxImage.removeAttribute("src");
  if (lightboxReturnFocus?.isConnected && !lightboxReturnFocus.hidden) lightboxReturnFocus.focus({ preventScroll: true });
  lightboxReturnFocus = null;
}

previewFrame.addEventListener("click", () => {
  openLightbox(displayedProjectIndex);
});
lightboxPrev.addEventListener("click", () => browseLightbox(-1));
lightboxNext.addEventListener("click", () => browseLightbox(1));
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

projectPrev.addEventListener("click", () => browseProject(selectedProjectIndex - 1));
projectNext.addEventListener("click", () => browseProject(selectedProjectIndex + 1));

document.querySelector("#project-total").textContent = `${projects.length} PROJE`;
document.querySelector("#archive-label").textContent = `${projects.length} PROJE / DOSYA ARŞİVİ`;
const copyEmailButton = document.querySelector("#contact-copy-button");
const copyEmailFeedback = document.querySelector("#contact-copy-feedback");
let copyEmailFeedbackTimer;

function copyEmailFallback(value) {
  const field = document.createElement("textarea");
  field.value = value;
  field.readOnly = true;
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  try { return document.execCommand("copy"); }
  catch { return false; }
  finally { field.remove(); copyEmailButton.focus({ preventScroll: true }); }
}

copyEmailButton.addEventListener("click", async () => {
  const address = document.querySelector("#contact-email-address").textContent.trim();
  let copied = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(address);
      copied = true;
    }
  } catch { /* file:// veya izin kısıtı için aşağıdaki yerel yedek yolu kullanılır. */ }
  if (!copied) copied = copyEmailFallback(address);
  copyEmailFeedback.textContent = copied ? "Kopyalandı" : "Kopyalanamadı";
  clearTimeout(copyEmailFeedbackTimer);
  copyEmailFeedbackTimer = setTimeout(() => { copyEmailFeedback.textContent = ""; }, 1800);
});
document.querySelectorAll(".certificates-chapter [data-verification-url]").forEach(row => {
  const value = row.dataset.verificationUrl.trim();
  if (!value) return;
  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== "https:") return;
  const link = document.createElement("a");
  link.className = "certificate-link";
  link.href = url.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "↗";
  link.setAttribute("aria-label", `${row.querySelector("h3").textContent} sertifikasını doğrula`);
  row.querySelector("h3").appendChild(link);
});
selectProject(selectedProjectIndex, false);
showPage(pageFromHash());
requestAnimationFrame(layoutArchive);
