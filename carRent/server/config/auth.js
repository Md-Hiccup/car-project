/**
 * Created by hussain on 18/10/17.
 */
module.exports = {
    'googleAuth' : {
        'clientID' : process.env.GOOGLE_CLIENT_ID,
        'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL' : 'http://localhost:3005/auth/google/callback'
    },
    'facebookAuth' : {
        'appID' : process.env.FACEBOOK_APP_ID,
        'appSecret' : process.env.FACEBOOK_APP_SECRET,
        'callbackURL' : 'http://localhost:3005/auth/facebook/callback'
    }
}