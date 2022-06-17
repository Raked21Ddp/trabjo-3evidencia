document.getElementById("boton").addEventListener("click",function(){
    let nom = document.getElementById("nombre").value
    let tel = document.getElementById("telefono").value
    let corr = document.getElementById("correo").value
    //mostrar la información
    document.getElementById("salida").innerHTML="Hola " + nom + " te has hecho acrededor de un vale de 10 soles en consumo y te llamaremos al número " + tel + " para decirte como podrás reclamarlo."
})