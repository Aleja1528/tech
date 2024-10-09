function capturarDatos(){

//capturar los valores del formulario 
const nombre= document.getElementById("nombre").value;
const apellido= document.getElementById("apellido").value;
const email= document.getElementById("email").value;
const edad= document.getElementById("edad").value;
const genero= document.getElementById("genero").value;


//const titulo = document.querySelectorAll(Selection) selecciona el select para mostrar

const informacion= `
<p> <strong>nombre:</strong> ${nombre} </p>
<p> <strong>apellido:</strong> ${apellido} </p>
<p> <strong>email:</strong> ${email} </p>
<p> <strong>edad:</strong> ${edad} </p>
<p> <strong>genero:</strong> ${genero} </p>
`;

// insetar informacion en la div con id "output"
document.getElementById("output").innerHTML= informacion

//limpiar los campos del formulario
document.getElementById("formulario").reset()

}