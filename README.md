Installar dependencias:
    "bluebird": "^3.5.3",
    "body-parser": "^1.18.3",
    "cors": "^2.8.5",
    "dotenv": "^6.2.0",
    "pg-promise": "^8.5.5",
    "sequelize": "^4.42.0"
 
 Instalar devDependencies:  
     "nodemon": "^1.18.10",
     "sequelize-cli": "^5.4.0"
     
 Comandos sequelize:
 
  * node_modules/.bin/sequelize init:
        cria e inicializa o sequelize
  * node_modules/.bin/sequelize db:migrate:
        executa a criação das tabelas de acordo com os migrations.
  
  * node_modules/.bin/sequelize model:create --name <MODEL_NAME> --attributes <KEY> : <VALUE>
        cria os models que são usados no javadcript e os migrations utilizados para criar as tabelas no banco de dados
        

Configurar os arquivos: 
    config.json
    criar a pasta app e colocar a pasta model dentro
    criar a pasta database e colocar a pasta migrations e seeds dentro
    criar o arquivo .env e setar NODE_ENV = 'modo de desenvolvimento ou modo de produção'
                                 DATABASE_URL = 'postgres://<DB_USER>:<DB_PASSWORD>@localhost:5432/<DB_NAME>
    criar o arquivo .sequelizerc e fazer os apontamentos corretos comos os apresentados nesse pojeto                            