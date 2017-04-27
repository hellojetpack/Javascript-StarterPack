import { getUsers, deleteUser } from './api/usersApi';
import './index.css';

getUsers().then((result) => {
  let userBody = '<h1>Sample fetch request</h1>';

  result.forEach((user) => {
    userBody += `<div>
    <a href="#" data-id="${user.id}" class="deleteUser">Delete</a>
    <p>first name: ${user.firstName}</p>
    <p>last name: ${user.lastName}<p>
    <p>email: ${user.email}
    </div>`;
  });

  global.document.getElementById('users').innerHTML = userBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from dom collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks).forEach((x) => {
    const link = x;
    link.onclick = (event) => {
      event.preventDefault();
      const element = event.target;
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode;
      row.parentNode.removeChild(row);
      console.log('pushed');
    };
  });
});
