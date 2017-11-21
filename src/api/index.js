require('es6-promise').polyfill();
require('isomorphic-fetch');

export const BASE_URL = 'https://world.openfoodfacts.org';
export const BASE_FETCH_PARAMS = {
    /*
    credentials: 'include',
    headers: {
        Authorization: `Basic ${btoa('off:off')}`,
    },
    */
};
export const USER_ID = '';
export const PASSWORD = '';

function _fetchFromOFFApi(filters) {
    let url = BASE_URL;
    filters.forEach((filter) => {
        url += `/${filter}`;
    });

    return fetch(`${url}.json`, BASE_FETCH_PARAMS);
}

function _sendToOFFApi(barcode, fields) {
    let url = `${BASE_URL}/cgi/product_jqmp2.pl?code=${barcode}&user_id=${USER_ID}&password=${PASSWORD}`;
    Object.keys(fields).forEach((field) => {
        url += `&${field}=${fields[field]}`;
    });
    return fetch(url, BASE_FETCH_PARAMS);
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


function updateCategories(productId, categories) {
    return _sendToOFFApi(productId, {
        categories: categories.join(','),
    });
}


function missingBrands() {
    return _fetchFromOFFApi(['state/brands-to-be-completed'])
        .then(response => response.json())
        .then(response => response.products.map(product => ({
            id: product.id,
            name: product.product_name,
            icon: product.image_front_url,
        })))
        .catch(exc => console.error(`Unable to fetch products with missing brands: ${exc}.`));
}


function missingProductName() {
    return _fetchFromOFFApi(['state/product-name-to-be-completed'])
        .then(response => response.json())
        .then(response => response.products.map(product => ({
            id: product.id,
            brands: product.brands,
            icon: product.image_front_url,
        })))
        .catch(exc => console.error(`Unable to fetch products with missing product name: ${exc}.`));
}


export { missingBrands, missingCategories, updateCategories, missingProductName };
