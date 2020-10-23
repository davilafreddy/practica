const sliders = document.querySelector(".slider__images")
const slider = document.querySelectorAll(".slider__img")
let contador = 1
let num = slider.length
let width = slider[0].clientWidth
let intervalo = 4000

window.addEventListener('resize', function(){
  width = slider[0].clientWidth;

})

function slides(){
  sliders.style.transform = "translate("+(-width*contador)+"px)"
	sliders.style.transition = "transform 1s"
	contador++
	if(contador == slider.length){
	 setTimeout(function(){
    sliders.style.transform = "translate(0px)"
	  sliders.style.transition = "transform 0s"
	 },1500)
   contador=0
	}
}

setInterval(function(){
 slides()
},intervalo)
