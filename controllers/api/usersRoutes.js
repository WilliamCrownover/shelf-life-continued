// api/users

const router = require( 'express' ).Router();
const { User, Product, Category } = require( '../../models' );

// get user data
router.get( '/', async ( req, res ) => {
	try {
		const userData = await User.findAll( {
			include: [{ model: Product,
				include: [{ model: Category }] }],
			attributes: { exclude: ['password'] },
			order: [['name', 'ASC']],
		} );

		res.json( userData );

	} catch ( err ) {
		res.status( 500 ).json( err );
	}
} );

// get one user's pantry
router.get( '/:id', async ( req, res ) => {
	try {
		const userPantryData = await User.findByPk( req.params.id, {
			include: [{ model: Product,
				include: [{ model: Category }], }],
			attributes: {
				exclude: ['password']
			},
			order: [[ Product, 'expiration_date', 'ASC' ]]
		} );

		res.json( userPantryData );

	} catch ( err ) {
		res.status( 500 ).json( err );
	}
} );

// create new user
router.post( '/', async ( req, res ) => {
	try {
		const userData = await User.create( req.body );

		req.session.save( () => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.status( 200 ).json( userData );
		} );

	} catch ( err ) {
		res.status( 400 ).json( err );
	}
} );

router.post( '/login', async ( req, res ) => {
	try {
		const userData = await User.findOne( { where: { email: req.body.email } } );

		if ( !userData ) {
			res
				.status( 400 )
				.json( { message: 'Incorrect email or password, please try again' } );

			return;
		}

		const validPassword = await userData.checkPassword( req.body.password );

		if ( !validPassword ) {
			res
				.status( 400 )
				.json( { message: 'Incorrect email or password, please try again' } );

			return;
		}

		req.session.save( () => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json( { user: userData,
				message: 'You are now logged in!' } );
		} );

	} catch ( err ) {
		res.status( 400 ).json( err );
	}
} );

router.post( '/logout', ( req, res ) => {
	if ( req.session.logged_in ) {
		req.session.destroy( () => {
			res.status( 204 ).end();
		} );
	} else {
		res.status( 404 ).end();
	}
} );

module.exports = router;