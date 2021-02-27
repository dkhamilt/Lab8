describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
        expect($el).to.have.value(75);
    });
  });

  it('Reverse', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
        expect($el).to.have.value(33);
    });
  });

  it('Volume <audio> change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
        expect($el).to.have.prop('volume',0.33);
    });
  });

  it('Image/sound sources change party radio', () =>{
      cy.get('#radio-party-horn').click();
      cy.get('#sound-image').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      });
      cy.get('#horn-sound').then(($el) => {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });
  
  it('Volume icon changes increased volume', () =>{
    cy.get('#volume-slider').invoke('val', 0);

    cy.get('#volume-slider').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });

    cy.get('#volume-slider').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });

    cy.get('#volume-slider').invoke('val', 67).trigger('input');
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Disable button', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
        expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('Test invalid');
    cy.get('#honk-btn').then(($el) => {
        expect($el).to.have.attr('disabled');
    });
  });
  
  it('Error number outside range', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#honk-btn').click();
    cy.get('input:invalid').should('have.length', 1);
  });
  
});
