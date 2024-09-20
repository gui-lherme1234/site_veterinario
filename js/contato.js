document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Cria uma nova linha na tabela
    const table = document.getElementById('infoTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = cpf;
    newRow.insertCell(2).textContent = rg;
    newRow.insertCell(3).textContent = email;
    newRow.insertCell(4).textContent = phone;

    // Limpa os campos do formulário
    document.getElementById('infoForm').reset();
});
