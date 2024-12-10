exports.getHome = (req, res) => {
    res.render('pages/home', {
        pageDescription: 'Bem-vindo ao nosso site!'
    });
};

exports.get404 = (req, res) => {
    res.render('pages/404');
};