let i=0;
let BannerText="Passionate Full Stack Web Developer ☺";
let speed=100;

typeWriter()

function typeWriter() {
    if(i < BannerText.length){
      document.getElementById("user-detail-name").style.color="white";
      document.getElementById("demo1").innerHTML += BannerText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {

      i = 0;
     
      document.getElementById("demo1").innerHTML = "";
      
      document.getElementById("user-detail-name").style.color="#71e281";
      setTimeout(typeWriter, speed);
    }
  }


  var myNav = document.getElementById('nav-menu');
  var myNav2 = document.getElementById('main');
  window.onscroll = function () { 
      if ( document.documentElement.scrollTop >= 15 ) {
          myNav.classList.add("nav-colored");
          myNav2.classList.add("nav-colored");
      
      } 
      else {
        
          myNav.classList.remove("nav-colored");
          myNav2.classList.remove("nav-colored");
      }
  };

  GitHubCalendar(".calendar", "abhishekshivam77", {
    responsive: true,
    global_stats: true,
    tooltips: true,
  });

  document.getElementById("resume-button-1").onclick=()=>{
window.open("https://drive.google.com/file/d/1M3UcghhRE2JjPQk9heP4_Q7Bv-vFeot3/view?usp=share_link")
  }

  document.getElementById("resume-button-2").onclick=()=>{
   window.open("https://drive.google.com/file/d/1M3UcghhRE2JjPQk9heP4_Q7Bv-vFeot3/view?usp=share_link")
  }
     
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }

  let mode = document.getElementById("mode");
  mode.addEventListener("click", darkMode)

  function darkMode(event){
    let mode = event.target.alt;
    if(mode == "dark"){
      document.querySelector("body").style.background = "black";
       event.target.alt = "light";
    }
    else if(mode == "light"){
      document.querySelector("body").style.background = "linear-gradient(90deg, rgba(19,78,84,1) 25%, rgba(6,168,199,1) 70%, rgba(0,212,255,1) 92%, rgba(6,170,202,1) 99%);";
       event.target.alt = "dark";
    }

  }



