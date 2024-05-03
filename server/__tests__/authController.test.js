const request = require("supertest");
const app = require("../server.js");
const mongoose = require("../node_modules/mongoose");
// const { MongoMemoryServer } = require("../node_modules/mongodb-memory-server");
const User = require("../../database/model/user.model.js");
// let mongoServer;
// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const mongoUri = mongoServer.getUri();
//   await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
// });

// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });
beforeAll(async () => {
  await User.deleteMany({});
});
describe("Auth Controller", () => {
  describe("Log In", () => {
    it("should sign in a registered user", async () => {
      const testUser = new User({
        email: "test@example.com",
        password: "password",
        username: "testuser",
      });
      await testUser.save();

      const response = await request(app)
        .post("/auth/signin")
        .send({ email: "test@example.com", password: "password" })
        .set("Content-Type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(response.body.username).toBe("testuser");
      expect(response.body.email).toBe("test@example.com");
    });

    it("should return 400 for invalid email", async () => {
      const response = await request(app)
        .post("/auth/signin")
        .send({ email: "invalid@example.com", password: "password" })
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("email does not exist");
    });
    it("should return 400 for invalid password", async () => {
      const testUser = new User({
        email: "test@example.com",
        password: "password",
        username: "testuser",
      });
      await testUser.save();

      const response = await request(app)
        .post("/auth/signin")
        .send({ email: "test@example.com", password: "wrongpassword" })
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("password does not match");
    });
  });
  describe("Registration", () => {
    it("should return 400 if username is not provided", async () => {
      const user = {
        email: "test@example.com",
        password: "password",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("username is required");
    });

    it("should return 400 if email is not provided", async () => {
      const user = {
        username: "testuser",
        password: "password",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("email is required");
    });

    it("should return 400 if email is invalid", async () => {
      const user = {
        email: "invalid-email",
        password: "password",
        username: "testuser",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid Email ID");
    });

    it("should return 400 if password is not provided", async () => {
      const user = {
        email: "test@example.com",
        username: "testuser",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("Enter valid password");
    });

    it("should return 400 if password is too short", async () => {
      const user = {
        email: "test@example.com",
        password: "pass",
        username: "testuser",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("Enter valid password");
    });

    it("should return 400 if user already exists", async () => {
      const existingUser = new User({
        email: "test@example.com",
        password: "password",
        username: "testuser",
      });
      await existingUser.save();

      const user = {
        email: "test@example.com",
        password: "password",
        username: "testuser",
      };

      const response = await request(app)
        .post("/auth/register")
        .send(user)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(400);
      expect(response.text).toBe("Account exists with that email ID.");
    });
  });
});
