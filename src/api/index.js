require('es6-promise').polyfill();
require('isomorphic-fetch');

export const BASEURL = 'https://world.openfoodfacts.org/';

function _fetchFromOFFApi(filters) {
    let url = BASEURL;
    filters.forEach((filter) => {
        url += `/${filter}`;
    });

    return fetch(`${url}.json`);
}

function missingCategories() {
    return _fetchFromOFFApi([
        'state/product-name-completed',
        'state/brands-completed',
        'state/photos-validated',
        'state/categories-to-be-completed',
    ])
        // Parse JSON
        .then(response => response.json())
        // Keep only useful data
        .then(response => response.products.map(product => ({
            id: product.id,
            name: product.product_name,
            icon: product.image_front_url,
            brands: product.brands,
        })))
        // Predict categories
        .then(response => fetch(
            'http://localhost:4242/predict',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(response),
            },
        ))
        // Parse JSON
        .then(response => response.json())
        // Parse data, strip products without any predicted category
        .then(response => response.data.filter(
            product => product.predictedCategories.length > 0),
        )
        // Augment predicted categories data
        .then(response => response.map(
            (product) => {
                const augmentedProduct = product;
                augmentedProduct.predictedCategories = product.predictedCategories.map(
                    category => ({ name: category, isOk: false }),
                );
                return augmentedProduct;
            },
        ))
        .catch(exc => console.error(`Unable to fetch products with missing categories: ${exc}.`));
}


function missingBrands() {
    return fetch(`${BASEURL}state/brands-to-be-completed.json`)
        .then(response => response.json())
        .then(response => response.products.map(product => ({
            id: product.id,
            name: product.product_name,
            icon: product.image_front_url,
        })))
        .catch(exc => console.error(`Unable to fetch products with missing brands: ${exc}.`));
}


function missingProductName() {
    return fetch(`${BASEURL}state/product-name-to-be-completed.json`)
        .then(response => response.json())
        .then(response => response.products.map(product => ({
            id: product.id,
            brands: product.brands,
            icon: product.image_front_url,
        })))
        .catch(exc => console.error(`Unable to fetch products with missing product name: ${exc}.`));
}


export { missingBrands, missingCategories, missingProductName };
