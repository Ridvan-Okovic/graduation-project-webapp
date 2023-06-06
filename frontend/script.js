function login(event) {
  event.preventDefault();
  const username = document.getElementById('username-input').value;
  const password = document.getElementById('password-input').value;

  fetch(`http://localhost:3000/login?username=${username}&password=${password}`)
    .then((response) => {
      if (response.ok) {
        // Redirect to home page if login is successful
        window.location.href = 'http://127.0.0.1:5500/frontend/home.html';
      } else {
        // Display error message if login fails
        response.json().then((data) => {
          alert(data.message);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
