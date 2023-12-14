import express from "express";

const routes = express.Router();

routes.post("/certifications", async (req, res) => {
  // Chamar microserviço
  await producer.send({
    topic: "issue-certificate",
    messages: [
      {
        user: { id: 1, name: "Diego Fernandes" },
        course: "Kafka com Node.js",
        grade: 5,
      },
    ],
  });

  console.log(req.producer);

  return res.json({ ok: true });
});

export default routes;
