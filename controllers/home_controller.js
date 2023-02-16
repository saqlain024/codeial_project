const Post = require('../models/post');

module.exports.home = function(req, res) {
    // console.log(req.cookies);          // printing cookies value on console
    // res.cookie('user_id',25);        // we can change the modify cookie here too

    
    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title : ' Codeial | Home',
    //         posts : posts
    //     });
    // });

    //above code 8-13 line is only fetching the user id 
    // but if we want to fetch the each user object then below code  will work for that 18-24 line

    // populate the user of each post
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title : ' Codeial | Home',
            posts : posts
        });
    });

    
}

//module.exports.actionName = function(req, res) { }