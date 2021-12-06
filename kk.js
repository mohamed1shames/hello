
const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");





container.addEventListener("click" , (eo) => {


if (eo.target.className == "icon-trash icon") {


eo.target.parentElement.parentElement.remove()








} else if (eo.target.className == "icon-sad2 icon"){

      eo.target.classList.add("dn")

      const heart = `<samp class="icon-heart">   </samp>`


      
      




      eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0]
      .classList.add("finish");

      eo.target.parentElement.innerHTML += heart

} else if (eo.target.className == "icon-heart") {




      eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0]
      .classList.remove("finish");
 
      eo.target.classList.add("dn")

      const addAngry =`
      <samp class="icon-sad2 icon"> </samp>
      
      
      `

eo.target.parentElement.innerHTML += addAngry



} else if (eo.target.className == "icon-star icon") {
      
      
      eo.target.classList.add("orange")



container.prepend(eo.target.parentElement)

} else if(eo.target.className == "icon-star icon orange") {


      eo.target.classList.remove("orange")




}






})





 
button.addEventListener("click" , (eo) => {
eo.preventDefault();
const tast =

`
<div class="tast">
<samp class="icon-star icon"> </samp>
<p class="task-text">      ${input.vealu }      </p>

<div>

      <samp class="icon-trash icon"> </samp>

      <samp class="icon-sad2 icon"> </samp>

</div>

</div>


`
container.innerHTML += tast

});