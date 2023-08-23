const container = document.querySelector('.container');
const loader = document.querySelector('.loader');

const getData = async () => {
  const response = await fetch('https://dummyjson.com/users');
  const details = await response.json();

  return details;
};

const createTable = async () => {
  const details = await getData();

  details.users.map((el) => {
    container.innerHTML += `
    <div class="block">
        <h2>${el.firstName} ${el.lastName}</h2>
        <p>age: ${el.age}</p>
        <p>gender: ${el.gender}</p>
        <p>email: ${el.email}</p>
        <p>phone: ${el.phone}</p>
        <img src="${el.image}" alt="image" />
  </div>`;
  });
};

createTable();

document.body.style.overflow = 'hidden';

setTimeout(() => {
  document.body.style.overflow = 'auto';
  loader.remove();
}, 2000);
