require('es6-promise').polyfill();
require('isomorphic-fetch');

export const BASEURL = 'https://world.openfoodfacts.org/';

function missingCategories() {
    return fetch(
        `${BASEURL}state/categories-to-be-completed.json`,
    )
        .then(response => response.json())
        .then(response => response.products.map(product => ({
            id: product.id,
            name: product.product_name,
            icon: product.image_front_url,
            brands: product.brands,
            predictedCategories: {
                'en:fresh-foods': {
                    name: 'Fresh foods',
                    isOK: true,
                },
                'en:meats': {
                    name: 'Meats',
                    isOK: true,
                },
                'en:prepared-meats': {
                    name: 'Prepared meats',
                    isOK: true,
                },
                'en:hams': {
                    name: 'Hams',
                    isOK: true,
                },
                'fr:charcuteries-crues': {
                    name: 'Charcuteries crues',
                    isOK: true,
                },
                'en:beverages': {
                    name: 'Beverages',
                    isOK: true,
                },
            },
        })))
        .catch(exc => console.error(`Unable to fetch products with missing categories: ${exc}.`));
}

export { missingCategories };
