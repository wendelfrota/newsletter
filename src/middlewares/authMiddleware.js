function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        res.redirect('/login');
    }
}

function isAlreadyAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return res.redirect('/');
    } else {
        return next();
    }
}

module.exports = { isAuthenticated, isAlreadyAuthenticated }