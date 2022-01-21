import App from "../index";
import * as request from "supertest";

describe("/users", () => {

  afterAll((done) => {
    if (App) {
      App.close(done);
    }
  });

  it("DELETE API Request", async () => {
    const user = {
      userId: 7
    }
    const result = await request(App).delete("/users")
    .query(user)
    expect(result.statusCode).toEqual(200);
  });
});