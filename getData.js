function getInputs(id) {
    const input = document.getElementById(id);
    return input ? input.value.trim() : "";
}

function getSelectedCheckboxes() {
    const checkboxes = document.querySelectorAll('#checkbox_selection input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function getCheckedRadio(n) {
    const radio = document.querySelector(`input[name="${n}"]:checked`);
    return radio ? radio.value : "";
}
