//sign up
const signupFormHandler = async (event) => {
    console.log("sign up Btn")
    event.preventDefault();
  
    const name = document.querySelector('#nameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/pantry');
      } else {
        alert("Failed to Create Account! Please make sure the information is correct. "+response.statusText);
      }
    }
  };
  document
  .querySelector('.signupForm')
  .addEventListener('submit', signupFormHandler);
