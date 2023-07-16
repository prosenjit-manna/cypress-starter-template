import { login } from "lib/page/login-page";

describe("Login", () => {
  login();

  it("Verify Logged in Mode", () => {
    cy.get(".oxd-userdropdown-name").contains("Paul Collings");
  });
});
