const PROJECTS = {
  "4": {
    id: "4",
    title: "Shifaa: Medical Question Classification",
    description:
      "End-to-end Arabic NLP system that classifies medical questions from Shifaa into 16 categories, returning top predictions with confidence scores.",
    tech: ["Transformers", "PyTorch", "Streamlit", "NLP"],
    highlight: "Accuracy ≈ 0.82 • F1-macro ≈ 0.70",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    links: {
      demo: "#",
      github: "#",
      hf: "https://huggingface.co/aya99ma/shifaa-bert-classifier"
    },
    fullHtml: `
      <h3>🧠 Description</h3>
      <p>Shifaa Medical Question Classification is an end-to-end Arabic NLP system that automatically categorizes medical questions into <strong>16 medical categories</strong>. It returns confidence scores to support faster routing and organization of medical Q&A.</p>

      <h3>🎯 Objectives</h3>
      <ul>
        <li>Automate categorization of Arabic medical questions into specialty-based classes.</li>
        <li>Reduce manual effort and improve consistency in routing/labeling.</li>
        <li>Provide a deployable pipeline from training to demo.</li>
        <li>Enable quick testing through an interactive interface.</li>
      </ul>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>Arabic text classification (16 classes) using fine-tuned AraBERT.</li>
        <li>Top-k predictions + confidence scores.</li>
        <li>Optimized inference with caching for smoother UX.</li>
        <li>Model published on Hugging Face with a structured model card.</li>
        <li>Streamlit web interface deployed for public access.</li>
      </ul>

      <h3>🧩 Dataset</h3>
      <ul>
        <li>Arabic medical questions/consultations (Shifaa-related dataset).</li>
        <li>Labels mapped to 16 medical specialties.</li>
        <li>Preprocessing: tokenization + truncation/padding for transformers.</li>
      </ul>

      <h3>📊 Results</h3>
      <ul>
        <li>Accuracy ≈ 0.82</li>
        <li>F1-macro ≈ 0.70</li>
        <li>Deployed as a lightweight web app for real-time testing.</li>
      </ul>
    `
  },

  "1": {
    id: "1",
    title: "PlateMate: Smart Petri Dish AI",
    description:
      "AI-powered system automating Antibiotic Susceptibility Testing with high-precision detection and measurement.",
    tech: ["PyTorch", "OpenCV", "Python", "YOLOv8", "U-Net"],
    highlight: "P/R > 0.90 • Dice = 0.94 • IoU = 0.91",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/1d49b888-d6ec-427f-9429-8a3e95046a7a.jpeg",
    links: {
      demo: "https://drive.google.com/file/d/1XFtC8Gjgg-UMypgfO19UU5Gxn0KQ9igf/view?usp=drivesdk",
      github: "https://github.com/Ayama11/PlateMate",
      hf: ""
    },
    fullHtml: `
      <h3>🧠 Description</h3>
      <p>PlateMate is a computer vision system that automates <strong>Antibiotic Susceptibility Testing (AST)</strong> by detecting antibiotic discs and measuring inhibition zones with high precision.</p>

      <h3>🎯 Objectives</h3>
      <ul>
        <li>Reduce manual workload for lab staff.</li>
        <li>Improve accuracy and reproducibility of measurements.</li>
        <li>Enable resource-limited labs to conduct AST efficiently.</li>
        <li>Generate automated reports from captured images.</li>
      </ul>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>Disc detection using YOLOv8 (Precision/Recall &gt; 0.90).</li>
        <li>Zone segmentation using U-Net + ResNet34 (Dice = 0.94, IoU = 0.91).</li>
        <li>Pixel-level zone measurement + mobile-friendly reporting.</li>
      </ul>

      <h3>🧩 Dataset</h3>
      <ul>
        <li>326 real Petri dish images collected from Damascus labs.</li>
        <li>40 antibiotic types with robust preprocessing + augmentation.</li>
      </ul>

      <h3>📊 Results</h3>
      <ul>
        <li>Precision &gt; 0.90, Recall &gt; 0.90 (disc detection)</li>
        <li>Dice = 0.94, IoU = 0.91 (segmentation)</li>
        <li>Integrated into a mobile application for real-time analysis.</li>
      </ul>
    `
  },

  "2": {
    id: "2",
    title: "Antibiotic Expert System AI",
    description:
      "Rule-based system recommending personalized antibiotics and dosages for tonsillitis using Experta.",
    tech: ["Python", "Experta", "Inference Engine"],
    highlight: "Forward-chaining rules • Contraindication filtering",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/6419bd37-a320-43a3-b73c-31fa184eee64.png",
    links: {
      demo: "#",
      github: "https://github.com/Ayama11/Antibiotic-Expert-System-AI",
      hf: ""
    },
    fullHtml: `
      <h3>🧠 Description</h3>
      <p>A rule-driven medical expert system built with <strong>Experta</strong> that recommends antibiotics and doses based on patient factors (age, pregnancy, allergies, renal/liver conditions, and resistance).</p>

      <h3>🎯 Key Objectives</h3>
      <ul>
        <li>Personalized antibiotic recommendation for tonsillitis.</li>
        <li>Contraindication filtering and dosage selection.</li>
        <li>Interactive Q&amp;A with forward-chaining inference.</li>
      </ul>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>Rule-based inference engine using Experta.</li>
        <li>Automatic scoring + filtering of contraindicated options.</li>
        <li>Dosage logic for adults/children/pregnancy and renal status.</li>
      </ul>
    `
  },

  "3": {
    id: "3",
    title: "Voyago: Travel Sidekick App",
    description:
      "Smart travel app for curated trips, booking management, and an AI travel assistant.",
    tech: ["Flutter", "RestAPI", "Dart"],
    highlight: "Maps • Stripe • Assistant chat",
    image:
      "https://app.trickle.so/storage/public/images/usr_176aeb1f58000001/ee840d5c-78bf-4a09-a86c-186900a9eb66.jpeg",
    links: {
      demo: "https://drive.google.com/file/d/1Wk15NWQm3mijWcTJ_iIKrxdei9vZhxiH/view?usp=drivesdk",
      github: "https://github.com/Ayaabq/voyago",
      hf: ""
    },
    fullHtml: `
      <h3>🧠 Description</h3>
      <p>Voyago is a travel application offering curated trips, booking management, secure payments, and an AI assistant chat for travel support.</p>

      <h3>🎯 Objectives</h3>
      <ul>
        <li>Curated and customizable travel journeys.</li>
        <li>Secure payment processing and reservation management.</li>
        <li>Real-time info (weather/currency) + navigation support.</li>
      </ul>

      <h3>🚀 Key Features</h3>
      <ul>
        <li>Stripe payments, Google Maps, real-time weather/currency.</li>
        <li>AI assistant chat + multilingual user experience.</li>
        <li>Flutter architecture: MVVM, BLoC/Cubit, GoRouter, Secure Storage.</li>
      </ul>
    `
  }
};

