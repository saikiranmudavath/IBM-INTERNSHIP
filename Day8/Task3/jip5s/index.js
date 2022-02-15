let info = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    return users;
  });

async function fetchUsers() {
  try {
    let users = await info;
    console.log("Users: ", users);
  } catch (err) {
    console.log(err);
  }
}

fetchUsers();
