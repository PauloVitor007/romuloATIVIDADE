# Questões Teóricas (6 e 7)

## 6. Principais métodos para criar, editar e remover elementos HTML usando JavaScript

**Criar**
- `document.createElement(tagName)`: Cria um novo nó de elemento (ex: `document.createElement('div')`).
- `document.createTextNode(text)`: Cria um novo nó de texto.

**Editar (Adicionar/Inserir)**
- `elementoPai.appendChild(elementoFilho)`: Adiciona o elementoFilho ao final da lista de filhos do elementoPai.
- `elementoPai.insertBefore(novoElemento, elementoDeReferencia)`: Insere o novoElemento antes do elementoDeReferencia.
- `elemento.textContent = 'novo texto'`: Define ou altera o conteúdo de texto de um elemento (remove filhos anteriores).
- `elemento.innerHTML = '<h1>Novo HTML</h1>'`: Define ou altera o conteúdo HTML de um elemento (processa as tags).
- `elemento.setAttribute('atributo', 'valor')`: Adiciona ou altera um atributo (ex: `img.setAttribute('src', 'imagem.png')`).
- `elemento.classList.add('novaClasse')`: Adiciona uma classe CSS.

**Remover**
- `elementoPai.removeChild(elementoFilho)`: Remove o elementoFilho do elementoPai.
- `elemento.remove()`: Método mais moderno que remove o próprio elemento do DOM.

## 7. Diferença entre JavaScript no navegador e JavaScript no Node.js

**Navegador (Browser)**

- Objetivo: Interagir com o usuário e manipular páginas web.
- APIs Globais: Possui objetos globais como `window` e `document`.
- DOM (Document Object Model): Pode acessar e manipular o HTML e CSS da página (`document.getElementById`, `window.alert`, etc.).
- Segurança: É executado em um ambiente "sandbox" (caixa de areia) e não pode, por exemplo, acessar arquivos locais do computador do usuário diretamente (por razões de segurança).

**Node.js**

- Objetivo: Executar JavaScript no lado do servidor (backend, scripts, ferramentas).
- APIs Globais: Possui objetos globais como `global` e `process`.
- Sem DOM: Não existe `window` ou `document`, pois não há uma página web para manipular.
- Acesso ao Sistema: Pode acessar o sistema de arquivos (`fs`), redes (`http`, `net`), variáveis de ambiente (`process.env`) e executar comandos do sistema.
- Módulos: Historicamente usava `require` (CommonJS), mas agora suporta plenamente `import` (ESM).
