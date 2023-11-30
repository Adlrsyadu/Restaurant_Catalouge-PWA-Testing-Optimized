import FavoriteRestaurantIdb from '../../data/favorite-idb.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const Like = {
    async render() {
        return `
        <div class="main-content">
            <h2>Restaurant Favoriteku</h2>
            <div class="card-container">
            
            </div>
        </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantsContainer = document.querySelector('.card-container');
        console.log(restaurants);
        
        restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Like;