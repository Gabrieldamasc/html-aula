document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    const dataNascimento = new Date(document.getElementById("ageUser").value);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    if(mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())){
        idade--;
    }

    if(idade <= 17 && idade !== 0){
        alert("Você é menor de idade!")
        document.getElementById("resultado").textContent = `idade: ${idade} anos`;
    }else if(idade >= 18 && idade !== 0){
        alert("Você é maior de idade!")
        document.getElementById("resultado").textContent = `idade: ${idade} anos`;
    }else{
        alert("Idade inválida. Tente novamente!")
    }

});

