let nombre = document.getElementById('nombre').value;
let correo = document.getElementById('correo').value;
let empresa = document.getElementById('nombre-empresa').value;
let descripcion = document.getElementById('descripcion');

emailjs.send("service_ff5436h", "template_m0ias2f",{
    nombre: nombre,
    correo: correo,
    empresa: empresa,
    descripcion: descripcion,
});