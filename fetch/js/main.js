
 
 const respuesta = document.querySelector("tbody");
 //const respuesta = document.getElementById("respuesta");


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {

    //console.log(data)
    //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


     //   def         condicion   incremento 
    //for(var i=0; i<data.length; i++)

    let linea = "";
    data.forEach(element => {

        console.log(element)
         //varaible acumulativa    
        linea += `<tr><td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td></tr>`;

        //respuesta.innerHTML = JSON.stringify(data);
        //console.log(element.body)
    });


    respuesta.innerHTML = linea;

})
