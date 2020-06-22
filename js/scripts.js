// Get the modal
var modal = document.getElementById("myModal");

var img = document.querySelectorAll(".gallery__img")
var modalImg = document.getElementById("img01");
console.log(modalImg);

Array.from(img).forEach(function(imgs){
    imgs.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log(modalImg.src);
    })
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";

} 
