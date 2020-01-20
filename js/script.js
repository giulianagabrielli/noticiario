let buttonClick = document.getElementById('btn');
let board = document.getElementById('board');

buttonClick.addEventListener('click', ()=>{ //Serve para adicionar um evento. 1o tipo do evento e 2o o que ele vai fazer ()=> arrow function
    // alert("funcionou!");

    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2bcfb7c7c1aa4934adf8809dfff305f7").then((response)=>{ //solicitação http. É como se fosse um formulário. "vai lá e faz alguma coisa"

        return response.json(); //função json para trazer o json

        //poderia ser .then((response)=> response.json()).then(json=>{ console.log(json) })

    }).then(json=>{ //arrow function. json é um parâmetro
        console.log(json.articles); //acessando o nó articles dentro do objeto (o atributo)
        mostrarNaTela(json.articles);
    })

});
    //outro jeito de fazer sem usar o then:
    // buttonClick.addEventListener('click', async ()=>{
    //     let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2bcfb7c7c1aa4934adf8809dfff305f7")).json();

    //     console.log(await listaNoticias);

    // });

//template string: let saudacao = `Olá ${fulana}` 

let mostrarNaTela = listaNoticias => { //função para mostrar as notícias na tela

    //for (let noticia of listaNoticias)
    listaNoticias.forEach(function(noticia, posicao){

        let card = `<div class="col-lg-4">
                        <div class="card" style="width: 18rem;">
                            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${noticia.title}</h5> 
                            <p class="card-text">${noticia.description}.</p>
                            <a href="${noticia.url}" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>`

                    board.innerHTML += card; //innerHTML é um atributo. Está colocando o card dentro do board. += para adicionar ele mesmo na estrutura
    });


}