import './index.css';

import { getUsers } from './api/userApi';

import numeral from 'numeral';

// some sample "running in the browser code"
const courseValue = numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this awesome starter kit`);

// so this is code running in the browser, making getUsers() call in the userApi.js
// which turns around and uses fetch to make the http call.
getUsers().then(function(result) {
    var usersBody = "";

    result.forEach(function(user) {
        usersBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
    });
    global.document.getElementById('users').innerHTML = usersBody;
});