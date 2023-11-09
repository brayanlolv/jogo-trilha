<head><style>
    p{
        text-indent:25px
    }
</style></head>

<a href="https://brayanlolv.github.io/jogo-trilha/index.html"> <h1>jogo da trilha</h1></a>

<p>Olá, essa é o jogo da trilha, eu fiz ele para um trabalho da faculdade que pedia um programa que aplicasse algum tipo de estrutura de dados, e no caso, dava como sugestão um  jogo do tabuleiro, então, foi escolhido o jogo da trilha
</p>

<h2>Como o jogo funciona:</h2>

<p>
Basicamente cada jogador começa com 8 peças, que são posicionadas uma por uma e  depois movimentadas em rounds, o objetivo, é fazer trincas(preencher uma linha ou coluna com uma mesma cor), sendo possível fazer trincas tanto ao posiciona-las no tabuleiro, tanto movimentando-as. Ganha quem deixar o oponente com apenas duas peças, pois, assim ele não tem mais chances de fazer trincas.</p>

<h2>Desenvolvimento e Aprendizados:</h2>

<p>No desenvolvimento foi usadas tecnologias simples como html, css e javascript(linkado no html mesmo), sem frameworks ou bibliotecas externas com exceção de uma função JQuery.</p>

<p>
O tabuleiro foi representado por uma matriz 7x7, em que os espaços vazios são representados como 0, as pecas vermelhas como 3 e as brancas como 4. Para verificar a ocorrência de trincas é usada uma função que soma os valores da linha e coluna e divide por três esperando o valor das pecas (3 ou 4), como uma média, com exceção da  linha ou coluna do meio, onde é aplicada a mesma lógica, mas apenas na   metade dela.</p>

<p>Em relação as divs com que interagimos, foram organizadas dentro de um array onde aplicamos funções que percorrem todo o array e usam não só seus próprios elementos como também seu index como argumentos, por exemplo, para atualizar os "eventsListener" ou verificar a existência de um certo elemento num array bidimensional.
</p>
<p>Também foram usados ideias como callbacks, por exemplo, na função de comer a peca adversaria após a trinca, que recebe como parâmetro uma função para ser chamada posteriormente, no caso, ou para continuação da primeira etapa(posicionar) ou para a segunda(movimentar)</p>

<a href="https://github.com/brayanlolv/jogo-trilha">repositório</a>
