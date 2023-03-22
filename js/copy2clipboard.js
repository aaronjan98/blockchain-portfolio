const copyables = document.querySelectorAll(".copyable");
copyables.forEach((copyable) => {
  copyable.addEventListener("click", (event) => {
    const clipboardText = event.target.textContent.trim();
    if (clipboardText) {
      navigator.clipboard.writeText(clipboardText);
      const tooltip = event.target.closest("li").querySelector(".copy-tooltip");
      tooltip.textContent = "Copied!";
      setTimeout(() => {
        tooltip.textContent = "Click to copy";
      }, 2000);
    }
  });
});
