const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const verifyGoogleToken = async (req, res, next) => {
    const idToken = req.body.id_token;
    const response = await client.verifyIdToken({idToken, audience: process.env.CLIENT_ID});
    const payload = response.getPayload();
    const userId = payload['sub'];
    if(payload.sub) {
        req.body.email = payload.email
        req.body.name = payload.given_name
        req.body.last_name = payload.family_name
        next();
    }else return res.status(403);    
}

module.exports = verifyGoogleToken