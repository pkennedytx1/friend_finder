var friends = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function(request, response){
        response.json(friends);
    });
    
    app.post('/api/friends', function(request, response){
        var newFriend = request.body
        console.log(newFriend);

        //The logic here:
        //the maximum difference between two users is going to be 40.
        //if one answers all 5 and one answers all 1 then 5*10 = 50 and 1*10 = 10 => 50-10= 40
        var maxDiff = 50;
        var matchIndex = 0;

        console.log(friends.length);

        differenceArr = [];

        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
            for(var j = 0; j < friends[i].answers.length; j++) {
                var individualDifference = Math.abs(newFriend.answers[j] - friends[i].answers[j]);
                scoreDifference += individualDifference;
            };
            differenceArr.push(scoreDifference);

        };

        var matchIndex = differenceArr.indexOf(Math.min(...differenceArr));

        friends.push(newFriend);

        response.json(friends[matchIndex]);
    });
};