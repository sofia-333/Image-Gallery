var imgs = document.querySelectorAll(".imgs");
var current = document.getElementById("current");
var img = document.querySelectorAll('.imgs img');

img[0].style.opacity = 0.6;

imgs.forEach(function(i){
    i.addEventListener('click',changeImg)});

function changeImg(e){
    img.forEach((i)=>{
        i.style.opacity = 1;
    });
    //  or   img.forEach(i =>(i.style.opacity = 1));    
    current.src = e.target.src;

    current.classList.add("fade-in");
    
    setTimeout(function(){current.classList.remove('fade-in')},500);
   // or    setTimeout(()=>current.classList.remove('fade-in'),500);

    e.target.style.opacity = 0.6;
}