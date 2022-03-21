var myImages = ["https://media.newyorker.com/photos/61e87281b67066a13fd20ea8/master/pass/Caesar-Ronaldo.jpg", "https://toppng.com/uploads/preview/neymar-11548370598bjgcfe316v.png","https://www.fcbarcelonanoticias.com/uploads/s1/11/97/73/0/ronaldinho-celebrando-un-gol.jpeg","https://e0.365dm.com/22/01/1600x900/skysports-mohamed-salah-liverpool_5638215.jpg?20220111105345","https://i2-prod.manchestereveningnews.co.uk/incoming/article20967650.ece/ALTERNATES/s615/0_kyle-walker.jpg","https://static.independent.co.uk/2021/03/29/08/newFile-7.jpg?quality=75&width=982&height=726&auto=webp","https://static.wikia.nocookie.net/liverpoolfc/images/5/56/TAA2021.jpeg/revision/latest?cb=20210811233528"];

var captionImages =["Messi","Neymar","Ronalnhio ","Ronaldo","Walker","Stone",];

var index=0; 

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
    } 

function next(){
    if (myImages.length == index+1){
    index=0;}
    else
    {index++;
    updateImage();
    }}

function back(){
    if (index===0)
    index=myImages.length-1;
    else
    index--;
    updateImage();
    }
   
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 
   
previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
    next(); 
    }

setInterval(autoSlide,2000); // Next
