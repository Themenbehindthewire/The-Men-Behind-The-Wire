// Smooth fade-in animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.projectCard,section").forEach((el)=>{

observer.observe(el);

});

// Sticky header effect

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#000";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

}else{

header.style.boxShadow="none";

}

});

// Contact form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your estimate request has been received.");

form.reset();

});

}
