
import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { config, steps, theme } from '../LandingPage/Chatbot/Chatbot'
export default function Chatbot() {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Hawker Bot"
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    )
}
