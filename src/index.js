import './index.css';

import { getUsers, deleteUser } from './api/userApi';

import numeral from 'numeral';

// some sample "running in the browser code"
const courseValue = numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this awesome starter kit`);

// so this is code running in the browser, making getUsers() call in the userApi.js
// which turns around and uses fetch to make the http call.
getUsers().then(function(result) {
    var usersBody = "";

    result.forEach(function(user) {
		// adding deleteUser class here so that it can be searched for afterwards
        usersBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.firstName}</td>
		<td>${user.lastName}</td>
		<td>${user.email}</td>
		</tr>`
    });
	global.document.getElementById('users').innerHTML = usersBody;
	
	HookupDeleteLinks();
});

function HookupDeleteLinks() {
	const deleteLinks = global.document.getElementsByClassName('deleteUser');

	// must use Array.from since DOM array is not a true array
	//(Array.from(deleteLinks)).forEach(function(link) {
	Array.from(deleteLinks, link => {
		// attach click handler to each button
		link.onclick = function(event) {
			const element = event.target;
			event.preventDefault();
			// call to server to delete the user
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		}
	}); 
}