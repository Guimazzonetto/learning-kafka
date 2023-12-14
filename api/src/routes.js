import express from "express";

const routes = express.Router();

routes.post("/certifications", async (req, res) => {
  // Chamar microserviço

  return res.json({ ok: true });
});

export default routes;