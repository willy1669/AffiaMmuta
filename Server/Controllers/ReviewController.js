var model = require('../Models/Review');
var ReviewService = require('../Services/ReviewService');

//this should run after successful book(s) purchase
exports.addBookToLibrary = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        reviewBody: req.body.reviewBody
    };
    try {
        return ReviewService.addReview(req, res, data);
    } catch (exception){
        console.log("Error : "+exception);
    }
}

exports.viewReviews = function(req, res){
    try {
       return ReviewService.getAllReviews(req, res);
    } catch(exception){
        console.log("Error : "+exception);
    }
}
