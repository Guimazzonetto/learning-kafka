import express from "express";
import { Kafka } from "kafkajs";

import routes from "./routes.js";

const app = express();

/*
  Faz conexão com o Kafka
*/
const kafka = new Kafka({
  clientId: "api",
  brokers: ["localhost: 9092"], // Nome do serviço do Kafka no docker e porta
});

const producer = kafka.producer();

/*
  Disponibiliza o producar para todas rotas
*/
app.use((req, res, next) => {
  req.producer = producer;

  return next;
});

/*
  Cadastra as rotas da aplicação
*/
app.use(routes);

async function run() {
  await producer.connect();

  app.listen(3333);
}

run().catch(console.error);