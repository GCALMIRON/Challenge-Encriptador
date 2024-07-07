function encriptar() {
    const inputText = document.getElementById('input-text').value;
    const outputMessage = document.getElementById('output-mensaje');
    const elementosIniciales = document.getElementById('elementos-iniciales');
    const botonCopiar = document.getElementById('copiar-texto');

    elementosIniciales.classList.add("oculto");

    outputMessage.textContent = "";

    const encriptado = inputText
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        outputMessage.textContent = encriptado;
        outputMessage.style.display = 'block';
        outputMessage.style.whiteSpace = 'pre-wrap';

        botonCopiar.classList.remove("oculto");
    }

function desencriptar() {
    const inputText = document.getElementById('input-text').value;
    const outputMessage = document.getElementById('output-mensaje');
    const elementosIniciales = document.getElementById('elementos-iniciales');
    const botonCopiar = document.getElementById('copiar-texto');

    elementosIniciales.classList.add("oculto");

    outputMessage.textContent = "";

    const desencriptado = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        outputMessage.textContent = desencriptado;
        outputMessage.style.display = 'block';
        outputMessage.style.whiteSpace = 'pre-wrap';

        botonCopiar.classList.remove("oculto");
}

document.getElementById('copiar-texto').addEventListener('click', function() {
    const textoCopiar = document.getElementById('output-mensaje').textContent;

    const textareaTemp = document.createElement('textarea');
    textareaTemp.value = textoCopiar;
    textareaTemp.style.position = 'absolute';
    textareaTemp.style.left = '-9999px';
    document.body.appendChild(textareaTemp);
    
    textareaTemp.select();
    document.execCommand('copy');

    document.body.removeChild(textareaTemp);

    // Mostrar mensaje o realizar alguna acción adicional
    alert("Texto copiado al portapapeles");
});
