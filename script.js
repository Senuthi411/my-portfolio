// MENU
function toggleMenu(){ document.getElementById("navLinks").classList.toggle("active"); }

// DARK MODE
function toggleTheme(){ document.body.classList.toggle("dark"); }

// TYPING EFFECT
const text = "Undergraduate | IT Student"; let i=0;
function typing(){ if(i<text.length){ document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(typing,50); } }
typing();

// SCROLL ANIMATION
const elements=document.querySelectorAll(".fade-in");
window.addEventListener("scroll",()=>{ elements.forEach(el=>{ const pos=el.getBoundingClientRect().top; if(pos<window.innerHeight-100){ el.classList.add("show"); } }); });

// PARTICLES
tsParticles.load("particles-js", {
  fpsLimit:60,
  particles:{ number:{ value:50 }, color:{ value:"#3b82f6" }, shape:{ type:"circle" }, opacity:{ value:0.5 }, size:{ value:3 }, move:{ enable:true, speed:1 } },
  interactivity:{ events:{ onhover:{ enable:true, mode:"repulse" } } },
  detectRetina:true
}

);
