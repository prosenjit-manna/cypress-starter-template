export function login() {
  it("Login", () => {
    cy.visit("/web/index.php/auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.contains("Dashboard");
  });
}
