function searchFor(){
    let section = document.getElementById("search-result");

    let searchField = document.getElementById("label-search").value;
    if(!searchField){
        section.innerHTML = "Por gentileza, insira os dados para realizar a pesquisa!";
        return;
    }
    searchField = searchField.toLowerCase();

let results = "";
let title = "";
let address = ""
let type = "";
let tags = "";

for(let data of restaurantes){
    title = data.nome.toLowerCase();
    address = data.endereco.toLowerCase();
    type = data.tipo.toLowerCase();
    tags = data.tags.toLowerCase();
    if(title.includes(searchField)|| address.includes(searchField)||type.includes(searchField)||tags.includes(searchField)){
        results +=`
        <div class="item-result">
            <h2><a href="${data.tags}" target="_blank">${data.nome}</a></h2>
        <p class="descricao-meta">${data.endereco}</p>
        </div>
        `
    }
}

if(!results){
    results = "Insira um estilo valido!"
}

section.innerHTML = results;

}