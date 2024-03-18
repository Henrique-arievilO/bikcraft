//Mudando o estado do pseudo elemento com hover para fixo com uma classe ativa.

    //Primeiro foi criada uma variável que capturasse os links dentro da header.
    //Em seguida, por serem vários links, utiliza-se o forEach com uma função linkada a ele.
    //Dentro da função, foram criadas duas variáveis, uma para localizar o href e outra para efeito de comparação entre a url e o href.
    //Foi usada o if para comparar se as informações do href estão inclusos na url e caso esteja, adicionar a classe active.
    //No css, foi informado que a classe ativa deveria ter o mesmo efeito do hover no pseudo elemento after.

const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)){
        link.classList.add('active')
    }
}

links.forEach(activeLink);

////////////////////////////////////////////////////////////////////////////////

//Ativando os parâmetros de url para otimizar a navegação.

    //Primeiro passo foi adicionar ao link nas páginas de seguros e bicicletas o caminho exato para que o produto seja selecionado no input radio de acordo com o link no html.
    //Foi criada uma variável para capturar a url retornando no console um array com os parâmetros de busca.
    //Em seguida, utiliza-se o forEach com uma função linkada a ele.
    //Na função, utiliza-se como parâmetro "parameter" e no corpo da função, buscamos pelo id do elemento desejado.
    //Para checar os elementos, usa-se o atributo checked = true dentro da condicional if.

const parameters = new URLSearchParams(window.location.search);

function selectProduct(parameter) {
    const element = document.getElementById(parameter)
    if (element) {
        // @ts-ignore
        element.checked = true;
    }
    console.log(element)
}

parameters.forEach(selectProduct);

// console.log(parameters);

////////////////////////////////////////////////////////////////////////////////

//Otimizando a sessão de perguntas frequentes

    //Primeiro, no html, foi inserido dentro da tag dt um button com atributos de aria-controls e aria-expanded afim de identifica quanto o botão está expandido e a qual id (dd) ele corresponde.
    //No script, foi utilizado o forEach para falar com cada item do array.
    //Foi criada uma função com evento de clique que chama outra função externa.
    //Esta por sua vez pega o alvo (botão) e seleciona o atributo que corresponde ao atributo do dd.
    //Foi criado um evento de toggle para que seja setada uma classe ativa/desativa no botão.
    //Foi dito que quando o botão estiver ativo, ele deve mostrar o dd e o aria-expanded setado para "true", caso contrário, esconde o dd e muda o aria-expanded para "false".

const faqs = document.querySelectorAll(".faq button");

function activeReply(event){
    const faq = event.currentTarget;
    const controls = faq.getAttribute("aria-controls");
    const reply = document.getElementById(controls);

    reply?.classList.toggle('activeReply');
    const active = reply?.classList.contains("activeReply");
    faq.setAttribute("aria-expanded", active)
    console.log(active)
}

function faqEvents(faq){
    faq.addEventListener('click', activeReply)
    console.log(faq);
}

faqs.forEach(faqEvents)

////////////////////////////////////////////////////////////////////////////////

//Animando a galeria com seletor de clique.

    //Primeiramente foram capturadas as imagens e a galeria que contém elas.
    //Em seguida, utilizado o forEach para falar com cada imagem individualmente.
    //Depois criou-se uma função com efeito de clique que corresponde a uma função externa.
    //Na função externa, foi definido que ao clicar na imagem, ela deve responder a um evento que troca as imagens de lugar, levando a imagem clicaca para a primeira posição.
    //Para efeito de melhor visualização, foi definido que abaixo de um tamanho específico, esse efeito não funcionaria mais, sendo assim, esta função só é ativada, se o tamanho da tela corresponder ao mínimo estabelecido.

const galery = document.querySelectorAll(".bike-image img");
const galeryContainer = document.querySelector(".bike-image");

function changeImg(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if (media) {
        galeryContainer?.prepend(img)
    }
    console.log(img);
}

function eventImg(img){
    img.addEventListener("click", changeImg);
}

galery.forEach(eventImg)

////////////////////////////////////////////////////////////////////////////////

//Adicionando plugin de animação.

//Instruções em: https://github.com/origamid/simple-anime/tree/master no READme

// @ts-ignore
if (window.SimpleAnime){
    // @ts-ignore
    new SimpleAnime();
}

