  // Your web app's Firebase configuration
 //aqui va la configuracion de firebase...
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
 

 Swal.fire({
  title: '<strong>Gracias por tu interes!</strong>',
  html:
    '<h3 id="cf">estaremos en contacto</h3>',

  showCloseButton: true,

}) 

    //con esto se limpia el formulario
    document.getElementById('formulario').reset();
  };
}

