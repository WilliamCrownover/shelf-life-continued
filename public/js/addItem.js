const addItem = async (event) => {
    console.log("addItembtn")
    event.preventDefault();

    const product_name = document.querySelector('#itemName').value.trim();
    const category_id = document.querySelector('#itemCategory').value.trim();
    const date_purchased = document.querySelector('#purchaseDate').value.trim();
    const expiration_date = document.querySelector('#expirationDate').value.trim();
    console.log("name" + product_name);
    console.log("category" +  category_id);
    console.log("date_p" + date_purchased);
    console.log("exp date" + expiration_date);


    if (product_name && category_id && date_purchased && expiration_date) {
        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify({product_name, category_id ,date_purchased, expiration_date}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/addItems');    
           
        } else {
            alert('Failed to add Item.');
        }
    } else if (product_name && category_id && expiration_date) {
        const response = await fetch('/api/product', {
            method: 'POST',
            body: JSON.stringify({product_name, category_id, expiration_date}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/addItems');
        } else {
            alert('Failed to add Item. Please enter a expiration date.');
        }
    }
};

// Listen for the add item form submission
document
    .querySelector('#addItemBtn')
    .addEventListener('click', addItem)