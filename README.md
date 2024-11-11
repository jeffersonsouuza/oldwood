# Oldwood - Landing Page

<p align="center">
  <img src="src/assets/images/oldwood-lp.webp" alt="Landing Page" width="500" height="300">
</p>

**Oldwood** é uma landing page desenvolvida para apresentar uma barbearia com atendimento diferenciado e em casa. Este projeto foi criado para aprimorar habilidades com **Bootstrap** e a ferramenta de otimização **Parcel**.

[**Deploy da Página**] https://jeffersonsouuza.github.io/oldwood

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Sass**
- **Bootstrap**
- **Javascript**
- **Parcel** (para gerenciamento de módulos)
- **EsLint** (para padronização de código)

## Estrutura de Pastas

Abaixo está a estrutura de pastas do projeto para facilitar a navegação:

```plaintext
oldwood/
├── dist/                  # Pasta gerada com a versão final para produção
├── src/
│   ├── assets/            # Módulos JS
│   │   ├── fonts/
│   │   └── images/        # Imagens usadas no projeto
│   ├── scripts/
│   │   └── index.js       # Arquivo JS principal
│   ├── styles/
│   │   ├── sass/          # Arquivos .scss organizados em partials
│   │   └── style.css      # Arquivo CSS principal gerado a partir do Sass
│   └── index.html         # Página principal (HTML)
├── eslint.config.mjs      # Configuração do ESLint
└── package.json           # Dependências e scripts do projeto
```

## Como Configurar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### Instalação

1. **Clone o repositório:**

   Clone este repositório para a sua máquina local usando o comando abaixo:

   ```bash
   git clone https://github.com/jeffersonsouuza/oldwood.git
   ```

2. **Navegue até o diretório do projeto:**

   Após clonar o repositório, entre na pasta do projeto:

   ```bash
   cd oldwood
   ```

3. **Instale as dependências do projeto:**

   Para instalar todas as dependências necessárias listadas no arquivo package.json, execute o comando:

   ```bash
   npm install
   ```

## Como Usar

### Compilando Sass

Para compilar os arquivos Sass e iniciar um servidor de desenvolvimento com atualização automática, execute o seguinte comando:

```bash
npm run dev
```

### Processo de Build do Webpack

Para gerar a versão de produção do projeto com o Webpack, use o comando:

```bash
npm run build
```

### Deploy via GitHub Pages

O projeto está configurado para fazer o deploy automaticamente no GitHub Pages. Sempre que há um push na branch `main`, o GitHub Pages atualiza a página com a versão mais recente disponível na pasta `dist`, que é gerada pelo comando `npm run build`.

Para acessar a versão publicada da página, utilize o link: [https://jeffersonsouuza.github.io/oldwood](https://jeffersonsouuza.github.io/oldwood)

## Créditos

Este projeto é baseado no design da Barbershop - Landing Page disponibilizado no Figma Community, e foi desenvolvido para praticar técnicas de layout e design com Bootstrap.

- Design original: [Barbershop Landing Page](https://www.figma.com/community/file/1317472359565678898/barbershop)
- Autor do Design: [Santon Sujarwo](https://www.figma.com/@santonsujarwo)
