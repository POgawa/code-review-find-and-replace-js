describe('findAndReplace', function() {

  it("Finds a word in a string and replaces it with another word.", function() {
    expect(findAndReplace("This, is a string", "string", "test")).to.equal("This is a test");
  });

});
