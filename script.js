//toggle FAQ answer visibility and update accessibility state

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
  
      const contentId = button.getAttribute("aria-controls");
      const content = document.getElementById(contentId);
  
      const expanded = button.getAttribute("aria-expanded") === "true"; //update aria state for screen readers
  
      button.setAttribute("aria-expanded", !expanded);
  
      if (expanded) {
        content.hidden = true;
      } else {
        content.hidden = false;
      }
  
    });
  });