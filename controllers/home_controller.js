const Post = require('../models/post');
const User = require('../models/user');

try{
    module.exports.home =  async function(req, res) {
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
        let posts  = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
    
        });
        // .exec(function(err, posts){
    
        //     User.find({}, function(err, users){
        //         return res.render('home', {
        //             title : ' Codeial | Home',
        //             posts : posts,
        //             all_users: users
        //         });          
        //     });
        // });
    
        let users = await User.find({});
    
        return res.render('home', {
            title : ' Codeial | Home',
            posts : posts,
            all_users: users
        });
                        
    }

}catch(err){
    console.log('Error', err);
    return;
}



//module.exports.actionName = function(req, res) { }

//using then 
// Post.find({}).populate('comments').then(function);

// let posts = Post.find({}).populate('comments').exec();

//posts.then();

