const { config } = require("../config/secret");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
    let token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ msg: "You need to send token to this endpoint url" });
    }
    try {
        let decodeToken = jwt.verify(token, config.tokenSecret);
        req.tokenData = decodeToken;
        next();
    }
    catch (err) {
        return res.status(401).json({ msg: "Token not valid or expired" })
    }
}

exports.authAdmin = async (req, res, next) => {
    let token = req.header("x-api-key");
    if (!token) {
        return res.status(401).json({ msg: "You need to send token to this endpoint url" });
    }
    try {
        let decodeToken = jwt.verify(token, config.tokenSecret);
        if (decodeToken.role != "admin") {
            return res.status(401).json({ msg: "Token invalid or expired, code: 6A" })
        }
        req.tokenData = decodeToken;
        next();
    }
    catch (err) {
        return res.status(401).json({ msg: "Token not valid or expired log in again or you hacker!" })
    }
}
