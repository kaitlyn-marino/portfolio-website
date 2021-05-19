const heroButton = document.querySelector(".takeAPeak");
const developerSkills = document.querySelector(".technology-container");
const dominionNational = document.querySelector("#dominion");
const guessTheWord = document.querySelector("#guess-the-word");
const githubGallery = document.querySelector("#github-gallery");
const weDo = document.querySelector("#we-do");
const unplugged = document.querySelector("#unplugged");
const projects = document.querySelector("#work");


//Hero Button that takes you to the developer skills sections
heroButton.addEventListener("click", function (){
    developerSkills.scrollIntoView();
});

//First click to flip Dominon project to description overview 
dominionNational.addEventListener("mouseenter", function () {
        dominionNational.classList.add("color-darker");
        dominionNational.classList.add("project-overview");
        dominionNational.innerHTML = `<h2><strong>Dominion National</strong></h2>
                                    <p><strong>Tools Used: </strong>HTML, CSS, Responsive Design, Flexbox</p>
                                    <p><strong>My Role: </strong>Designed mock-ups, coded HTML, styllized CSS, added JavaScript for enhanced user experience</p>
                                    <p>>>> See More</p>`;
});
dominionNational.addEventListener("mouseleave", function () {
    dominionNational.classList.remove("color-darker");
    dominionNational.classList.remove("project-overview");
    dominionNational.innerHTML = "";
});

//Click through to Dominion Details page
dominionNational.addEventListener("click", function () {
    document.location.href = "dominion-national/index.html";
});

//First click to flip Guess the Word project to description overview
guessTheWord.addEventListener("mouseenter", function () {
    guessTheWord.classList.add("color-darker");
    guessTheWord.classList.add("project-overview");
    guessTheWord.innerHTML = `<h2><strong>Guess the Word Game</strong></h2>
                                  <p><strong>Tools Used: </strong>JavaScript, GitHub</p>
                                  <p><strong>My Role: </strong>Created the JavaScipt for a game where players have 8 chances to guess the word and maintained version control trhough GitHub</p>
                                  <p>>>> See More</p>`;
});
guessTheWord.addEventListener("mouseleave", function () {
    guessTheWord.classList.remove("color-darker");
    guessTheWord.classList.remove("project-overview");
    guessTheWord.innerHTML = "";
});

//Click through to Guess The Word Game Details page
guessTheWord.addEventListener("click", function () {
    document.location.href = "guess-the-word/index.html";
});

//First click to flip GitHub project to description overview

githubGallery.addEventListener("mouseenter", function () {
    githubGallery.classList.add("color-purple");
    githubGallery.classList.add("project-overview");
    githubGallery.innerHTML = `<h2><strong>GitHub Repo Gallery</strong></h2>
                                  <p><strong>Tools Used: </strong>JavaScript, GitHub</p>
                                  <p><strong>My Role: </strong>Used JavaScript and API's to create a webpage that displays my current repos and latest projects from GitHub</p>
                                  <p>>>> See More</p>`;
});
githubGallery.addEventListener("mouseleave", function () {
    githubGallery.classList.remove("color-purple");
    githubGallery.classList.remove("project-overview");
    githubGallery.innerHTML = "";
});

//Click through to Github Repo Gallery Details page
githubGallery.addEventListener("click", function () {
    document.location.href = "github-gallery/index.html";
});

//First click to flip Wedding project to description overview

weDo.addEventListener("mouseenter", function () {
    weDo.classList.add("color-darker");
    weDo.classList.add("project-overview");
    weDo.innerHTML = `<h2><strong>We Do</strong></h2>
                                  <p><strong>Tools Used: </strong>HTML, CSS, JavaScript, Responsive Design, Flexbox</p>
                                  <p><strong>My Role: </strong>Built the wedding website from the ground up, incorporating colors and design elements from Save the Dates</p>
                                  <p>>>> See More</p>`;
});
weDo.addEventListener("mouseleave", function () {
    weDo.classList.remove("color-darker");
    weDo.classList.remove("project-overview");
    weDo.innerHTML = "";
});

//Click through to Wedding Details page
weDo.addEventListener("click", function () {
    document.location.href = "we-do/index.html";
});

//First click to flip Unplugged project to description overview

unplugged.addEventListener("mouseenter", function () {
    unplugged.classList.add("color-darker");
    unplugged.classList.add("project-overview");
    unplugged.innerHTML = `<h2><strong>Unplugged</strong></h2>
                                  <p><strong>Tools Used: </strong>HTML, CSS, Responsive Design, Flexbox</p>
                                  <p><strong>My Role: </strong>Built the retreat website from PS mock-up files adhering to all feature requirements and requests</p>
                                  <p>>>> See More</p>`;
});
unplugged.addEventListener("mouseleave", function () {
    unplugged.classList.remove("color-darker");
    unplugged.classList.remove("project-overview");
    unplugged.innerHTML = "";
});

//Click through to Unplugged Details page
unplugged.addEventListener("click", function () {
    document.location.href = "unplugged/index.html";
});
