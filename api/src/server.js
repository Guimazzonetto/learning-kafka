import express from "express";
import { Kafka } from "kafkajs";

import routes from "./routes.js"

const app = express();

const kafka = new Kafka({
  clientId: "api",
  brokers: ["kafka: 9092"], // Nome do serviço do Kafka no docker e porta
});

app.use(routes);

async function run() {
  // await producer.connect();

  app.listen(3333);
}

run().catch(console.error);

const producer = kafka.producer();
