const jwt = require("jsonwebtoken");
const preKey = require("../constants");

const verifyToken = (req, res, next) => {
	const { authorization } = req.headers;
	console.log(req.headers);
	if (authorization === undefined) {
		res.status(400).json({
			success: false,
			message: "ERROR: Invalid Token",
		});
		return;
	}

	const [, token] = authorization.split(" ");
	try {
		const payload = jwt.verify(token, preKey);
		req.auth = payload;
		next();
	} catch (error) {
		res.status(403).json({
			message: "ERROR: Invalid token",
			status:403,
			data: error,
		});
	}
};

module.exports = verifyToken;