
document.addEventListener("DOMContentLoaded", () => {

    const style = document.createElement("style");
    style.textContent = `
        * {
            cursor: url('./cursor.cur'), auto !important;
        }
    `;
    document.head.appendChild(style);
});
