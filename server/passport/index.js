const passport = require('passport')
const LocalStrategy = require('./local.strategy')
const User = require('../models/user.model')

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	console.log('Deserialize ... called')
	User.findOne(
		{ _id: id },
		'firstName lastName local.email',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy);

module.exports = passport
