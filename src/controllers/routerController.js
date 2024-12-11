exports.getHome = (req, res) => {
    res.render('pages/home', {
        pageDescription: 'Bem-vindo ao nosso site!'
    });
};

exports.getLogin = (req, res) => {
    res.render('pages/login');
};

exports.getSignUp = (req, res) => {
    res.render('pages/signup');
};

exports.get404 = (req, res) => {
    res.render('pages/404');
};