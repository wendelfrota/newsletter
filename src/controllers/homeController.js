exports.getHome = (req, res) => {
    res.render('pages/home', {
        title: 'Página Inicial',
        pageDescription: 'Bem-vindo ao nosso site!'
    });
};