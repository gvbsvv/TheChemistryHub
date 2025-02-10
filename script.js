// script.js
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".subject").forEach(subject => {
        subject.addEventListener("click", () => {
            const subjectId = subject.getAttribute("onclick").match(/'([^']+)'/)[1];
            window.location.href = `${subjectId}.html`;
        });
    });
});
