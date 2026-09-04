const diagnostics = {
  requirements: {
    copy: "Find the missing rules, edge cases and assumptions—then turn them into something a team can actually build and test.",
    tools: ["Requirements", "Workflows", "Acceptance criteria"],
  },
  quality: {
    copy: "Put evidence where the optimism is: validate the APIs, data and end-to-end behaviour before release day becomes an adrenaline sport.",
    tools: ["Automation", "Regression", "API + DB checks"],
  },
  incident: {
    copy: "Reproduce the behaviour, trace the data and dependencies, measure the impact, and give the team a smaller, better problem to solve.",
    tools: ["SQL", "Root cause analysis", "Triage"],
  },
  process: {
    copy: "Map what actually happens—not what the diagram claims happens—then simplify the hand-offs, rules and decision points.",
    tools: ["Process mapping", "System analysis", "Stakeholder alignment"],
  },
};

const modeButtons = document.querySelectorAll(".mode-button");
const resultCopy = document.querySelector("#result-copy");
const resultTools = document.querySelector("#result-tools");

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = diagnostics[button.dataset.mode];
    modeButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    resultCopy.textContent = selected.copy;
    resultTools.replaceChildren(
      ...selected.tools.map((tool) => {
        const tag = document.createElement("span");
        tag.textContent = tool;
        return tag;
      }),
    );
  });
});

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

menuButton.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.textContent = willOpen ? "Close" : "Menu";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

const pinkSwitch = document.querySelector(".pink-switch");

pinkSwitch.addEventListener("click", () => {
  const isMaximumPink = document.body.classList.toggle("pink-max");
  pinkSwitch.setAttribute("aria-pressed", String(isMaximumPink));
  pinkSwitch.textContent = isMaximumPink ? "Okay, that is pink" : "Make it pinker";
});

const chabiKnowledgeBase = [
  {
    keywords: ["who is chabi", "who is mmasechaba", "tell me about chabi", "tell me about mmasechaba", "mmasechaba francesca seopa"],
    answer: "Mmasechaba Francesca Seopa, or Chabi, is a Technical Systems Analyst with more than four years of experience across systems analysis, software development, configuration engineering, software quality and production support.",
  },
  {
    keywords: ["what does chabi do", "what does mmasechaba do", "current role", "job title", "occupation", "technical systems analyst"],
    answer: "Mmasechaba is a Technical Systems Analyst at Digitata Networks. She translates business and technical needs into requirements, workflows, solution designs and documentation, and she also supports integrations, releases and production investigations.",
  },
  {
    keywords: ["experience", "career", "work history", "previous roles", "past roles", "employers", "companies", "years of experience"],
    answer: "She has more than four years of technology experience spanning systems analysis, configuration engineering, software development, QA, telecommunications, IoT and production support. Her experience includes Digitata Networks, MTN South Africa, MethodData, UCT Research Contracts & Innovation and Pragma Global.",
  },
  {
    keywords: ["skills", "technical skills", "tech stack", "toolbox", "technologies", "programming languages", "tools", "sql", "python", "javascript", "bash", "postgresql", "mariadb", "devexpress", "robot framework", "rest api", "rest APIs"],
    answer: "Her toolkit includes SQL, Python, JavaScript, Bash, PostgreSQL, MariaDB, REST APIs, Git, Robot Framework, DevExpress and low-code configuration. She also works with requirements, process mapping, data flows, functional specifications and Agile delivery.",
  },
  {
    keywords: ["systems analysis", "business analysis", "requirements", "process mapping", "data flow", "functional specification", "stakeholders", "analysis work"],
    answer: "In systems and business analysis, she explores stakeholder needs, business rules and technical constraints, traces processes and data flows, and turns findings into clear requirements, workflows, functional specifications and acceptance criteria.",
  },
  {
    keywords: ["quality assurance", "software quality", "qa", "testing", "test automation", "regression", "acceptance testing", "api testing", "database testing"],
    answer: "Her software quality experience includes test automation, functional, integration, regression, system, API, database and acceptance testing. She has built and maintained Robot Framework tests and supported end-to-end validation and release confidence.",
  },
  {
    keywords: ["software development", "developer", "coding", "build", "configuration engineering", "low code", "configure"],
    answer: "Her development and configuration work includes JavaScript, Python, SQL, Bash, REST APIs, databases, DevExpress and low-code process configuration. She has worked across frontend, backend, debugging, testing and deployment activities.",
  },
  {
    keywords: ["production support", "incident", "root cause", "telecommunications", "telecoms", "iot", "m2m", "operations", "deployment", "release support"],
    answer: "She has supported telecommunications, IoT and M2M platforms in production. Her work includes incident triage, SQL and data inspection, defect reproduction, root-cause investigation, monitoring, deployment support and release verification.",
  },
  {
    keywords: ["education", "degree", "degrees", "qualification", "qualifications", "university", "uct", "mechanical engineering", "mechatronic engineering"],
    answer: "She holds a BSc in Mechanical and Mechatronic Engineering from the University of Cape Town and is completing an MCom in Information Systems at UCT.",
  },
  {
    keywords: ["research", "studying", "what is she studying", "masters", "master's", "mcom", "dissertation", "scrum", "critical success factor", "sqa"],
    answer: "Her MCom in Information Systems research examines how Software Quality Assurance testing practices contribute to Agile project success in Scrum, with SQA treated as a cross-cutting critical success factor.",
  },
  {
    keywords: ["certification", "certifications", "istqb", "ecsa", "professional status", "candidate engineer"],
    answer: "She is an ISTQB® Certified Tester Foundation Level professional and an ECSA Candidate Engineer in Computer Engineering.",
  },
  {
    keywords: ["future", "career direction", "career goals", "technology consulting", "professional engineering", "next step"],
    answer: "She is building toward work that combines technology consulting and professional computer engineering with systems analysis, software quality and reliable solution delivery.",
  },
  {
    keywords: ["location", "where is she", "where does she live", "based", "johannesburg", "south africa"],
    answer: "Mmasechaba is based in Johannesburg, Gauteng, South Africa.",
  },
  {
    keywords: ["contact", "email", "linkedin", "github", "reach her", "get in touch", "hire", "available", "opportunity"],
    answer: "You can contact Mmasechaba at chabi.seopa@gmail.com, connect with her at linkedin.com/in/chabi-seopa, or view her work at github.com/charbileigh.",
  },
];

