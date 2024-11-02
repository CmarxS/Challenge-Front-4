# Documentação da API - Projeto SolucIonA

## Endpoints

### 1. Cadastro de Cliente

- **URL**: `http://localhost:8080/cliente`
- **Método**: `POST`
- **Descrição**: Endpoint para cadastrar um novo cliente no sistema.

#### Parâmetros da Requisição

- **Content-Type**: `application/json`
- **Body**: Um objeto JSON contendo os dados do cliente.

#### Tipos
- nome: string
- email: string
- cpf: string
- telefone: string
- endereco: string
- senha: string

#### Exemplo de Requisição


```
POST http://localhost:8080/cliente
Content-Type: application/json
{
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "cpf": "12345678901",
    "telefone": "(11) 98765-4321",
    "endereco": "Rua Exemplo, 123",
    "senha": "Senha123"
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400

### 2. Login de Cliente

- **URL**: `http://localhost:5000/login`
- **Método**: `POST`
- **Descrição**: Endpoint para logar um usuário no sistema.

#### Parâmetros da Requisição

- **Content-Type**: `application/json`
- **Body**: Um objeto JSON contendo os dados do usuario.

#### Tipos
- email: string
- senha: string

#### Exemplo de Requisição

```
POST http://localhost:5000/login
Content-Type: application/json

{
    "email": "joao.silva@email.com",
    "senha": "senhaJoao123"
}
```

- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 401

### 3. Busca Cliente por Email

- **URL**: `http://localhost:8080/cliente/{email}`
- **Método**: `GET`
- **Descrição**: Endpoint para buscar os dados de um cliente específico pelo email.

#### Parâmetros da Requisição

- **URL Params:** {email} - Email do cliente a ser buscado.

#### Tipos
- email: string

#### Exemplo de Requisição
```
GET http://localhost:8080/cliente/joao.silva@email.com
```

- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404


### 4. Atualiza Cliente por Email

- **URL**: `http://localhost:8080/cliente/{email}`
- **Método**: `PUT`
- **Descrição**: Endpoint para atualizar os dados de um cliente específico.

#### Parâmetros da Requisição

- **URL Params:** {email} - Email do cliente a ser atualizado.
- **Content-Type**: `application/json`
- **Body**: Um objeto JSON contendo os dados atualizados do usuario.


#### Tipos
- nome: string
- email: string
- cpf: string
- telefone: string
- endereco: string

#### Exemplo de Requisição
```
PUT http://localhost:8080/cliente/joao.silva@email.com
Content-Type: application/json

{
    "nome": "João Silva",
    "telefone": "(11) 98765-4321",
    "endereco": "Rua Atualizada, 456",
    "cpf": "12345678910",
    "telefone": "40028922",
    "enderco": "Nova rua, 123"
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400, 404

### 5. Deleta Cliente por Email

- **URL**: `http://localhost:8080/cliente/{email}`
- **Método**: `DELETE`
- **Descrição**: Endpoint para deletar um cliente específico do sistema.

#### Parâmetros da Requisição

- **URL Params:** {email} - Email do cliente a ser buscado.

#### Tipos
- email: string

#### Exemplo de Requisição
```
DELETE http://localhost:8080/cliente/joao.silva@email.com
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404

### 6. Cadastro de Veículo

- **URL**: `http://localhost:8080/veiculo`
- **Método**: `POST`
- **Descrição**: Endpoint para cadastrar um novo veículo no sistema.

#### Parâmetros da Requisição

- **Content-Type**: `application/json`
- **Body**: Um objeto JSON contendo os dados do veículo.

#### Tipos
- placa: string
- modelo: string
- marca: string
- ano: string
- idCliente: integer

#### Exemplo de Requisição

```
POST http://localhost:8080/veiculo
Content-Type: application/json

{
    "placa": "ABC-1234",
    "modelo": "Civic",
    "marca": "Honda",
    "ano": "2020",
    "idCliente": 1
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400

### 7. Buscar Veículo por Placa

- **URL**: `http://localhost:8080/veiculo/{placa}`
- **Método**: `GET`
- **Descrição**: Endpoint para buscar os dados de um veículo específico pelo número da placa.

