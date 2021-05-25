const highlightsButton = document.querySelector(".details");
const highlights = document.querySelector(".highlight-details");


// Pops out highlights section
highlightsButton.addEventListener("click", function () {
    highlights.classList.remove("hide");
    highlightsButton.style.backgroundColor = "rgb(224, 223, 223)";
    hideHighlights ();
});

//Function to hide highlights section after being clicked
const hideHighlights = function () {
        highlightsButton.addEventListener("click", function () {
            highlights.classList.add("hide");
            highlightsButton.style.backgroundColor = "white";
            seeHighlights ();
    });
};

//Function to see highlights section
const seeHighlights = function () {
    highlightsButton.addEventListener("click", function () {
        highlights.classList.remove("hide");
        highlightsButton.style.backgroundColor = "rgb(224, 223, 223)";
        hideHighlights ();
    });
};





