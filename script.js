
document.getElementById("themeButton").onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        document.getElementById("themeButton").textContent = "Light Mode";
    } else {
        document.getElementById("themeButton").textContent = "Dark Mode";
    }
};
