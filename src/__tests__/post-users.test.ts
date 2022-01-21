import App from "../index";
import * as request from "supertest";

describe("/users", () => {

  afterAll((done) => {
    if (App) {
      App.close(done);
    }
  });

  it("POST API Request", async () => {
    const user = {
      firstName: 'David',
      lastName: 'Ross',
      email: 'david@gmail.com',
      phoneNumber: 24124124,
    }
    const result = await request(App).post("/users")
      .send(user);
    expect(user).toHaveProperty("firstName");
    expect(user).toHaveProperty("lastName");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("phoneNumber");
    expect(result.statusCode).toEqual(200);
  });
});