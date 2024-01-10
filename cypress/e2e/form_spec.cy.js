describe("Playlist Form", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:8080/api/v1/playlist", {
      statusCode: 200,
      fixture: "playlistData.json"
    })
    cy.visit("http://localhost:3000/");
  })
  it("should have a form with 2 inputs, a button and a header and fill form out and post it", () => {

    cy.get("h1").contains("Playlist")

    cy.get("form")
    .get('input[name="song-name"]')
    .type("Me & U")
    .should("have.value", "Me & U")
    .get('input[name="artist-name"]')
    .type("Tems")
    .should("have.value", "Tems")

    cy.get("form").contains("button", "Submit")
  })

  it("should four song cards with the song name and artist name and delete button", () => {
    cy.get('.songs-container').children().should('have.length', 4)

    cy.get('.songs-container').first().contains('Swear')
    .get('.songs-container').first().contains("Casiopea")
    .get('.songs-container').first().contains("🗑️")

    cy.get('.songs-container').last().contains("Django")
    .get('.songs-container').last().contains("The Modern Jazz Quartet")
    .get('.songs-container').last().contains("🗑️")
  })

  it("should post form input data and show it in the UI", () => {

    cy.intercept("POST", "http://localhost:8080/api/v1/playlist", {
      statusCode: 201,
      fixture: "playlistPost.json"
    });

    cy.get("form")
      .get('input[name="song-name"]')
      .type("Me & U")
      .should("have.value", "Me & U")
      .get('input[name="artist-name"]')
      .type("Tems")
      .should("have.value", "Tems");

    cy.get('button[name="submit-button"]').click()
  })
})