function prepararMensaje(mensaje) {
    return mensaje.replace(/[^\w\s]/gi, '').replace(/[0-9]/gi, '').toLowerCase();
}

function encriptar() {
    const mensaje = prepararMensaje(document.getElementById('entrada').value);
    var encriptado = mensaje.replace(/e/gi, 'enter');
    encriptado = encriptado.replace(/i/gi, 'imes');
    encriptado = encriptado.replace(/a/gi, 'ai');
    encriptado = encriptado.replace(/o/gi, 'ober');
    encriptado = encriptado.replace(/u/gi, 'ufat');

    document.getElementById('salida').value = encriptado;
}

function desencriptar() {
    const mensaje = prepararMensaje(document.getElementById('entrada').value);
    var desencriptado = mensaje.replace(/imes/gi, 'i');
    desencriptado = desencriptado.replace(/enter/gi, 'e');
    desencriptado = desencriptado.replace(/ai/gi, 'a');
    desencriptado = desencriptado.replace(/ober/gi, 'o');
    desencriptado = desencriptado.replace(/ufat/gi, 'u');

    document.getElementById('salida').value = desencriptado;
    
}


document.getElementById('enc').addEventListener('click', encriptar);
document.getElementById('desenc').addEventListener('click', desencriptar);

