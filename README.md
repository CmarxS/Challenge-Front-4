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


