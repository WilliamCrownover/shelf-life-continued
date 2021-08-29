const { DateTime } = require( 'luxon' );

module.exports = {
	formatDate: ( date ) => {
		// Format date as MM/DD/YYYY
		return date.toLocaleDateString();
	},

	formatSequelDate: ( date ) => {
		return DateTime.fromISO( date ).toFormat( 'M-d-yyyy' );
	},

	expiredCheck: ( date ) => {
		const expiration = DateTime.fromISO( date );
		const today = DateTime.now();

		const dateDifference = ( expiration.diff( today ) ).as( 'days' );

		if ( dateDifference < -1 ) {
			return true;
		}
	},

	weekCheck: ( date ) => {
		const expiration = DateTime.fromISO( date );
		const today = DateTime.now();

		const dateDifference = ( expiration.diff( today ) ).as( 'days' );

		if ( dateDifference >= -1 && dateDifference <= 7 ) {
			return true;
		}
	},

	monthCheck: ( date ) => {
		const expiration = DateTime.fromISO( date );
		const today = DateTime.now();

		const dateDifference = ( expiration.diff( today ) ).as( 'days' );

		if ( dateDifference > 7 && dateDifference <= 30 ) {
			return true;
		}
	},

	noRushCheck: ( date ) => {
		const expiration = DateTime.fromISO( date );
		const today = DateTime.now();

		const dateDifference = ( expiration.diff( today ) ).as( 'days' );

		if ( dateDifference > 30 ) {
			return true;
		}
	}
};