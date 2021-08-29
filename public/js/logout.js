  // Handle logging out the user
  const logout = async () => {
    console.log("logout btn")
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText, " failed to logout");
    }
  };
  
  // Listen for the logout click
  document.querySelector('#logoutBtn').addEventListener('click', logout);