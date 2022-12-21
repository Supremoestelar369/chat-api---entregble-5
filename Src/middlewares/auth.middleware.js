const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const passport = require('passport')

const jwtSecret = require('../../config').api.jwtSecret
const { findUserById } = require('../users/users.controllers')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}


passport.use(
    new JwtStrategy(options, (tokenDecoded, done) => {
        findUserById(tokenDecoded.id)
            .then((user) => {
                if(user){
                    done(null, tokenDecoded)   //?   Successful case, because the user does exist.
                } else {
                    done(null, false)         //?    Failed case, in which no error is generated, but the user does not exist.
                }
            })
            .catch((err) => {
                done(err, false)              //?   Failed case, in which if an error is generated
            })
    })
)

module.exports = passport
