# APRENDENDO KAFKA COM O ROCKETSEAT


## Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node.

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo de aplicação

- API principal envia uma mensagem para o serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **kafka**;



# COMANDOS DOCKER

## Listrnado os tópicos no DOCKER:

- docker-compose ps

## Executando kafka no docker (caso zookeeper alterar parâmetro):

- docker exec -it learning_kafka-kafka-1 /bin/bash

## Listando tópicos no Kafka:

- kafka-topics.sh --list --zookeeper zookeeper:2181

## Mandando mensagem producer:

- kafka-console-producer.sh --broker-list localhost:9092 --topic issue-certificate

## Recebendo mensagem consumer:

- kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic issue-certificate