#### Parâmetros da Requisição

- **URL Params**: `{placa}` - Placa do veículo a ser buscado.

#### Tipos
- placa: string

#### Exemplo de Requisição

```
GET http://localhost:8080/veiculo/ABC1234
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400, 404

### 8. Atualizar Dados do Veículo

- **URL**: `http://localhost:8080/veiculo/{placa}`
- **Método**: `PUT`
- **Descrição**: Endpoint para atualizar os dados de um veículo específico pelo número da placa.

#### Parâmetros da Requisição

- **URL Params**: `{placa}` - Placa do veículo a ser atualizado.
- **Content-Type**: `application/json`
- **Body**: Um objeto JSON com os dados atualizados do veículo.

#### Tipos
- modelo: string
- marca: string
- ano: string
- idCliente: integer

#### Exemplo de Requisição

```
PUT http://localhost:8080/veiculo/ABC1234
Content-Type: application/json

{
    "modelo": "Civic",
    "marca": "Honda",
    "ano": "2021",
    "idCliente": 1
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404

### 9. Deletar Veículo

- **URL**: `http://localhost:8080/veiculo/{placa}`
- **Método**: `DELETE`
- **Descrição**: Endpoint para deletar um veículo específico do sistema pelo número da placa.

#### Parâmetros da Requisição

- **URL Params**: `{placa}` - Placa do veículo a ser deletado.

#### Exemplo de Requisição

```
DELETE http://localhost:8080/veiculo/ABC1234
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404


### 10. Cadastro de Centro Automotivo

- **URL**: `http://localhost:8080/oficina`
- **Método**: `POST`
- **Descrição**: Endpoint para cadastrar um novo centro automotivo no sistema.

#### Parâmetros da Requisição

- **Content-Type**: `application/json`
- **Body**: Um objeto JSON contendo os dados do centro automotivo.

#### Tipos
- nome: string
- email: string
- cnpj: string
- telefone: string
- endereco: string

#### Exemplo de Requisição

```
POST http://localhost:8080/oficina
Content-Type: application/json

{
    "nome": "Oficina do João",
    "email": "contato@oficinadojoao.com",
    "cnpj": "12.345.678/0001-90",
    "telefone": "(11) 98765-4321",
    "endereco": "Rua das Oficinas, 123"
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400

### 11. Buscar Oficina por Email

- **URL**: `http://localhost:8080/oficina/{email}`
- **Método**: `GET`
- **Descrição**: Endpoint para buscar os dados de uma oficina específica pelo email.

#### Parâmetros da Requisição

- **URL Params**: `{email}` - Email da oficina a ser buscada.

#### Tipos
- email: string

#### Exemplo de Requisição

```
GET http://localhost:8080/oficina/oficina@email.com
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404

### 12. Atualizar Dados da Oficina

- **URL**: `http://localhost:8080/oficina/{email}`
- **Método**: `PUT`
- **Descrição**: Endpoint para atualizar os dados de uma oficina específica pelo email.

#### Parâmetros da Requisição

- **URL Params**: `{email}` - Email da oficina a ser atualizada.
- **Content-Type**: `application/json`
- **Body**: Um objeto JSON com os dados atualizados da oficina.

#### Tipos
- nome: string
- endereco: string
- telefone: string
- cnpj: string
- email: string

#### Exemplo de Requisição

```
PUT http://localhost:8080/oficina/oficina@email.com
Content-Type: application/json

{
    "nome": "Oficina Atualizada",
    "endereco": "Rua Nova, 123",
    "telefone": "(11) 91234-5678",
    "cnpj": "12345678000190",
    "email": "oficina@email.com"
}
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 400, 404

### 13. Deletar Oficina

- **URL**: `http://localhost:8080/oficina/{email}`
- **Método**: `DELETE`
- **Descrição**: Endpoint para deletar uma oficina específica do sistema pelo email.

#### Parâmetros da Requisição

- **URL Params**: `{email}` - Email da oficina a ser deletada.

#### Exemplo de Requisição

```
DELETE http://localhost:8080/oficina/oficina@email.com
```
- Retorno esperado em caso de sucesso: 200
- Retorno esperado em caso de erro: 404
