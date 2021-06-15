var imgSlide = document.getElementById("img-slide");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var radio4 = document.getElementById("radio4");


radio1.onclick = ()=>{
    for(i=1;i<=4;i++){
        document.getElementById(`radio${i}`).style.backgroundColor = "rgba(0,0,0,0)";
    }
    radio1.style.backgroundColor = "#5900ff";
    imgSlide.classList.add("fideIn");
    setTimeout(()=>{
        imgSlide.classList.remove("fideIn");
        imgSlide.setAttribute("src","img/01.png")
        imgSlide.classList.add("fideOut");
        setTimeout(()=>{
            imgSlide.classList.remove("fideOut");
        },401);
    },400);


}

radio2.onclick = ()=>{
    for(i=1;i<=4;i++){
        document.getElementById(`radio${i}`).style.backgroundColor = "rgba(0,0,0,0)";
        console.log(`radio${i}`);
    }
    radio2.style.backgroundColor = "#5900ff";
    imgSlide.classList.add("fideIn");
    setTimeout(()=>{
        imgSlide.classList.remove("fideIn");
        imgSlide.setAttribute("src","img/02.png")
        imgSlide.classList.add("fideOut");
        setTimeout(()=>{
            imgSlide.classList.remove("fideOut");
        },401);
    },400);


}

radio3.onclick = ()=>{
    for(i=1;i<=4;i++){
        document.getElementById(`radio${i}`).style.backgroundColor = "rgba(0,0,0,0)";
    }
    radio3.style.backgroundColor = "#5900ff";
    imgSlide.classList.add("fideIn");
    setTimeout(()=>{
        imgSlide.classList.remove("fideIn");
        imgSlide.setAttribute("src","img/03.png")
        imgSlide.classList.add("fideOut");
        setTimeout(()=>{
            imgSlide.classList.remove("fideOut");
        },401);
    },400);


}
radio4.onclick = ()=>{
    for(i=1;i<=4;i++){
        document.getElementById(`radio${i}`).style.backgroundColor = "rgba(0,0,0,0)";
    }

    radio4.style.backgroundColor = "#5900ff";
    imgSlide.classList.add("fideIn");
    setTimeout(()=>{
        imgSlide.classList.remove("fideIn");
        imgSlide.setAttribute("src","img/04.png")
        imgSlide.classList.add("fideOut");
        setTimeout(()=>{
            imgSlide.classList.remove("fideOut");
        },401);
    },400);


}