# Projeto: SolucIonA
## Descrição
O **SolucIonA** é um protótipo de site desenvolvido em **Next.js**, que simula o produto final de uma solução inovadora. A proposta é criar uma IA capaz de interpretar relatórios provenientes de um **Scanner OBD**. Com os dados recebidos do scanner e o banco de dados de valores de manutenção automotiva, a IA oferece orçamentos mais precisos para os usuários.
## Funcionalidades do Site
O site contém informações dos veículos registrados, dos usuários e das oficinas. Para acessar essas funcionalidades, o usuário precisa primeiro se cadastrar e fazer login. Após o login, ele é redirecionado para a tela inicial, onde pode:

- **Consultar as informações dos veículos, do perfil e das oficinas**: 
  - O usuário acessa as informações entrando na respectiva área. As informações do perfil são exibidas de acordo com os dados fornecidos no cadastro. 
  - As informações do veículo aparecem de acordo com o ID do veículo, utilizando uma **API em Java** para criar, atualizar, visualizar e deletar veículos.
  - As informações das oficinas também são gerenciadas por uma API em Java.
- **Acessar a IA de diagnóstico e orçamento**:
  - A IA, exclusiva dos clientes **Porto**, ajuda a interpretar o relatório gerado pelo Scanner OBD e, a partir dele, gerar um orçamento. Além disso, responde a questões sobre o carro, como: "Como faço para limpar o vidro de trás do meu veículo?" ou "Como abrir a portinha da gasolina em meu carro?" *(funcionalidade desenvolvida apenas na aparência)*.
- **Localizar oficinas próximas à sua região**:
  - No desktop, o usuário digita o **CEP** para ver uma lista com 5 oficinas próximas.
  - Na versão mobile, o site mostra o mapa da localização atual e destaca as oficinas próximas.
- **Conectar o Scanner OBD**: 
  - Ao clicar, uma janela abre para conectar o Bluetooth do dispositivo ao Scanner OBD.

- **Gerar um orçamento personalizado ao descrever problemas no veículo**: 
  - Baseado na descrição fornecida pelo cliente e no banco de dados, um orçamento é gerado com base no problema descrito (a IA é exclusiva para clientes Porto).
## APIs Utilizadas

### API em Java
- **Veículos**: Endpoints para criar, atualizar, visualizar e deletar veículos.
- **Clientes**: Endpoints para criar, atualizar, visualizar e deletar clientes.
- **Oficinas**: Endpoints para criar, atualizar, visualizar e deletar oficinas.
- [Github - Repositório CRUD API ](https://github.com/camargo1605/Sprint-Java4)
### API em Python (Flask)
- **Autenticação**: Endpoint para autenticar o usuário.
- [Github - Repositório Autenticação API ](https://github.com/CmarxS/Python-Challenge)

## Como rodar o projeto
1. Necessário ter a versão `20.15.1` do **NodeJS**
2. Necessário ter a versão `10.7.0` do **Node Package Manager (NPM)**
3. Rodar o comando `npm install`
4. Rodar o comando `npm run dev`
## Integrantes
- Caio Marques (RM 555997)
- Felipe Camargo Revolta e Souza (RM 556325)
- Caio Amarante Miranda de Lima (RM 558640)

## Turma
**1TDSR**
## Links
- [Youtube - Link do vídeo de demonstração](https://youtu.be/NwFnjNWM6ik)
- [Youtube - Link do vídeo dos status das API's](https://youtu.be/K23WL8my0IE)
- [Github - Repositório no Github](https://github.com/CmarxS/Challenge-Front4)
- [Deploy na Vercel](https://challenge-front-4.vercel.app/)
