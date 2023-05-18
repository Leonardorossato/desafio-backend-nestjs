# Desafio Back-end Developer

## Objetivo

Desenvolver uma API Rest com um único end-point utilizando o framework NestJS e MongoDB. Realizar a tarefa como descrito a seguir.

## Descrição do recurso

O end-point deve receber uma url pública de uma imagem JPG, deve salvar essa imagem no sistema de arquivos e gerar uma versão reduzida da imagem (acrescentando o sufixo \_thumb ao nome do arquivo), que deve ter sua maior dimensão com 720px e a dimensão menor proporcional. Caso a maior dimensão seja inferior a 720px, apenas uma cópia da imagem original deve ser feita com o sufixo no nome do arquivo. 

A imagem reduzida deve ter compactação e o fator deve ser enviado como parâmentro junto com a url da imagem original.

O serviço deve também registrar numa instância do mongodb, todos os metadados contidos no exif da imagem da imagem original.

## Modelo de requisição

URL: `${BASE_URL}/image/save`
METHOD: `POST`
BODY: 
```
{
    "image": "https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg",
    "compress": 0.9
}
```

## Modelo de resposta

### SUCESSO ###
STATUS: `Padrão de status http`

```
{
    "localpath": {
        "original": "/path/to/original.jpg",
        "thumb": "/path/to/thumb.jpg",
    },
    "metadata": {
        "ALL_EXIF_DATA_KEY": "ALL_EXIF_DATA_VALUE"
    }
}
```

### FALHA ###
STATUS: `Padrão de status http`

```
{
    errors: [
        {
            "code": "YOUR_CODE",
            "message": ""YOUR_MESSAGE
        }
    ]
}
```

## Critérios de aceite

- O projeto deve conter todas as dependências incluídas;
- Todas as informações para executar o projeto devem estar no README.md;
- O projeto deve ser desenvilvido com NestJS e MongoDB;

## Entrega

Basta enviar o link do seu repositórion na Gupy. Não precisa de deploy em qualquer plataforma.

## Avaliação

Desde o entendimento do projeto até os testes. O conhecimento sobre os conceitos do framework, a lógica, estruturação do projeto e a performance da aplicação serão avaliados.
