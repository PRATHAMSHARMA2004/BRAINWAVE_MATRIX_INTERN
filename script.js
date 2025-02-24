document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.getElementById("getStartedBtn");
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", () => {
            alert("Welcome to InnovationBusinesses!");
        });
    }

    const featureCards = document.querySelectorAll(".feature-card");
    
    featureCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
