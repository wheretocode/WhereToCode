// TODO: https://firebase.google.com/docs/auth/admin/verify-id-tokens
// TODO: use third party package to verify token

import { withFirebase } from "../../../client/src/Firebase";

function authenticateMiddleware (req,res,next){
    const token = req.headers.authorization
        console.log(token)
    if (token){
        this.props.firebase.doVerifyIdToken(eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwYjQwY2NjYmQ0OWQxNmVkMjg2MGRiNzIyNmQ3NDZiNmZhZmRmYzAiLCJ0eXAiOiJKV1QifQ)
    }
}

const authenticate = compose(
    withFirebase
)(authenticateMiddleware)

module.exports = authenticate