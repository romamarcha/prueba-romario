describe("contratacion", () => {
  it("tests contratacion", () => {
    //Integración test de login
    cy.viewport(910, 729);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("b").click();

    //Integración log y credenciales
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.get("li:nth-of-type(5) span").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
    );
    cy.get("d").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
    );
    cy.get("div.--name-grouped-field > div:nth-of-type(1) input").click();
    cy.get("div.--name-grouped-field > div:nth-of-type(1) input").type("Oscar");
    cy.get("div.--name-grouped-field > div:nth-of-type(2) input").click();
    cy.get("div.--name-grouped-field > div:nth-of-type(2) input").type("A");
    cy.get("div.--name-grouped-field > div:nth-of-type(2) input").type(
      "Andres"
    );
    cy.get("form > div:nth-of-type(1) div:nth-of-type(3) input").click();
    cy.get("form > div:nth-of-type(1) div:nth-of-type(3) input").type("R");
    cy.get("form > div:nth-of-type(1) div:nth-of-type(3) input").type("Roa");
    cy.get(
      "form > div:nth-of-type(2) > div > div div:nth-of-type(2) > div > div"
    ).click();
    cy.get("div:nth-of-type(3) > div > div:nth-of-type(1) input").click();
    cy.get("div:nth-of-type(3) > div > div:nth-of-type(1) input").type(
      "Oscar@"
    );
    cy.get("div:nth-of-type(3) > div > div:nth-of-type(1) input").type(
      "Oscar@gmail.com"
    );
    cy.get("div:nth-of-type(3) > div > div:nth-of-type(2) input").click();
    cy.get("div:nth-of-type(3) > div > div:nth-of-type(2) input").type(
      "772420"
    );
    cy.get("button.oxd-button--secondary").click();

    //Validación de contratación

    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/118"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=118&selectedAction=2"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=118&selectedAction=2"
    );
    cy.get("div:nth-of-type(3) input").click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
    );
    cy.get("div.--name-grouped-field > div:nth-of-type(1) input").click();
    cy.get("form > div:nth-of-type(2) i").click();
    cy.get("button.oxd-button--secondary").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/121"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=121&selectedAction=2"
    );
    cy.get("button.oxd-button--secondary").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/121"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=121&selectedAction=4"
    );

    //Finalización de integración, contratado
    cy.get(
      "form > div:nth-of-type(2) > div > div:nth-of-type(1) input"
    ).click();
    cy.get("form > div:nth-of-type(2) > div > div:nth-of-type(1) input").type(
      "view"
    );
    cy.get(
      "form > div:nth-of-type(2) > div > div:nth-of-type(2) input"
    ).click();
    cy.get("form > div:nth-of-type(2) > div > div:nth-of-type(2) input").type(
      "1"
    );
    cy.get("div.oxd-layout-container div:nth-of-type(3) i").click();
    cy.get("div.--offset-6 > div").click();
    cy.get("div:nth-of-type(4) i").click();
    cy.get(
      "form > div:nth-of-type(2) div:nth-of-type(4) div:nth-of-type(2) > input"
    ).click();
    cy.get("form > div:nth-of-type(2) > div").click();
    cy.get("button.oxd-button--secondary").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/121"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=121&selectedAction=5"
    );
    cy.get("button:nth-of-type(3)").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=121&selectedAction=7"
    );
    cy.get("button.oxd-button--secondary").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/121"
    );
    cy.get("button.oxd-button--success").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=121&selectedAction=9"
    );
    cy.get("button.oxd-button--secondary").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/121"
    );
    cy.get("li:nth-of-type(5) span").click();
    cy.location("href").should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
    );
  });
});
