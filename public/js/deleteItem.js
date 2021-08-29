console.log("delete page loads");

const delButtonHandler = async (event) => {
  console.log("delete BTN")
  
      const id = event.target.getAttribute('data-id');
    console.log(id)
      const response = await fetch(`/api/product/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/pantry');
      } else {
        alert('Failed');
      }
    
  };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/products/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/pantry');
//     } else {
//       alert('Failed ');
//     }
//   }
// };
const elements = document.getElementsByClassName("deleteX");

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', delButtonHandler, false);
}
    // .getElementsByClassName('.deleteX')
    // .addEventListener('click', delButtonHandler)