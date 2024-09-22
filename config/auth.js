module.exports = {
    // Check the user's authentication
    ensureAuthenticated: function(req, res, next) { 
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/users/login');
    }
}
