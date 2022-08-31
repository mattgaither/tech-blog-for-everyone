async function logout() {
  const response = await fetch('/api/users/logout', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      alert('You have successfully logged out - come back soon!')
      document.location.replace('/');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);