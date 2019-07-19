document.addEventListener("keydown", dibujarTeclado);

var teclas = { UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37 };
var cuadrito = document.getElementById("area_trabajo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1 , x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 4;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
} 

function dibujarTeclado(evento){           
	var colorcito = "#BE3BF9";
	var movimiento = 5;
	
	switch(evento.keyCode){

		case teclas.DOWN:
		dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;
		case teclas.UP:
		dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
		y = y - movimiento;
		break;
		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;
		case teclas.RIGHT:
		dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;

	}

}