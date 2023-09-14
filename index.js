let i=0;
let BannerText="Passionate Full Stack Web Developer ☺";
let speed=100;

//for the fs banner

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
window.open("https://drive.google.com/file/d/1sM-19x_MgdjSG4PtG5Hkd38jL52w7M8d/view?usp=sharing")
  }

  document.getElementById("resume-button-2").onclick=()=>{
   window.open("https://drive.google.com/file/d/1sM-19x_MgdjSG4PtG5Hkd38jL52w7M8d/view?usp=sharing")
  }
     
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }



