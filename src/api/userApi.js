/* this is a polyfill package for fetch functionality if the user browser 
doesnt support it. Instead of sending it to all browsers, I am using polyfill.io in the HTML to figure 
it out dynamically depending on the browser feature set.
*/
//import 'whatwg-fetch';

import getBaseUrl from './baseUrl';
const baseUrl = getBaseUrl();

export function getUsers() {
    // pass in the url u want to get
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

function get(url) {
    /* based on the envieonment, the url changes. In a dev environment, we are using
    fake data from json-server.  So this can go to Express for real data, or JSON Server
    for fake data
    */
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);    
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disble-line no-console
}