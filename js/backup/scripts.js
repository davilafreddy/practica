const btnMenu = document.getElementById('btn_menu');

const navMenu = document.getElementById('menu_nav');

btnMenu.addEventListener('change', (e)=>{
	if(e.target.checked){
	navMenu.classList.add('menu_nav--mostrar')
	}else{
		navMenu.classList.remove('menu_nav--mostrar')
	}	
);

window.addEventListener('scroll', function(){
	/*
 let recepcion = document.getElementById("recepcion")
 let posRecepcion = recepcion.getBoundingClientRect().top
 let altoPantalla = window.innerHeight
 //let textoPosicion = document.getElementById("relleno").getElementById("posicion")

//	textoPosicion.textContent = "Posiciones: Recepcion= "+posRecepcion+"px, Alto Pantalla= "+altoPantalla+"px";
	alert("Posiciones:     Recepcion= "+posRecepcion+"px, Alto Pantall    a= "+altoPantalla+"px");
	*/
alert("funciona")
});
