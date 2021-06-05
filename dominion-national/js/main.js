const highlightsButton = document.querySelector(".details");
const highlights = document.querySelector(".highlight-details");
const ogWebsiteButton = document.querySelector(".original");
const getCodeButton = document.querySelector(".get-code");
const newWebsiteButton = document.querySelector(".new-website");


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

//Click to original website button 
ogWebsiteButton.addEventListener("click", function () {
    window.open(`https://www.dominionnational.com/`, `_blank`);
    
});

//Click to new website button 
newWebsiteButton.addEventListener("click", function () {
    window.open(`http://codingbykaitlyn.com/dominion-national-website/`, `_blank`);
});

//Click to get code button 
getCodeButton.addEventListener("click", function () {
    window.open(`https://github.com/kaitlyn-marino/dominion-national`, `_blank`);
});
