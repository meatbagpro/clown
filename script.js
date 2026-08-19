const mascot = document.querySelector("#mascot");
const clownSwitch = document.querySelector("#clown-switch");
const switchLabel = document.querySelector("#switch-label");
const copyButton = document.querySelector("#copy-domain");
const shuffleButton = document.querySelector("#shuffle");
const idea = document.querySelector("#idea");
const cursorGlow = document.querySelector(".cursor-glow");

const faces = ["🤡", "🥸", "🤪", "🫠", "👽", "🐸", "🪿"];
const ideas = [
  "给影子放一天假",
  "认真地和路灯谈判",
  "把周一改名叫周八",
  "为一朵云写用户手册",
  "给仙人掌发送拥抱申请",
  "举办一次单人捉迷藏",
  "问问冰箱今天冷不冷",
  "把烦恼折成纸飞机",
];

let faceIndex = 0;
let lastIdea = 0;

clownSwitch.addEventListener("click", () => {
  faceIndex = (faceIndex + 1) % faces.length;
  mascot.textContent = faces[faceIndex];
  document.body.classList.toggle("fool-mode");
  switchLabel.textContent = faceIndex === 0 ? "按下红鼻子" : "再按一下试试";

  mascot.animate(
    [
      { transform: "rotate(-6deg) scale(0.72)" },
      { transform: "rotate(8deg) scale(1.18)" },
      { transform: "rotate(-3deg) scale(1)" },
    ],
    { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" },
  );
});

shuffleButton.addEventListener("click", () => {
  let nextIdea = lastIdea;
  while (nextIdea === lastIdea) {
    nextIdea = Math.floor(Math.random() * ideas.length);
  }
  lastIdea = nextIdea;
  idea.textContent = ideas[nextIdea];
  idea.animate(
    [
      { opacity: 0, transform: "translateY(14px) rotate(1deg)" },
      { opacity: 1, transform: "translateY(0) rotate(0)" },
    ],
    { duration: 360, easing: "ease-out" },
  );
});

copyButton.addEventListener("click", async () => {
  const label = copyButton.querySelector("span:first-child");
  const originalText = label.textContent;

  try {
    await navigator.clipboard.writeText(copyButton.dataset.domain);
    label.textContent = "复制好了！";
  } catch {
    label.textContent = "就是 🤡.fm";
  }

  window.setTimeout(() => {
    label.textContent = originalText;
  }, 1800);
});

window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

document.querySelector("#year").textContent = new Date().getFullYear();
