export default function getBaseUrl() {
    // mockAPI hits jsonServer which generates random data every time based on the schema we have specified
    // the jsonServer has been configured for port 3001
    // when using "real" data, we are hitting / which is hosted by express on my local machine
    //return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';

    // after I have migrated the backend to heroku, use this instead.
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://enigmatic-caverns-55214.herokuapp.com/';
}


/* eslint-disable no-useless-escape */

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}