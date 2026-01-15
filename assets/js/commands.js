document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command-input");
  const output = document.getElementById("command-output");

  if (!input || !output) return;

  const commands = {
    experience: "/experience.html",
    projects: "/projects.html",
    skills: "/skills.html",
    extracurricular: "/extracurricular.html",
    help: "help",
    ls: "help",
    clear: "clear"
  };

  input.focus();

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim().toLowerCase();
      input.value = "";

      if (!command) return;

      if (commands[command] === "help") {
        output.innerHTML = `
          Available commands:<br>
          experience<br>
          projects<br>
          skills<br>
          extracurricular<br>
          clear
        `;
      } 
      else if (commands[command] === "clear") {
        output.textContent = "";
      } 
      else if (commands[command]) {
        window.location.href = commands[command];
      } 
      else {
        output.textContent =
          "Command not recognized. Type 'help' or use the navigation above.";
      }
    }
  });
});