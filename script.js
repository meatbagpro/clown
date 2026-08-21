const domain = document.querySelector("#copy-domain");
const copyTip = document.querySelector("#copy-tip");

document.querySelector("#year").textContent = new Date().getFullYear();

domain.addEventListener("click", async () => {
  let message = "已复制";

  try {
    await navigator.clipboard.writeText(domain.dataset.domain);
  } catch {
    message = "🤡.fm";
  }

  domain.classList.remove("is-copied");
  void domain.offsetWidth;
  domain.classList.add("is-copied");
  copyTip.textContent = message;

  window.setTimeout(() => {
    domain.classList.remove("is-copied");
    copyTip.textContent = "";
  }, 1400);
});
