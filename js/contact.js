let nombre = document.getElementById('nombre').value;
let correo = document.getElementById('correo').value;
let nombre_empresa = document.getElementById('nombre_empresa').value;
let descripcion = document.getElementById('descripcion').value;
emailjs.send("service_ff5436h","template_m0ias2f",{
    nombre: nombre,
    correo: correo,
    empresa: nombre_empresa,
    descripcion: descripcion,
    });