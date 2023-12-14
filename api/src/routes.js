import express from "express";

const routes = express.Router();

routes.post("/certifications", async (req, res) => {
  const message = {
    user: {
      id: 1,
      name: "Diego Fernandes",
    },
    course: "Kafka com Node.js",
    grade: 5,
  };

  // Chamar microserviço
  await req.producer.send({
    topic: "issue-certificate",
    messages: [{ value: JSON.stringify(message) }],
  });

  console.log(req.producer);

  return res.json({ ok: true });
});

export default routes;
