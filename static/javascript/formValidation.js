
function nameValidate() {
    const NameInput = document.getElementById('NameInput');
    const ErrorsList = []
    if (NameInput.value === '') {
        ErrorsList.push("Please provide your name");
    }
    return ErrorsList
}
