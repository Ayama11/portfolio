const projects = [
  {
    title: "Shifaa: Medical Question Classification",
    description:
      "End-to-end Arabic NLP system that classifies medical questions into 16 categories, returning top predictions with confidence scores.",
    tags: ["Transformers", "PyTorch", "Streamlit", "NLP"],
    links: {
      demo: "#",
      github: "#",
      hf: "https://huggingface.co/aya99ma/shifaa-bert-classifier"
    },
    highlight: "Accuracy ≈ 0.82 • F1-macro ≈ 0.70"
  },
  {
    title: "PlateMate: Smart Petri Dish AI",
    description:
      "AI-powered system automating Antibiotic Susceptibility Testing with high-precision detection and measurement.",
    tags: ["Python", "PyTorch", "OpenCV", "YOLOv8", "U-Net"],
    links: {
      demo: "https://drive.google.com/file/d/1XFtC8Gjgg-UMypgfO19UU5Gxn0KQ9igf/view?usp=drivesdk",
      github: "https://github.com/Ayama11/PlateMate",
      hf: ""
    },
    highlight: "Disc detection P/R > 0.90 • Dice = 0.94 • IoU = 0.91"
  },
  {
    title: "Antibiotic Expert System AI",
    description:
      "Rule-based AI system recommending personalized antibiotics and dosages for tonsillitis using Experta.",
    tags: ["Python", "Experta", "Inference Engine"],
    links: {
      demo: "#",
      github: "https://github.com/Ayama11/Antibiotic-Expert-System-AI",
      hf: ""
    },
    highlight: "Forward-chaining rules • Contraindication filtering"
  },
  {
    title: "Voyago: Travel Sidekick App",
    description:
      "Smart travel app for curated trips, booking management, and an AI travel assistant.",
    tags: ["Flutter", "Dart", "RestAPI"],
    links: {
      demo: "https://drive.google.com/file/d/1Wk15NWQm3mijWcTJ_iIKrxdei9vZhxiH/view?usp=drivesdk",
      github: "https://github.com/Ayaabq/voyago",
      hf: ""
    },
    highlight: "Maps • Stripe • Assistant chat"
  }
];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  children.forEach((c) => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  projects.forEach((p) => {
    const title = el("h3", { class: "project-title" }, [p.title]);
    const desc = el("p", { class: "project-desc" }, [p.description]);
    const highlight = el("div", { class: "badges" }, [
      el("span", { class: "badge" }, [p.highlight])
    ]);

    const tagsWrap = el("div", { class: "badges" }, [
      ...p.tags.map((t) => el("span", { class: "badge" }, [t])),
      ...(p.links.hf ? [el("span", { class: "badge hf" }, ["🤗 Hugging Face"])] : [])
    ]);

    const actions = el("div", { class: "project-actions" }, [
      el("a", { class: "small-btn primary", href: p.links.demo || "#", target: "_blank", rel: "noreferrer" }, ["Demo"]),
      el("a", { class: "small-btn", href: p.links.github || "#", target: "_blank", rel: "noreferrer" }, ["GitHub"]),
      ...(p.links.hf ? [el("a", { class: "small-btn hf", href: p.links.hf, target: "_blank", rel: "noreferrer" }, ["🤗 Model"])] : [])
    ]);

    const top = el("div", { class: "project-top" }, [
      el("div", {}, [title, desc]),
    ]);

    const card = el("article", { class: "card project" }, [top, highlight, tagsWrap, actions]);

    grid.appendChild(card);
  });
}

// mobile menu
function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (!btn || !mobileNav) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
setupMenu();