function $(id){ return document.getElementById(id); }

function setupMenu(){
  const btn = $("menuBtn");
  const nav = $("mobileNav");
  if(!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    nav.hidden = isOpen;
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      nav.hidden = true;
    });
  });
}

function renderProjectsList(){
  const list = $("projectsList");
  if(!list) return;

  const order = ["4","1","2","3"]; // ✅ Shifaa then PlateMate then Expert then Voyago

  order.forEach((id) => {
    const p = PROJECTS[id];
    const item = document.createElement("article");
    item.className = "card project-item";
    item.tabIndex = 0;

    item.addEventListener("click", () => {
      window.location.href = `project.html?id=${encodeURIComponent(p.id)}`;
    });
    item.addEventListener("keydown", (e) => {
      if(e.key === "Enter") window.location.href = `project.html?id=${encodeURIComponent(p.id)}`;
    });

    item.innerHTML = `
      <div class="project-head">
        <div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
        </div>
      </div>

      <div class="badges">
        <span class="badge">${p.highlight}</span>
        ${p.links.hf ? `<span class="badge hf">🤗 Hugging Face</span>` : ``}
      </div>

      <div class="badges">
        ${p.tech.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>
    `;

    list.appendChild(item);
  });
}

function renderProjectDetail(){
  const root = $("projectDetail");
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "4";
  const p = PROJECTS[id] || PROJECTS["4"];

  document.title = `${p.title} | Aya Almalla`;

  const hfBtn = p.links.hf
    ? `<a class="btn hf" href="${p.links.hf}" target="_blank" rel="noreferrer">🤗 Hugging Face</a>`
    : "";

  root.innerHTML = `
    <h1 class="detail-title">${p.title}</h1>
    <p class="detail-desc">${p.description}</p>

    <img class="detail-img" src="${p.image}" alt="${p.title}" loading="lazy" />

    <div class="detail-block card">
      <div class="badges" style="margin-bottom:10px;">
        <span class="badge">${p.highlight}</span>
      </div>

      <div class="badges" style="margin-bottom:14px;">
        ${p.tech.map(t => `<span class="badge">${t}</span>`).join("")}
      </div>

      <div class="actions">
        <a class="btn btn-primary btn-sm" href="${p.links.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a class="btn btn-ghost btn-sm" href="${p.links.github}" target="_blank" rel="noreferrer">GitHub</a>
        ${hfBtn}
      </div>
    </div>

    <div class="detail-block card" style="margin-top:12px;">
      <div class="detail-html">${p.fullHtml}</div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const year = $("year");
  if(year) year.textContent = new Date().getFullYear();

  setupMenu();
  renderProjectsList();
  renderProjectDetail();
});
