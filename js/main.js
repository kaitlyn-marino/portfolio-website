const heroButton = document.querySelector(".takeAPeak");
const developerSkills = document.querySelector(".technology-container");
const dominionNational = document.querySelector("#dominion");
const guessTheWord = document.querySelector("#guess-the-word");
const githubGallery = document.querySelector("#github-gallery");
const weDo = document.querySelector("#we-do");
const unplugged = document.querySelector("#unplugged");
const projects = document.querySelector("#work");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav")
const skills = document.querySelector(".skills-nav");
const about = document.querySelector(".about-nav");
const work = document.querySelector(".work-nav");
const contact = document.querySelector(".contact-nav");


//Hero container: Mobile menu navigation display
menu.addEventListener("click", function () {
    nav.classList.add("nav-mobile");
    menu.innerHTML = "";
});

//Hero container: Mobile menu navigation hide if selection is clicked
skills.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
about.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
work.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});
contact.addEventListener("click", function () {
    nav.classList.remove("nav-mobile");
    menu.innerHTML = "Menu";
});

//Hero container: Hero Button that takes you to the developer skills sections
heroButton.addEventListener("click", function (){
    developerSkills.scrollIntoView();
});

//My projects: First mouseover to project description overview 
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
guessTheWord.addEventListener("mouseenter", function () {
    guessTheWord.classList.remove("image-guess-before");
    guessTheWord.classList.add("image-guess-after");
    guessTheWord.classList.add("color-darker");
    guessTheWord.classList.add("project-overview");
    guessTheWord.innerHTML = `<h2><strong>Guess the Word Game</strong></h2>
                                  <p><strong>Tools Used: </strong>JavaScript, GitHub</p>
                                  <p><strong>My Role: </strong>Created the JavaScipt for a game where players have 8 chances to guess the word and maintained version control trhough GitHub</p>
                                  <p>>>> See More</p>`;
});
guessTheWord.addEventListener("mouseleave", function () {
    guessTheWord.classList.add("image-guess-before");
    guessTheWord.classList.remove("image-guess-after");
    guessTheWord.classList.remove("color-darker");
    guessTheWord.classList.remove("project-overview");
    guessTheWord.innerHTML = "";
});
githubGallery.addEventListener("mouseenter", function () {
    githubGallery.classList.remove("image-github-before");
    githubGallery.classList.add("image-github-after");
    githubGallery.classList.add("color-purple");
    githubGallery.classList.add("project-overview");
    githubGallery.innerHTML = `<h2><strong>GitHub Repo Gallery</strong></h2>
                                  <p><strong>Tools Used: </strong>JavaScript, GitHub</p>
                                  <p><strong>My Role: </strong>Used JavaScript and API's to create a webpage that displays my current repos and latest projects from GitHub</p>
                                  <p>>>> See More</p>`;
});
githubGallery.addEventListener("mouseleave", function () {
    githubGallery.classList.add("image-github-before");
    githubGallery.classList.remove("image-github-after");
    githubGallery.classList.remove("color-purple");
    githubGallery.classList.remove("project-overview");
    githubGallery.innerHTML = "";
});
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

//My projects: First touch to project description overview
dominionNational.addEventListener("touchstart", function () {
    dominionNational.classList.add("color-darker");
    dominionNational.classList.add("project-overview");
    dominionNational.innerHTML = `<h2><strong>Dominion National</strong></h2>
                                <p><strong>Tools Used: </strong>HTML, CSS, Responsive Design, Flexbox</p>
                                <p><strong>My Role: </strong>Designed mock-ups, coded HTML, styllized CSS, added JavaScript for enhanced user experience</p>
                                <p>>>> See More</p>`;
});

//My projects: Click through to Details page
dominionNational.addEventListener("click", function () {
    document.location.href = "dominion-national/index.html";
});
guessTheWord.addEventListener("click", function () {
    document.location.href = "guess-the-word/index.html";
});
githubGallery.addEventListener("click", function () {
    document.location.href = "github-gallery/index.html";
});
weDo.addEventListener("click", function () {
    document.location.href = "we-do/index.html";
});
unplugged.addEventListener("click", function () {
    document.location.href = "unplugged/index.html";
});

