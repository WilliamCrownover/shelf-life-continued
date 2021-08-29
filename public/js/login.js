
const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("loginbtn clicked")
 
 

  // TODO: Add a comment describing the functionality of these expressions
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/pantry');
      
   
      
    } else {
      alert('Failed to log in. Please make sure information is correct, and try again.');
    }
  }
};

document
  .querySelector('.loginForm')
  .addEventListener('submit', loginFormHandler);
//-------------------------------------------------------------s



