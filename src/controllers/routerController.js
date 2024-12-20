exports.getHome = (req, res) => {
    res.render('pages/home', {
        pageDescription: 'Bem-vindo ao nosso site!',
        user: req.session.user
    });
};

exports.getLogin = (req, res) => {
    res.render('pages/login', {
        user: req.session.user
    });
};

exports.getSignUp = (req, res) => {
    res.render('pages/signup', {
        user: req.session.user
    });
};

exports.get404 = (req, res) => {
    res.render('pages/404', {
        user: req.session.user
    });
};