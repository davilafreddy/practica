const btnMenu = document.getElementById('btn_menu');

const navMenu = document.getElementById('menu_nav');

btnMenu.addEventListener('change', (e)=>{
	if(e.target.checked){
	navMenu.classList.add('menu_nav--mostrar')
	}else{
		navMenu.classList.remove('menu_nav--mostrar')
	}
	
	/*	if(navMenu.classList.contains('menu_nav--mostrar')){
navMenu.classList.remove('menu_nav--mostrar');
}else{
	navMenu.classList.add('menu_nav--mostrar');
}*/
}
);