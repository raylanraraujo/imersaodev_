function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    // se campoPesquisa for string sem nada
    if (campoPesquisa =="" ){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa o nome de um atleta ou esporte.</p>"
        return 
    }

  

    campoPesquisa = campoPesquisa.toLowerCase() // vai ficar tudo minúscula e não importa como a pessoa digitar no campo de pesquisa maiúscula ou minúscula. 



    // Inicializa uma string para armazenar os resultados HTML
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo  includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Mais informações &rarr;</a>
            </div>
        `;
        }
            // então faça...
        console.log(dado.titulo.includes(campoPesquisa))
        // Cria um novo elemento HTML para cada resultado
       
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}

