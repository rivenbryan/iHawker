/**
 * Represents a chatbot for iHawker website.
 * @module iHawkerChatbot
 */

import RecFood from "./RecFood";
import BestFood from "./BestFood";

/**
 * The configuration of the iHawker chatbot.
 *
 * @typedef {Object} Config
 * @property {string} width - The width of the chatbot in pixels.
 * @property {string} height - The height of the chatbot in pixels.
 * @property {boolean} floating - Determines if the chatbot is floating or not.
 */

/**
 * The steps of the iHawker chatbot conversation.
 *
 * @type {Array<Object>}
 */

// Set some properties of the bot
export const config = {
    width: "350px",
    height: "500px",
    floating: true,
};

export const steps = [
    {
        id: '0',
        message: 'Hey! Welcome to iHawker',
        trigger: '1',
    }, {
        id: '1',
        message: 'How should we address you?',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        validator: (value) => {
            if (value === "") {
                return 'Please fill in your name';
            }
            return true;
        },
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: '4'
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'What is this website about?', trigger: 'about' },
            { value: 2, label: 'What is the best food in the neighbourhood?', trigger: 'bestFood' },
            { value: 3, label: 'Recommend me one food please!', trigger: 'recFood' },
            { value: 4, label: 'No more questions!', trigger: 'exit' },
        ],
    },
    {
        id: 'about',
        message: 'Bringing together well-loved local food under one roof, hawker centres are a unique aspect of Singaporean culture. ' +
            '\nLocated all over the island, these time-tested institutions serve as important places for community bonding.',
        trigger: '4',
    },
    {
        id: 'recFood',
        component: <RecFood />,
        trigger: '4',
    },
    {
        id: 'bestFood',
        component: <BestFood />,
        trigger: '4',
    },
    {
        id: 'exit',
        message: " Hi, thank you for using iHawker bot!",
        end: true
    },
]
export const theme = {
    background: 'white',
    headerBgColor: '#FFC137',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'black',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};