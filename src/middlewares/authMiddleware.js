const REDIRECT_ROUTES = {
    UNAUTHORIZED: '/login',
    ALREADY_AUTH: '/'
};

function isAuthenticated(req, res, next) {
    const isUserLoggedIn = req.session?.user;

    if (isUserLoggedIn) {
        return next();
    }
    return res.redirect(REDIRECT_ROUTES.UNAUTHORIZED);
}

function isAlreadyAuthenticated(req, res, next) {
    const isUserLoggedIn = req.session?.user;
    
    if (isUserLoggedIn) {
        return res.redirect(REDIRECT_ROUTES.ALREADY_AUTH);
    }
    return next();
}

module.exports = {
    isAuthenticated,
    isAlreadyAuthenticated
};