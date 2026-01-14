document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("command-input");
    const output = document.getElementById("command-output");

    const commands = {
        "experience": "/experience.md",
        "projects": "/projects.md",
        "skils": "/skills.md",
        "extracurricular": "/extracurricular.md",
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter"){
            const command = input.value.toLowerCase();
            if (commands[cmd]) {
                window.location.href = commands[cmd];
            } else {
                output.textContent = "Command not recognized. Try experience, projects, skills, or extracurricular.";
            }
        }
    });
});