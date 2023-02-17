// Set some properties of the bot
export const config = {
    floating: true,
};

export const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        trigger: '1',
    }, {
        id: '1',

        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',

        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: '4'
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'What is this website about?', trigger: '5' },
            { value: 2, label: 'What is the best food in the neighbourhood?', trigger: '6' },
            { value: 3, label: 'Recommend me one food please!', trigger: '6' },
        ],
    },
    {
        id: '5',
        message: 'Wrong answer, try again.',
        trigger: '2',
    },
    {
        id: '6',
        message: 'About iHawker!',
        trigger: '4',
    },
]
export const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};