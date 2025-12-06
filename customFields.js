let customFieldCounter = 0;

function addCustomField() {
    customFieldCounter++;

    const container = document.getElementById("customFieldsContainer");

    const wrapper = document.createElement("div");
    wrapper.classList.add("custom-field-block");
    wrapper.id = `customField_${customFieldCounter}`;

    wrapper.innerHTML = `
        <input type="text" class="customFieldInput" placeholder="Custom field text..." oninput="updatePreview()">
        <button type="button" class="btn-danger" onclick="removeCustomField('${wrapper.id}')">Remove</button>
        <br><br>
    `;

    container.appendChild(wrapper);
    updatePreview();
}

function removeCustomField(id) {
    const cf = document.getElementById(id);
    if (cf) cf.remove();
    updatePreview();
}

function getCustomFields() {
    return [...document.querySelectorAll(".customFieldInput")]
        .map(cf => cf.value.trim())
        .filter(Boolean);
}