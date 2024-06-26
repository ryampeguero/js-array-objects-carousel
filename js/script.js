const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


// MILESTONE 1
const carouselContainer = document.querySelector(".my-carousel-images");
const thumbnailContainer = document.querySelector(".my-thumbnails");

//Creazione del div di immagini da inserire nel carousel
let carouselItemDiv = "";
let thumbnailDiv = "";


images.forEach((currElem, index) =>{
  //carousel
  carouselItemDiv = document.createElement("div");
  carouselItemDiv.classList.add("my-carousel-item");
  if (index < 1) carouselItemDiv.classList.add("active");


  console.log(index);
  
  const imgDiv = `
    <img
      class="img-fluid"
      src="./${currElem.image}"
      alt="${currElem.title}"
    />
    <div class="item-description px-3">
      <h2>${currElem.title}}</h2>
      <p>
        ${currElem.text}
      </p>
    </div>

`;
  carouselItemDiv.innerHTML = imgDiv;
  // console.log(carouselItemDiv);
  carouselContainer.append(carouselItemDiv);

    //thumbnails
    thumbnailImgTag = document.createElement("img");
    thumbnailImgTag.classList.add("img-fluid", "my-thumbnail");
  
    const thumbnailImg = `
    <img
    class="img-fluid my-thumbnail"
    src="./${currElem.image}"
    alt="Thumbnail of Ratchet & Clank: Rift Apart picture"
    />
    `
    thumbnailImgTag.src = `./${currElem.image}`;
    console.log(thumbnailDiv);
    thumbnailContainer.append(thumbnailImgTag);

});

// carouselContainer.append(carouselItemDiv);


// console.log(carouselItemDiv.innerHTML);
const allImages = document.querySelectorAll(".my-carousel-item")
const allThumbnails = document.querySelectorAll(".my-thumbnail")
console.log(allThumbnails);
let counter = 0;
allImages[counter].classList.add("active");
allThumbnails[counter].classList.add("active");

document.querySelector(".my-previous").addEventListener("click", previous);


document.querySelector(".my-next").addEventListener("click", next);

//Bonus 1
allThumbnails.forEach((elem, i)=>{
  elem.addEventListener("click",()=>{
    clearAllIntervals();
    
    allImages.forEach((currElem, i)=>{
      if(allImages[i].classList.contains("active")){
        allImages[i].classList.remove("active");
        allThumbnails[i].classList.remove("active");   
      }
      
    })
    

    
  allImages[i].classList.add("active");
  allThumbnails[i].classList.add("active");
  intervalControl = 1;
  counter = i;
  })
})


//Bonus 2
let nextInterval = "";
let previousInterval = "";


intervalControl = 0;
if(intervalControl == 0){
  nextInterval = setInterval(next, 3000);
}



///Bonus 3
document.getElementById("my-order-button").addEventListener("click", ()=>{
  clearInterval(nextInterval);
  previousInterval = setInterval(previous, 3000);
});

document.getElementById("my-stop-button").addEventListener("click", ()=>{
  
  clearAllIntervals();

  if(intervalControl == 1){
    nextInterval = setInterval(next, 3000);
    intervalControl = 0;
  }else{
    intervalControl = 1;
  }

});


function next(){
  removeActive();  
  console.log("Counter", counter);
  if(counter < allImages.length - 1 ){
    counter++;
  }else{
    counter = 0;
  }

  allImages[counter].classList.add("active");
  allThumbnails[counter].classList.add("active");
  
}


function previous(){
  allImages[counter].classList.remove("active");
  allThumbnails[counter].classList.remove("active");
  
  if (counter <= 0) {
    counter = allImages.length - 1;
  }else{
    counter--;
  }

  allImages[counter].classList.add("active");
  allThumbnails[counter].classList.add("active");
  
}

function clearAllIntervals(){
  clearInterval(nextInterval);
  clearInterval(previousInterval);
  
}

function removeActive(){
  if(allImages[counter].classList.contains("active")){
    allImages[counter].classList.remove("active");
    allThumbnails[counter].classList.remove("active");  
  }
}