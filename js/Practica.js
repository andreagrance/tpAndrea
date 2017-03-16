function funcion1(){
    document.getElementById('id1').innerHTML= Date();
}

var x,y,z;
x=8;
y=8;
z=x+y;
document.getElementById('ee').innerHTML=z;






function miFuncion(){
    document.getElementById('jav_ext').innerHTML= "javascript externo";
}
var x,y, z;
x=10;
y=28;
z=x+y;
function sumar(){
    document.getElementById("camb").innerHTML=andy;
    imprimir();    
}

document.getElementById("deci").innerHTML= 10.50;

/* function lista(){
     var  nombres=['andy','marce','hugo','alexis','diego','ale'];
     var   apellidos= {'apellAndy':'Salinas','apellMarce':'Flecha','apellHugo':'Silva','apellAlexis':'Granja',
    'apellDiego':'Gonzales','apellAle':'Grance'};
document.getElementById("parrafin").innerHTML=nombres[1]+' '+apellidos.apellMarce;
  //   alert(nombres[0]+' '+apellidos.apellAndy);

} */

/*function nombre(){
     var  nombres=['andy','marce','hugo','alexis','diego','ale'];
     var apellCompas= apellido(3);
     alert(nombre[1]+''+apellCompas ); 
}

function apellido(posi){
      var  apellido=['sali','fle','Silva','Granja','Gon','Grance'];
      return apellido[posi];
} */

/*function printNames(){
     var  nombres= "andy";
     imprimir (nombres);
}
function printLastname(){
      var  apellido= "salinas";
      imprimir(apellido);
}
var datos= "";
function imprimir(datos){
      alert(datos);
} */
function printNames(){
     var  x= 5;
     var y=6;
    var suma= x+y;
     imprimir (suma);
}

function printLastname(){
      var  x= 5;
     var y=6;
    var multi= x*y;
     imprimir (multi);
}

/*function imprimir(){
  var datos= document.getElementById("camb").value;
      console.log(datos);
}*/
/*function imprimir(){
  var datos= document.getElementById("camb").value;
      alert(datos);
}*/
function imprimir(datos){
      console.log(datos);
}











