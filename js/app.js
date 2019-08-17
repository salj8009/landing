  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD97mRaT6p5Mm_-zrKXh577O6e6LOhGkYc",
    authDomain: "milandingpagejsl.firebaseapp.com",
    databaseURL: "https://milandingpagejsl.firebaseio.com",
    projectId: "milandingpagejsl",
    storageBucket: "",
    messagingSenderId: "382797088931",
    appId: "1:382797088931:web:d79ce420d2c28b72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Get a reference to the database service
var database = firebase.database();


//funcion para prevenir el comportamiento por defecto del formulario
var my_func = function(event) {
    event.preventDefault();
};
var formulario = document.getElementById('formulario');
formulario.addEventListener("submit", my_func, true);

//funcion que obtiene los datos del formulario
/*     var miNombre = "";
     var miCorreo = "";
     var nombre;
     var correo; */


//function datos(){


     
/*    if (document.getElementById('miNombre') != null) {
        nombre = document.getElementById("miNombre");
    }
    else {
      alert("no puede ir vacio el campo");
    }
    if (document.getElementById('miCorreo') != null) {
       correo = document.getElementById("miCorreo");
    }
    else {
      alert("no puede ir vacio el correo");
    } */
 /*   
    var nombre = document.getElementById('miNombre');
    var correo = document.getElementById('miCorreo');

    nombre.addEventListener("keyup", function(event){
      if (nombre.validity.valid) {
        console.log("correcto");
      };
    }, false);

    correo.addEventListener("keyup", function(event){
      if (nombre.validity.valid) {
        console.log("correcto");
      };
    }, false); */

//}


//se invocca la funcion
 //datos(); 

/*  nombre = document.getElementById("miNombre").value;
  if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
    return false;
  };

correo = document.getElementById("miCorreo").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
  return false;
  } */
/*function prueba() {
 nombre = document.getElementById("miNombre").value;
 correo = document.getElementById("miCorreo").value;
  if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) && !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))) {
    return false;
  } else{
    alert("ok");
  };

}*/


function guarda() {

 nombre = document.getElementById("miNombre").value;
 correo = document.getElementById("miCorreo").value;
  if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) && !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))) {
    //return false;
   return Swal.fire('Oops...', 'Ingresa los datos que se indican', 'error')
  } else{
  //se crea el registro en la base
        var mailsRef = firebase.database().ref('prospectos').push().set(
            {
                nombre: nombre,
                correo: correo
            }
        );

 
/*Swal.fire(
  'Gracias por tu interes!',
  'estaremos en contacto contigo!',
  'success'
) */

 Swal.fire({
  title: '<strong>Gracias por tu interes!</strong>',
  //type: 'info',
  html:
    //'<h3 id="cf"><a href="http://neuroestrategias.com/html/aonc.html" target="_blank">Más Información.</a></h3>' 
    '<h3 id="cf">estaremos en contacto</h3>',

  showCloseButton: true,
 // focusConfirm: false,

}) 

    //con esto se limpia el formulario
    document.getElementById('formulario').reset();
  };
}

