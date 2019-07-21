document.addEventListener("keydown", pulsar);
document.addEventListener("keyup", soltar);

var pulsos=new Array(4).fill(false);
// 0 up
// 1 down
// 2 left
// 3 right
var teclas = { UP: 38, DOWN: 40, RIGHT: 39, LEFT: 37 };
var cuadrito = document.getElementById("area_trabajo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;
var velx=0;
var vely=0;
var colorcito = "#BE3BF9";
var movimiento = 10;

dibujarLinea("red", x-1, y-1 , x+1, y+1, papel);//Iniciar trazo en el centro
function pulsado()
{
	for(var i=0;i<pulsos.length;i++)
	{
		if(pulsos[i])
			return true;
			console.log("pulsado");
	}
	return false;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 4;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
} 
function pulsar(evento)
{

	if(evento.keyCode==teclas.UP)
	{
		vely=-movimiento;
		// yf-=movimiento;
		pulsos[0]=true;
	}
	if(evento.keyCode==teclas.DOWN)
	{
		// dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		// yf += movimiento;
		vely=movimiento;
		pulsos[0]=true;
	}
	if(evento.keyCode==teclas.LEFT)
	{
		// dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		// xf -= movimiento;
		velx=-movimiento;
		pulsos[0]=true;
	}
	if(evento.keyCode==teclas.RIGHT)
	{
		// dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		// xf += movimiento;
		velx=movimiento;
		pulsos[0]=true;
	}
	// if(pulsos[0] && pulsos[1])
	// {
	// 	vely=0;
	// }
	// if(pulsos[2] && pulsos[3])
	// {
	// 	velx=0;
	// }
	console.log("velx:" +velx);
	console.log("vely:" +vely);
	dibujarLinea(colorcito,x,y,x+velx,y+vely,papel);
	// x = x + velx ;
	x+=velx;
	y+=vely;
}
function soltar(evento)
{

	console.log("Soltado: ");
	if(evento.keyCode==teclas.UP)
	{
		vely+=movimiento;
		// yf-=movimiento;
		pulsos[0]=false;
		console.log("UP");
	}
	if(evento.keyCode==teclas.DOWN)
	{
		// dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		// yf += movimiento;
		vely-=movimiento;
		pulsos[0]=false;
		console.log("DOWN");
	}
	if(evento.keyCode==teclas.LEFT)
	{
		// dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		// xf -= movimiento;
		velx+=movimiento;
		pulsos[0]=false;
		console.log("LEFT");
	}
	if(evento.keyCode==teclas.RIGHT)
	{
		// dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		// xf += movimiento;
		velx-=movimiento;
		pulsos[0]=false;
		console.log("RIGHT");
	}
	
	console.log("velx:" +velx);
	console.log("vely:" +vely);
}
	
