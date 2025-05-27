
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement ('article')
    cartao.className = 'cartao'
    cartao.innerHTML =`
        <div class="cartao__conteudo">
            <h3>Programação</h3>
            <div class="cartao__conteudo">
                <h3>Programação</h3>
                <div class="cartao__conteudo__pergunta">
                    O que é JS ?
                </div>
                <div class="cartao__conteudo__resposta">
                    O que é JS ?
                </div>
            `
            container.appendChild(cartao)
}
