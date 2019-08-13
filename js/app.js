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
     var miNombre = "";
     var miCorreo = "";
     var nombre;
     var correo;
function datos(){


     
    if (document.getElementById('miNombre') != null) {
        nombre = document.getElementById("miNombre");
    }
    if (document.getElementById('miCorreo') != null) {
       correo = document.getElementById("miCorreo");
    }

}


//se invocca la funcion
 datos();

function guarda() {
  //se crea el registro en la base
        var mailsRef = firebase.database().ref('prospecto').push().set(
            {
                nombre: nombre.value,
                correo: correo.value
            }
        );

 
/*Swal.fire(
  'Gracias por tu interes!',
  'estaremos en contacto contigo!',
  'success'
) */

 Swal.fire({
  title: '<strong>Gracias por tu interes!</strong>',
  type: 'info',
  html:
    '<h3 id="cf"><a href="http://neuroestrategias.com/html/aonc.html" target="_blank">Más Información.</a></h3>' ,

  showCloseButton: true,
  focusConfirm: false,

}) 

    //con esto se limpia el formulario
    document.getElementById('formulario').reset();

}

