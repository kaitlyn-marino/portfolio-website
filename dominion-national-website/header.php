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
          <a href="../index.php"> 
            <img src="../img/logo.png" alt="Dominion National Logo" />
          </a>
        </div>
      </div>

      <div class="half-width-right">

        <div class="search">
          <img src="../img/magnify-glass.png" alt="Search Icon" />
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
              <li><a href="../login/index.php">Login</a></li>
              <li><a href="../about-us/index.php">About Us</a></li>
              <li><a href="../dental-products/index.php">Dental</a></li>
              <li><a href="../vision-products/index.php">Vision</a></li>
              <li><a href="https://dominiondentists.com/dominion" target="_blank">Find a Dentist</a></li>
              <li><a href="../find-a-vision-provider/index.php">Find a Vision Provider</a></li>
              <li><a href="../health-facts/index.php">Health Facts</a></li>
              <li><a href="../news/index.php">News</a></li>
            </ul>
          </nav>
        </div>
      </div>
    
    </section>

    <section id="mobile-navigation" STYLE="display:none"> <!--Needs seperate section for mobile nav dropdown due to javascript-->
      <nav>
        <ul class="mobile-nav-links">
            <li><a href="../login/index.php">Login</a></li>
            <li><a href="../about-us/index.php">About Us</a></li>
            <li><a href="../dental-products/index.php">Dental</a></li>
            <li><a href="../vision-products/index.php">Vision</a></li>
            <li><a href="https://dominiondentists.com/dominion" target="_blank">Find a Dentist</a></li>
            <li><a href="../find-a-vision-provider/index.php">Find a Vision Provider</a></li>
            <li><a href="../health-facts/index.php">Health Facts</a></li>
            <li><a href="../news/index.php">News</a></li>
        </ul>
      </nav>
    </section>


    <section id="hero-container">
      <img class="hero" src="../img/hero-image-tablet.png" height="300px" />
    </section>

  </header>


    

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
