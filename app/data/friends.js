var friends = [
    {
        name: "Chandler",
        photo: "https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w330.h330.2x.jpg",
        answers: [5, 4, 3, 3, 1, 2, 5, 1, 2, 1]
    },
    {
        name: "Monica",
        photo: "https://vignette.wikia.nocookie.net/friends/images/7/75/Monica.jpg/revision/latest/scale-to-width-down/212?cb=20130802071219",
        answers: [5, 5, 2, 4, 3, 5, 1, 3, 3, 4]
    },
    {
        name: "Joey",
        photo: "data:image/jpeg;base64,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",
        answers: [1, 3, 4, 3, 3, 3, 3, 3, 3, 3]
    }
]

module.exports = friends;