UDP: User datagram protocol - NÃO TEM LAG pois interpola um dado ao outro.

TCP: Transmission Control Protocol -> Error recovery: Garante que o dado chegue sem problemas. Se der algum problema, ele identifica qual até ser corrigido e tenta transmitir ser esse acordo entre as partes = lag(NÃO NECESSÁRIAMENTE, PORÉM É MAIS LENTO Q UDP DE ALGUMA FORMA)



o git não guarda somente o DIFF. por isso ele é muito rápido. Se fosse o caso, ele leria todos os arquivos para montar a versão final, fazendo isso se torna insustentável em projetos grandes.



BLOB(Binary Large OBject: É um objeto que guarda as versões do no código.

"foto" = COMMIT





O git guarda ambas as versões dentro da pasta .git, quando você altera(commita) algo no código, o git "tira uma nota foto" e não descarta o BLOB anterior, a nova "foto" vai apontar para o blob anterior caso ele não tenha sido alterado. exemplo:



ARQ1 E ARQ2 = FOTO 1 -> BLOB1



ARQ1.5(ALTERADO) E ARQ2(INTACTO) = FOTO 2 -> BLOB1.5 E BLOB1





***DIA 9:***

***Fazer muito com pouco!*** Não gostamos de comer pedra, pelo menos não enquanto ela é uma pedra gigante, então por isso precisamos SEMPRE marreta-la até que seja tragável para nós, isto é, sempre dividir as tarefas em outras tarefas menores, tudo sempre com propósito e com a recompensa gigante de **TER FEITO ALGO**, e não ficar o sentimento de "tudo ou nada" onde só fazemos "tudo" ou nunca fazemos. No fim, ir juntando pedras pequenas é muito melhor do que tentar mover uma pedra que não temos força para tal. O saldo de "não fazer nada" sempre será positivo para nosso cérebro, o desconforto de fazer "pouco" é muito mais recompensador à longo prazo.

Uma "Milestone" é uma PARTE da nossa pedra gigantesca, e dentro dela, vamos diminuir ainda mais seu tamanho, para ai sim conseguirmos deixa-la tragável, resultando nas: "issues". conhecidas também como tasks.



Issue de inception: Contornar a monstruosidade que temos ao pensar em um projeto, converter uma ideia q ainda é um protótipo abstrato em um formato linear, o que vai ajudar a entender se a ideia é tangível ou não. Nessa parte também vamos conseguir definir, pelo menos enquanto rascunho, o que está e o que não está no escopo do projeto, o que faz ou não sentido para o mesmo.

