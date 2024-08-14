document.getElementById('regBtn').addEventListener('click', function() {
    validarFormulario();
});

function validarFormulario() {
    var termsCheckbox = document.getElementById('terminos');
    
    // Verificar si el checkbox está marcado
    if (!termsCheckbox.checked) {
        showAlertError(); // Muestra la alerta de error
        return false; // Si la validacion falla no se puede realizar otras acciones 
    }
    
    showAlertSuccess(); // Mostrar la alerta de éxito si todo está bien

    return true; // Indica si la validacion esta correcta
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}