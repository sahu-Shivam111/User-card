let users = [];
let currentIndex = 0;

async function fetchusers() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await result.json();
    display(currentIndex)
  }
  catch (error) {
    document.getElementById('card').innerHTML = '<h2>Failed to load users.</h2>';
    console.error('Fetch Error:', error);
  }
}



function display(index) {
  const user = users[index];
  const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
  const card = document.getElementById('card');
  card.innerHTML = `
        <h2>${user.name}</h2>
        <p><span>ID:</span>${user.id}</p>
        <p><span>Username:</span>${user.username}</p>
        <p><span>Email:</span> ${user.email}</p>
        <p><span>Address:</span> ${address}</p>
      `;

    

  document.getElementById('previous').disabled = index == 0;
  document.getElementById('next').disabled = index == users.length - 1;
}

document.getElementById('previous').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    display(currentIndex);
  }
})

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < users.length - 1) {
    currentIndex++;
    display(currentIndex);
  }
})

fetchusers();