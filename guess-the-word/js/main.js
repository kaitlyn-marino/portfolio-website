const highlightsButton = document.querySelector(".details");
const highlights = document.querySelector(".highlight-details");
const getCodeButton = document.querySelector(".get-code");
const visitWebsiteButton = document.querySelector(".new-website");


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

//Click to visit website button 
visitWebsiteButton.addEventListener("click", function () {
    window.open(`https://kaitlyn-marino.github.io/guess-the-word/`, `_blank`);
});

//Click to get code button 
getCodeButton.addEventListener("click", function () {
    window.open(`https://github.com/kaitlyn-marino/guess-the-word`, `_blank`);
});






