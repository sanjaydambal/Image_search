document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("button");
    const searchInput = document.getElementById("nput");
    const imageResults = document.getElementById("imageResults");
  
    searchButton.addEventListener("click", function () {
      const query = searchInput.value;
      if (query.trim() !== "") {
        fetchImages(query);
      }
    });
  
    function fetchImages(query) {
      const apiKey = "YOUR_UNSPLASH_API_KEY"; // Replace with your Unsplash API key
      const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => displayImages(data.results))
        .catch((error) => console.error("Error fetching images:", error));
    }
  
    function displayImages(images) {
      imageResults.innerHTML = "";
      images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.urls.small;
        imgElement.alt = image.description || "Unsplash Image";
        imageResults.appendChild(imgElement);
      });
    }
  });
  