const chatbot = document.querySelector(".chabi-chatbot");
const chatPanel = document.querySelector("#chabi-chat-panel");
const chatLauncher = document.querySelector(".chat-launcher");
const chatClose = document.querySelector(".chat-close");
const chatMessages = document.querySelector("#chat-messages");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatSubmit = chatForm.querySelector('button[type="submit"]');
const suggestionButtons = document.querySelectorAll("[data-chat-question]");
const unrelatedReply = "ask a question related the Mmasechaba Francesca Seopa only and please try again";
const unknownRelatedReply = "I do not have a verified answer for that. Please contact Mmasechaba at chabi.seopa@gmail.com or connect with her at linkedin.com/in/chabi-seopa.";
let chatIsBusy = false;

function normalizeQuestion(question) {
  return question
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9+#.'\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordScore(question, keyword) {
  const normalizedKeyword = normalizeQuestion(keyword);
  if (question === normalizedKeyword) return 12;
  if (!question.includes(normalizedKeyword)) return 0;
  return normalizedKeyword.includes(" ") ? 5 : 2;
}

function getChabiReply(question) {
  const normalized = normalizeQuestion(question);

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(normalized)) {
    return "Hello! Ask me about Mmasechaba's work, skills, education, research or how to contact her.";
  }

  if (/^(thanks|thank you|thank you so much|bye|goodbye)[.!\s]*$/.test(normalized)) {
    return "You’re welcome. I’m here if you want to know anything else about Mmasechaba.";
  }

  let bestMatch = null;
  let bestScore = 0;

  chabiKnowledgeBase.forEach((topic) => {
    const score = topic.keywords.reduce((total, keyword) => total + keywordScore(normalized, keyword), 0);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = topic;
    }
  });

  if (bestMatch) return bestMatch.answer;

  const relatedIndicators = [
    "mmasechaba",
    "francesca",
    "seopa",
    "chabi",
    " she ",
    " her ",
    " hers ",
    "about her",
    "about you",
    " your ",
    "favorite",
    "favourite",
    "birthday",
    "how old",
  ];
  const paddedQuestion = ` ${normalized} `;
  const isRelated = relatedIndicators.some((indicator) => paddedQuestion.includes(indicator));

  return isRelated ? unknownRelatedReply : unrelatedReply;
}

function addChatMessage(copy, sender, extraClass = "") {
  const message = document.createElement("div");
  message.className = `chat-message ${sender === "bot" ? "bot-message" : "user-message"} ${extraClass}`.trim();

  if (sender === "bot") {
    const avatar = document.createElement("img");
    avatar.src = "images/pink-chat-pet.png";
    avatar.alt = "";
    avatar.width = 34;
    avatar.height = 34;
    message.append(avatar);
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = copy;
  message.append(paragraph);
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

function setChatOpen(willOpen) {
  chatPanel.hidden = !willOpen;
  chatbot.classList.toggle("is-open", willOpen);
  chatLauncher.setAttribute("aria-expanded", String(willOpen));
  chatLauncher.setAttribute("aria-label", willOpen ? "Close chatbot about Mmasechaba" : "Open chatbot about Mmasechaba");

  if (willOpen) {
    window.setTimeout(() => chatInput.focus(), 80);
  }
}

function askChabi(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion || chatIsBusy) return;

  addChatMessage(cleanQuestion, "user");
  chatInput.value = "";
  chatIsBusy = true;
  chatInput.disabled = true;
  chatSubmit.disabled = true;
  chatbot.classList.add("is-thinking");
  const typingMessage = addChatMessage("Checking Chabi’s notes…", "bot", "typing-message");

  window.setTimeout(() => {
    typingMessage.remove();
    addChatMessage(getChabiReply(cleanQuestion), "bot");
    chatIsBusy = false;
    chatInput.disabled = false;
    chatSubmit.disabled = false;
    chatbot.classList.remove("is-thinking");
    chatInput.focus();
  }, 520);
}

chatLauncher.addEventListener("click", () => {
  setChatOpen(chatPanel.hidden);
});

chatClose.addEventListener("click", () => {
  setChatOpen(false);
  chatLauncher.focus();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askChabi(chatInput.value);
});

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    askChabi(button.dataset.chatQuestion);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    setChatOpen(false);
    chatLauncher.focus();
  }
});

window.getChabiReply = getChabiReply;
