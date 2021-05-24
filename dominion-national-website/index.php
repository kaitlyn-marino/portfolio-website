<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title>Dominion National</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/normalize.css">

  <meta name="theme-color" content="#fafafa">

  <SCRIPT>
    function ShowAndHide() {
        var x = document.getElementById('mobile-navigation');
        if (x.style.display == 'none') {
            x.style.display = 'flex';
        } else {
            x.style.display = 'none';
        }
    }
</SCRIPT>
</head>

<body>
  <header> <!--Logo, Search, Navigation Menu & Hero Image-->
  <section id="top-banner"> <!--Logo, Search Icon (Java to pop out text box), Navigation Menu-->
      
      <div class="half-width-left"> <!--Needs to be set in half width divs to align content correctly-->
        <div class="logo">
          <a href="index.php"> 
            <img src="img/logo.png" alt="Dominion National Logo" />
          </a>
        </div>
      </div>

      <div class="half-width-right">

        <div class="search">
          <img src="img/magnify-glass.png" alt="Search Icon" />
        </div>

        <div class="hamburger">
          <a href="#" class="mobile-nav">
            <BUTTON ONCLICK="ShowAndHide()">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </BUTTON>
          </a>
          <nav>
            <ul class="mobile-nav-links">
              <li><a href="login/index.php">Login</a></li>
              <li><a href="about-us/index.php">About Us</a></li>
              <li><a href="dental-products/index.php">Dental</a></li>
              <li><a href="vision-products/index.php">Vision</a></li>
              <li><a href="https://dominiondentists.com/dominion" target="_blank">Find a Dentist</a></li>
              <li><a href="find-a-vision-provider/index.php">Find a Vision Provider</a></li>
              <li><a href="health-facts/index.php">Health Facts</a></li>
              <li><a href="news/index.php">News</a></li>
            </ul>
          </nav>
        </div>
      </div>
    
    </section>

    <section id="mobile-navigation" STYLE="display:none"> <!--Needs seperate section for mobile nav dropdown due to javascript-->
      <nav>
        <ul class="mobile-nav-links">
            <li><a href="login/index.php">Login</a></li>
            <li><a href="about-us/index.php">About Us</a></li>
            <li><a href="dental-products/index.php">Dental</a></li>
            <li><a href="vision-products/index.php">Vision</a></li>
            <li><a href="https://dominiondentists.com/dominion" target="_blank">Find a Dentist</a></li>
            <li><a href="find-a-vision-provider/index.php">Find a Vision Provider</a></li>
            <li><a href="health-facts/index.php">Health Facts</a></li>
            <li><a href="news/index.php">News</a></li>
        </ul>
      </nav>
    </section>


    <section id="hero-container">
      <img class="hero" src="img/hero-image-tablet.png" height="300px" />
    </section>
  </header>

  <main>

    <section id="about">
      <h1>Dominion National is a leading insurer and administrator of dental and vision benefits</h1>
      <p>We seek a better way to serve you, so you can focus on what makes you extraordinary and fulfilled.</p>
    </section>

    <section id="links">
      <div class="first-box">
        <a href="https://dominiondentists.com/dominion" target="_blank">
          <div class="half-height-first">
            <img src="img/tooth.png" alt="Tooth Icon" />
          </div>
          <div class="half-height-second">
           <p>Find a Dentist</p>
          </div>
        </a>
      </div>
      <div class="second-box">
        <a href="find-a-vision-provider/index.php">
          <div class="half-height-first">
            <img src="img/glasses.png" alt="Glasses Icon" />
          </div>
          <div class="half-height-second">
            <p>Find a Vision Provider</p>
          </div>
        </a>
      </div>
      <div class="third-box">
        <a href="members/index.php">
          <div class="half-height-first">
            <img src="img/members.png" alt="Member Icon" />
          </div>
          <div class="half-height-second">
            <p>Members</p>
          </div>
        </a>
      </div>
      <div class="fourth-box">
        <a href="dentists/index.php">
          <div class="half-height-first">
            <img src="img/dentists.png" alt="Dentist Icon" />
          </div>
          <div class="half-height-second">
            <p>Dentists</p>
          </div>
        </a>
      </div>
      <div class="fifth-box">
        <a href="./groups/index.php">
          <div class="half-height-first">
            <img src="img/groups.png" alt="Groups Icon" />
          </div>
          <div class="half-height-second">
            <p>Groups</p>
          </div>
        </a>
      </div>
      <div class="sixth-box">
        <a href="./producers/index.php">
          <div class="half-height-first">
            <img src="img/producer.png" alt="Producer Icon" />
          </div> 
          <div class="half-height-second">
            <p>Producers</p>
          </div> 
        </a>
      </div>
    </section>

    <section id="enroll">
      <a href="https://teethkeepersapps.dominionnational.com/" class="invisible-ink">
      </a>
    </section>

  </main>

  <footer>
    <p>Privacy and Compliance Resources &#9679 Disclaimer &#9679 Careers &#9679 Dental FAQ &#9679 Contact Us &#9679 Transparency Claim Payment Policies &#9679 Nondiscrimination and Foreign Language Assistance Notice</p>
    <p>251 18th Street South, Suite 900, Arlington, VA 22202</p>
    <img src="./img/social-media.png" alt="Social Media Icons" />
    <br>
    <h1>Affiliations and Recognition</h1>
    <img src="./img/affiliations.png" alt="Affiliations and Recognition Logos" />
    <br>
    <div class="goc">
      <p>&#169 2020 Dominion National<br>
        Dominion National is the brand name for the Dominion group of
        companies. Dental plans are underwritten by Dominion Dental
        Services, Inc. (DDSI). Dominion Dental Services USA, Inc.
        (DDSUSA) is a licensed administrator of dental and vision benefits.
        Vision plans are underwritten by Avalon Insurance Company, and
        administered by DDSUSA, in DC, DE, MD, PA and VA. Vision 
        Plans are underwritten by DDSI in all other states where 
        Dominion National operates. The Discount Program is offered 
        through DDSUSA.</p>
    </div>
  </footer>

  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>
