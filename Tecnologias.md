# Tecnologias Utilizadas no Desafio:

- Nestjs
- Yarn
- Multer
- Mongoose
- Axios
- Swagger
- Sharp

## Banco de Dados:

- MongoDB

## Apis Utilizadas

- REST API
- Postman

## Para rodar a API:

- Olhar no .env de exemplo
- MONGO_URL=Url do mongodb
- APP_PORT=Porta da aplicação

## Parametros para A requisção Postman e Swagger:

### SUCESSO

STATUS: `Padrão de status http`
URL: `${BASE_URL}/imagem/upload`
METHOD: `POST`
BODY:

```
{
    "localPath": {
        "original": "uploads/original.jpg",
        "thumbnail": "uploads/resized_thumb.jpg"
    },
    "metadata": {
        "type":  "Buffer"
        "data":[
            number
        ]
    }

}
```

### FALHA

STATUS: `Padrão de status http`

```
{
    errors: [
        {
            "code": 404,
            "message": "Não foi possível salvar esta imagem"
        }
    ]
}
```
