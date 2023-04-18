export const people = [
    {
        id: 1,
        name: "Joe D",
        profile: ""
    },
    {
        id: 2,
        name: "Jessica",
        profile: ""
    },
    {
        id: 3,
        name: "Madhuri K",
        profile: ""
    },
    {
        id: 4,
        name: "Raj B",
        profile: ""
    },
]

export const following = [
    {
        name: "Joe D",
        video:"../video/video1.mp4",
        comments: [{
            name: "Jessica",
            comment: "Music is fab..."
        },
        {
            name: "Joe D",
            comment: "Music Lover",
            recomments: [
                {
                    name: "Joe D",
                    comments: "well said @jessica"
                },
                {
                    name: "Madhuri K",
                    comments: "Great comment"
                }
            ]

        },
        {
            name: "Raj B",
            comment: "I love playing Guitar"
        }

        ]
    }
]