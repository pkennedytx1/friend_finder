var express = require('express');
var path = require('path');

//setting the routes for the survey and the home page
module.exports = function(app) {
    app.get('/', function(request, response){
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(request, response){
        response.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};