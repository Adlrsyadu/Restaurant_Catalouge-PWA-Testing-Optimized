const assert = require('assert');
const { async } = require('regenerator-runtime');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-unused-vars, no-undef
// Scenario('showing empty liked resstaurants', ({ I }) => {
//   I.seeElement('#restaurant-list');
//   I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant-list');
// });

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('liking a restaurant', async ({ I }) => {

  I.amOnPage('/');
  I.seeElement('.restaurant__Title a');
  const firstRestaurant = locate('.restaurant__Title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  // eslint-disable-next-line no-undef
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__Title');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__Title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

 
});

 Scenario('Unliking Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__Title a');
  const firstRestaurant = locate('.restaurant__Title a').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__Title');

  // Langkah untuk membatalkan suka restoran
  I.click('.restaurant__Title a'); // Klik restoran yang telah disukai
  I.seeElement('#likeButton');
  I.click('#likeButton');
});