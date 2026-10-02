const main = () => {
  const workButton = document.querySelector("#main_button");

  setInterval(() => {
    workButton.style.bottom = "1.5em";
    setTimeout(() => {
      workButton.style.bottom = "2em";
    }, 150);
    setTimeout(() => {
      workButton.style.bottom = "1.5em";
    }, 300);
    setTimeout(() => {
      workButton.style.bottom = "2em";
    }, 450);
  }, 3000);

  const setDate = () => {
    const now = new Date(Date.now());
    const copyrightYearElement = document.querySelector("#copyright-year");
    if (copyrightYearElement) {
      copyrightYearElement.textContent = now.getFullYear();
    }
  };
  setDate();
};

main();
