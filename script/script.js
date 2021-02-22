var pro = {
	botonComenzar: document.querySelector(".boton.comenzar"),
	contadorPositivo: document.querySelector(".contador-positivo"),
	contadorEmpate: document.querySelector(".contador-empate"),
	contadorNegativo: document.querySelector(".contador-negativo"),
	seleccionUl: document.querySelector(".seleccion-ul"),

	resultadoPositivo: 0,
	resultadoNegativo: 0,
	resultadoEmpate: 0,
	antirepetir: 0,
	anterior: "",

}

var met = {
	inicio: () =>{
		pro.botonComenzar.addEventListener("click",  () => {
			if(pro.botonComenzar.innerHTML == "Jugar" || pro.botonComenzar.innerHTML == "Volver a empezar" ){
				pro.seleccionUl.parentNode.parentNode.className = "juego true"
				pro.botonComenzar.innerHTML = "Terminar"
			}
			else if(pro.botonComenzar.innerHTML == "Terminar"){
				pro.seleccionUl.parentNode.parentNode.className = "juego false"
				pro.botonComenzar.innerHTML = "Volver a empezar"

				pro.resultadoPositivo = 0
				pro.resultadoNegativo = 0
				pro.resultadoEmpate = 0
				pro.contadorPositivo.innerHTML = pro.resultadoPositivo;
				pro.contadorNegativo.innerHTML = pro.resultadoNegativo;
				pro.contadorEmpate.innerHTML = pro.resultadoEmpate;
			}
		})
		met.respuesta()
	},
	respuesta: ()=>{
		for (let i = 0; i < pro.seleccionUl.children.length; i++) {
			pro.seleccionUl.children[i].addEventListener("click", (evento, robot)=>{
				evento = evento.target
				if (pro.antirepetir > 1 && pro.anterior != evento.className) {
					pro.antirepetir = 0
				}
				else{
					pro.antirepetir++;
				}
				pro.anterior = evento.className

				robot = Math.floor(Math.random()*3)
				
				if (pro.antirepetir >= 3 ) {
					pro.resultadoNegativo++;
					console.log("Deja de apretar el mismo boton")
				}
				else if (robot == 0 || pro.anteriorNumero == 0) {
					if (evento.className == pro.seleccionUl.children[1].className) {
						pro.resultadoPositivo++;
					}else if (evento.className == pro.seleccionUl.children[2].className) {
						pro.resultadoNegativo++;
					}else{
						pro.resultadoEmpate++;
					}
				}
				else if (robot == 1 || pro.anteriorNumero == 1){
					if (evento.className == pro.seleccionUl.children[2].className) {
						pro.resultadoPositivo++;
					}else if (evento.className == pro.seleccionUl.children[0].className) {
						pro.resultadoNegativo++;
					}else{
						pro.resultadoEmpate++;
					}
				}
				else if(robot == 2 || pro.anteriorNumero == 2){
					if (evento.className == pro.seleccionUl.children[0].className) {
						pro.resultadoPositivo++;
					}else if (evento.className == pro.seleccionUl.children[1].className) {
						pro.resultadoNegativo++;
					}else{
						pro.resultadoEmpate++;

					}
				}
				pro.contadorPositivo.innerHTML = pro.resultadoPositivo;
				pro.contadorNegativo.innerHTML = pro.resultadoNegativo;
				pro.contadorEmpate.innerHTML = pro.resultadoEmpate;

			})
		}
	}
}
met.inicio()