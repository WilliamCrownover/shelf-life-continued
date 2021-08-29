const delButtonHandler = async ( event ) => {

	const id = event.target.getAttribute( 'data-id' );

	const response = await fetch( `/api/product/${id}`, {
		method: 'DELETE',
	} );

	if ( response.ok ) {
		document.location.replace( '/pantry' );
	} else {
		alert( 'Failed' );
	}
};

const elements = document.getElementsByClassName( 'deleteX' );

for ( let i = 0; i < elements.length; i++ ) {
	elements[i].addEventListener( 'click', delButtonHandler, false );
}