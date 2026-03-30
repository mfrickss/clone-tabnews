UDP: User datagram protocol - NÃO TEM LAG pois interpola um dado ao outro.
TCP: Transmission Control Protocol -> Error recovery: Garante que o dado chegue sem problemas. Se der algum problema, ele identifica qual até ser corrigido e tenta transmitir ser esse acordo entre as partes = lag(NÃO NECESSÁRIAMENTE, PORÉM É MAIS LENTO Q UDP DE ALGUMA FORMA)

o git não guarda somente o DIFF. por isso ele é muito rápido. Se fosse o caso, ele leria todos os arquivos para montar a versão final, fazendo isso se torna insustentável em projetos grandes.

BLOB(Binary Large OBject: É um objeto que guarda as versões do no código.
"foto" = COMMIT


O git guarda ambas as versões dentro da pasta .git, quando você altera(commita) algo no código, o git "tira uma nota foto" e não descarta o BLOB anterior, a nova "foto" vai apontar para o blob anterior caso ele não tenha sido alterado. exemplo:

ARQ1 E ARQ2 = FOTO 1 -> BLOB1

ARQ1.5(ALTERADO) E ARQ2(INTACTO) = FOTO 2 -> BLOB1.5 E BLOB1


DIA 8:
THE GREAT WALL! Nunca vamos conseguir mover uma parede muito grande, inclusive se tentarmos, quem acabará sendo empurrado somos nós. Assim como ninguém nunca conseguirá construir um muro de uma vez, apenas tijolo por tijolo. A empolgação que virá na idealização dessa parede, com todas a features, documentação, tecnologias que serão usadas, bateria de frente com a frustração se tentássemos construí-la de uma vez só. Por isso, ao construir um software, temos duas opções de caminhos para traçar: Orgânico e Impressora 3D.


Orgânico: Este é um método até natural que se encaixa em nossa biologia, onde você monta membro por membro, órgão por membro, faz as coisas se encaixarem. Não me entenda mal, vamos com certeza enfrentar muitos desafios e dores de cabeça seguindo esse caminho, porém até mesmo a recompensa dele é orgânica, onde sempre teremos pequenas vitórias. É perfeito para criar coisas do zero, aprender novas habilidades, etc.


Impressora 3D: É usado para quando já sabemos o que estamos construindo, pois já esperamos a resposta que teremos quando empurrarmos a parede. Ótimo para replicar construções que já trilhamos no caminho.

NOTA: SEMPRE EVITAR OVER ENGENEERING E FEATURE CREEP!

ONE MAN'S TRASH, IT'S ANOTHER MAN'S TEASURE.

Um exemplo disso foi quando o nosso mano Deschamps fez um projeto que talvez não era tão interessante assim para a comunidade, mas a sacada dele foi, no READ.ME do projeto, ele criou um TUTORIAL de COMO ele criou o repositório, fazendo assim o projeto dele ter um objetivo principal e um secundário, onde as vezes um deles é o "lixo" e o outro o "tesouro". Ou quando uma mensagem(de alguém querido, um autor que você gosta, etc) significa muito pra ti, mas para os outros nem tanto. É assim que o mundo funciona.


DIA 9:
Fazer muito com pouco! Não gostamos de comer pedra, pelo menos não enquanto ela é uma pedra gigante, então por isso precisamos SEMPRE marreta-la até que seja tragável para nós, isto é, sempre dividir as tarefas em outras tarefas menores, tudo sempre com propósito e com a recompensa gigante de TER FEITO ALGO, e não ficar o sentimento de "tudo ou nada" onde só fazemos "tudo" ou nunca fazemos. No fim, ir juntando pedras pequenas é muito melhor do que tentar mover uma pedra que não temos força para tal. O saldo de "não fazer nada" sempre será positivo para nosso cérebro, o desconforto de fazer "pouco" é muito mais recompensador à longo prazo.
Uma "Milestone" é uma PARTE da nossa pedra gigantesca, e dentro dela, vamos diminuir ainda mais seu tamanho, para ai sim conseguirmos deixa-la tragável, resultando nas: "issues". conhecidas também como tasks.

Issue de inception: Contornar a monstruosidade que temos ao pensar em um projeto, converter uma ideia q ainda é um protótipo abstrato em um formato linear, o que vai ajudar a entender se a ideia é tangível ou não. Nessa parte também vamos conseguir definir, pelo menos enquanto rascunho, o que está e o que não está no escopo do projeto, o que faz ou não sentido para o mesmo.


DIA 10:
Estilização de código.
É DE EXTREMA IMPORTÂNCIA que exista um padrão de escrita de código dentro de uma codebase, principalmente quando existe mais de um dev alterando o projeto. Se cada desenvolvedor escrever o código da sua maneira, a longo prazo isso vai virar uma bagunça e ficará cada vez mais difícil de dar manutenção e também de arrumar essa bagunça depois. Eu utilizo o ruff linter para isso, 79 caracteres por linha, aspas únicas no código, newline, tamanho e style do TAB(Indent), etc.

Aqui no curso.dev, usamos o prettier `npm install prettier -D` e o configuramos nas settings para aplicar o lint on save. É importante também lembrar do .editorconfig, onde setamos os lints antes do save, como tamanho e estilo da identação.


DIA 11:
DNS -> Domain Name System: é a lista telefônica da internet. Os domínios que geralmente vemos, na verdade, são "falsos", o que o servidor realmente busca é o IP, nós só damos o "nome" do contato e o servidor busca o "número" do contato. exemplo: "google.com" não é o que o servidor busca, o que acontece é que mandamos isso para o servidor DNS, ele vai retornar para nós o IP, e aí sim mandaremos buscar no SERVIDOR final, ou seja, um passo para trás para dar DOIS para frente. Isso é útil pois se um site mudar de ip, o domínio não mudará.


VÁRIAS coisas acontecem ao fazer uma requisição de domínio(apertar enter pra pesquisar um site) primeiro, o nosso PC manda para um RECURSIVE RESOLVER, que é o nosso provedor de internet, esse cara não sabe de quase nada, mas ele sabe que existem outros servers que nos darão respostas. um deles é o ROOT SERVER A, q é o que cuida do rootdomain e do TLD, isto é, ele apenas SABE onde estão os IPs dos servidores onde estão os TLDs(.BR. que é um ccTLDs, por exemplo) (.com é um gTLDs, isto é, g de GENÉRICO).

o RESOLVER agora tem o IP do servidor que precisamos (.BR.) e agora temos o TLDs .BR, que também não sabe onde está o domínio que precisamos ainda. Mas ele sabe o IP DO Authoritative Server que é o servidor que guardar todos os DNS Records, nesse cara finalmente vai nos ser retornado o IP final que precisamos, e só então o nosso PC vai chamar o servidor final e nos dar o site que buscamos.


TTL(TIME TO LIVE) -> faz o cache em todos os passos acima, o que adianta MUITO todas as requisições que faremos.