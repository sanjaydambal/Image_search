// document.addEventListener("DOMContentLoaded", function () {
//     const searchButton = document.getElementById("button");
//     const searchInput = document.getElementById("nput");
//     const imageResults = document.getElementById("imageResults");
  
//     searchButton.addEventListener("click", function () {
//       const query = searchInput.value;
//       if (query.trim() !== "") {
//         fetchImages(query);
//       }
//     });
  
//     function fetchImages(query) {
//       const apiKey = "GYk6WjyMPwLYhy4F4gFpRqlduz_1UTHgriv4TECufeE"; // Replace with your Unsplash API key
//       const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
  
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => displayImages(data.results))
//         .catch((error) => console.error("Error fetching images:", error));
//     }
  
//     function displayImages(images) {
//       imageResults.innerHTML = "";
//       images.forEach((image) => {
//         const imgElement = document.createElement("img");
//         imgElement.src = image.urls.small;
//         imgElement.alt = image.description || "Unsplash Image";
//         imageResults.appendChild(imgElement);
//       });
//     }
//   });
  
const apiKey = "GYk6WjyMPwLYhy4F4gFpRqlduz_1UTHgriv4TECufeE";

const formEle = document.querySelector("form");
const inputEle = document.getElementById("input");
const searchRes = document.querySelector(".search-results");
const showMore = document.getElementById("show-more");
let inputData = "";
let page = 1;
async function searchImages(){
  const inputData = inputEle.value;
const url = `https://api.unsplash.com/search/photos?page = ${page}&query=${inputData}&client_id=${apiKey}`;

const response  = await fetch(url);
const data = await response.json();

const results = data.results;
if(page===1){
  searchRes.innerHTML = ""
}
results.map((result)=>{
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("search-results");
  const image = document.createElement("img");
  image.src = result.urls.small;
  image.alt = result.alt_description;
  const imageLink = document.createElement("a");
  imageLink.href = result.links.html;
  imageLink.target = "_blank";
  imageLink.text = result.alt_description;
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(imageLink);
  searchRes.appendChild(imageWrapper);
 
})
page++
if(page>1){
showMore.style.display="block"
}
}

formEle.addEventListener("submit",(e)=>{
  e.preventDefault();
  page =1;
  searchImages();
})
showMore.addEventListener("click",()=>{
  
  searchImages();
})