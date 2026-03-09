//create fetch loading images from picsum


fetch("https://picsum.photos/v2/list")
.then (response => response.json())
.then (data => {
    const container = document.getElementById("image-container"); // insert the json data inside the img container div

    
    const randomPhotos = data //
    .sort(() => Math.random() - 0.5) //shuffles the images in the array randomly
    .slice(0, 12); //slices the array into showing only 12 images on the page

    randomPhotos.forEach(photo => {

      const img = document.createElement("img"); 
      img.src = `https://picsum.photos/id/${photo.id}/300/200`; 
      
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("image-card"); //for styling

      const photographer = document.createElement("p");
      photographer.textContent = `Photo by ${photo.author}`;

      imgDiv.appendChild(img);
      imgDiv.appendChild(photographer);
      container.appendChild(imgDiv);

    });

})
.catch(error => console.log("Error:", error));


//scroll to top button 
button.textContent = '⇧';
button.classList.add('scroll-to-top'); //adds class so you can style it in css

document.body.appendChild(button); //adds button to page

//scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    button.classList.add('show'); //add class in css that shows button when you scroll 200 from the top
  } else {
    button.classList.remove('show'); //if not, don't show it
  }
});

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//load more button
const loadButton = document.createElement("button");
loadButton.textContent = "Load more";
loadButton.classList.add("load-more");

document.body.appendChild(loadButton);





