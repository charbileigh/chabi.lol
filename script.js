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
