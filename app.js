function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string para armazenar os resultados HTML
    let resultados = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
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

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
//console.log(dados);


