# Films Catalogs

Este repositório contém o código-fonte de um catálogo de filmes, que utiliza a **API do TMDB** para exibir filmes em diferentes categorias, com suporte a pesquisa e detalhes sobre cada título.

## ✨ Funcionalidades
- Exibição de filmes nas categorias **"Em breve"**, **"Em exibição"** e **"Mais votados"**.
- Pesquisa de filmes por título.
- Exibição de detalhes como **gênero**, **data de lançamento**, **duração** e **descrição**.

## 🛠 Tecnologias Utilizadas
- **React**
- **Sass**
- **React Router**
- **Swiper** (para o slider de filmes)
- **API do TMDB**

## 🛢 Como Rodar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/seuusuario/films-catalogs.git

2. Navegue até a pasta do projeto:
   ```sh
   cd films-catalogs

3. Instale as dependências:
   ```sh
   npm install

4. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
   ```sh
   VITE_API_MOVIE=https://api.themoviedb.org/3/movie/
   VITE_SEARCH_MOVIE=https://api.themoviedb.org/3/search/movie
   VITE_IMG_ORI=https://image.tmdb.org/t/p/original
   VITE_IMG=https://image.tmdb.org/t/p/w500
   VITE_API_KEY=sua_chave_api_aqui

5. Como Obter sua Chave da API do TMDB:

- Crie uma conta ou faça login no TMDB.

- Vá para a seção de API e crie sua chave de API.

- Copie e cole a chave no arquivo .env como VITE_API_KEY=Sua_chave_aqui.


6. Após configurar o .env, inicie o servidor localmente:  
   ```sh
   npm run dev

