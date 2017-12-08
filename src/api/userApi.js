import 'whatwg-fetch';

export function getUsers() {
    // pass in the url u want to get
    return get('users');
}

function get(url) {
    // makes the http call caught by express routing table
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disble-line no-console
}