module.exports.home = function(req, res) {
    console.log(req.cookies);          // printing cookies value on console
    res.cookie('user_id',25);        // we can change the modify cookie here too
    return res.render('home', {
        title : 'Home Page'
    });
}

//module.exports.actionName = function(req, res) { }