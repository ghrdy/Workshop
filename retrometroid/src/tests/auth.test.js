import request from "supertest";
import App from "retrometroid/src/App.jsx";
import db from "retrometroid/backend";

import { createRoot } from "react-dom/client";

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
  // À ce point, l'élément #root existe dans le DOM virtuel
  createRoot(document.getElementById("root")).render(<App />);

  // Ajoutez vos assertions pour tester l'application ici
});

beforeAll(async () => {
  await db.query(
    "CREATE TABLE IF NOT EXISTS admin (email VARCHAR(100), password VARCHAR(100));"
  );
});

afterAll(async () => {
  await db.query("DROP TABLE admin;");
  db.query("END");
});

describe("Auth", () => {
  test("POST /register - success registration", async () => {
    const response = await request(App)
      .post("/register")
      .send({ email: "at@gmail.com", password: "test123" });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe("at@gmail.com");
    expect(response.body.password).toBe("test123");
  });

  test("POST /register - error registration", async () => {
    const response = await request(App)
      .post("/register")
      .send({ email: "at@gmail.com", password: "" });

    expect(response.statusCode).toBe(500);
    expect(response.body.email).toBe("at@gmail.com");
    expect(response.body.password).toBe("");
  });

  test("POST /login - authentication", async () => {
    const response = await request(App)
      .post("/login")
      .send({ email: "at@gmail.com", password: "test123" });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe("at@gmail.com");
    expect(response.body.password).toBe("test123");
  });
});
