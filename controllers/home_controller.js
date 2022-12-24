module.exports.home = function(req, res) {
    // return res.end('<h1>Express is up for Codeial!</h1>');       it is sending directly to the browser

    return res.render('home', {
        title : 'Home'
    });
}

//module.exports.actionName = function(req, res) { }