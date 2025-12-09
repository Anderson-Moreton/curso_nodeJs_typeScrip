"Use Strict";

//Selecionar formulario pelo ID
const form = document.forms.namedItem("Registration");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value;
    const password = form.password.value;

    // FormData API - Usada para capturar todos os dados do formulario - retorna um objeto
    const formData = new FormData(form);

    formData.set("name", name); //Altera o valor do campo name
    formData.set("password", password); //Altera o valor do campo password

    console.log(formData.has("name")); //Verifica se o campo name existe
    console.log(formData.has("password")); //Verifica se o campo password existe

    console.log(formData.get("name")); //Retorna o valor do campo name
    console.log(formData.get("password")); //Retorna o valor do campo password

    //DELETE
    formData.delete("name");
    console.log(formData.has("name")); //Verifica se o campo name existe
    
    console.log(name, password);
});

