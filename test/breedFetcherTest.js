const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //Compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error if breed is invalid', (done) => {
    fetchBreedDescription('Cutie', (err, desc) => {
      //We expect an error in this scenario
      assert(err);
      //Compare with expected error message
      assert.equal(undefined, desc);

      done();
    });
  });
});
