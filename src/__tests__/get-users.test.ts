import App from "../index";
import * as request from "supertest";

describe("/users", () => {

  afterAll((done) => {
    if (App) {
      App.close(done);
    }
  });

  it("GET API Request", async () => {
    const result = await request(App).get("/users");
    expect(result.statusCode).toEqual(200);
  });

});