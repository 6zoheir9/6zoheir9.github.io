document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command-input");
  const output = document.getElementById("command-output");

  // If the page doesn't have a terminal (e.g. experience page), exit safely
  if (!input || !output) return;

  // Command history
  let history = [];
  let historyIndex = -1;

  // Command definitions
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

  // Run a command
  function runCommand(command) {
    if (commands[command] === "help") {
      output.innerHTML = `
        <div>Available commands:</div>
        <div>• experience</div>
        <div>• projects</div>
        <div>• skills</div>
        <div>• extracurricular</div>
        <div>• clear</div>
      `;
    } 
    else if (commands[command] === "clear") {
      output.innerHTML = "";
    } 
    else if (commands[command]) {
      window.location.href = commands[command];
    } 
    else {
      output.textContent =
        "Command not recognized. Type 'help' or use the navigation above.";
    }
  }

  // Keyboard input handling
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim().toLowerCase();
      if (!command) return;

      history.push(command);
      historyIndex = history.length;

      input.value = "";
      runCommand(command);
    }

    if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    }

    if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        input.value = "";
      }
    }
  });

  // Navigation clicks trigger commands
  document.querySelectorAll("[data-command]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      runCommand(link.dataset.command);
    });
  });
});