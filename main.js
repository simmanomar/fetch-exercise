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

//button
const button = document.createElement("button")
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

