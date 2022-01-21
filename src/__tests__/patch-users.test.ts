import App from "../index";
import * as request from "supertest";

describe("/users", () => {

  afterAll((done) => {
    if (App) {
      App.close(done);
    }
  });

  it("PATCH API Request", async () => {
    const user = {
      id: 13,
      firstName: 'David',
      lastName: 'Ross',
      email: 'david@gmail.com',
      phoneNumber: 24124124,
    }
    const result = await request(App).patch("/users")
      .query(user)
    expect(result.statusCode).toEqual(200);
  });
});