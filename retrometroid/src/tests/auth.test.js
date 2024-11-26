import request from "supertest";
import App from "../App";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "retrometroid/backend/models/User"; // Assurez-vous que le modèle User est correctement importé

import { createRoot } from "react-dom/client";

let mongoServer;

beforeEach(() => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);
});

afterEach(() => {
  const root = document.getElementById("root");
  if (root) {
    root.remove();
  }
});

test("renders without crashing", () => {
  createRoot(document.getElementById("root")).render(<App />);
  // Ajoutez vos assertions pour tester l'application ici
});

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Auth", () => {
  test("POST /register - success registration", async () => {
    const response = await request(App)
      .post("/register")
      .send({ email: "at@gmail.com", password: "test123" });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe("at@gmail.com");
    expect(response.body.passwcord).toBeUndefined(); // Assurez-vous que le mot de passe n'est pas renvoyé
  });

  test("POST /register - error registration", async () => {
    const response = await request(App)
      .post("/register")
      .send({ email: "at@gmail.com", password: "" });

    expect(response.statusCode).toBe(400); // Assurez-vous que le code de statut est correct pour une erreur
    expect(response.body.message).toBeDefined(); // Vérifiez que le message d'erreur est renvoyé
  });

  test("POST /login - authentication", async () => {
    // Créez d'abord un utilisateur pour tester la connexion
    await User.create({ email: "at@gmail.com", password: "test123" });

    const response = await request(App)
      .post("/login")
      .send({ email: "at@gmail.com", password: "test123" });

    expect(response.statusCode).toBe(200);
    expect(response.body.email).toBe("at@gmail.com");
    expect(response.body.password).toBeUndefined(); // Assurez-vous que le mot de passe n'est pas renvoyé
  });
});
