//create fetch loading images from picsum


fetch("https://picsum.photos/v2/list")
.then (response => response.json())
.then (data => {
    const container = document.getElementById("image-container"); // insert the json data inside the img container div

    
    data.forEach(photo => {  
      const img = document.createElement("img"); 
      img.src = `https://picsum.photos/300/200?random=${photo.id}`; // random images each time the page loads
      
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("image-card"); //for styling

      imgDiv.appendChild(img);
      container.appendChild(imgDiv);
      
    });

})
.catch(error => console.log("Error:", error));

