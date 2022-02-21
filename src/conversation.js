/* The chat const defines the conversation.

 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'Hi! Welcome to Chatbot.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'Chatbot is a <em>really simple</em>, choice-driven chatbot framework made in vanilla JavaScript',
        next: 3
    },
    3: {
        text: 'But you probably knew that anyway.',
        options: [
            {
                text: "<strong>Yes</strong>, I did!",
                next: 4
            },
            {
                text: "<strong>Nope</strong>, this is news.",
                next: 5
            }
        ]
    },
    4: {
        text: 'Awesome. This chat can be developed based on the requirements. Happy coding!',
    },
    5: {
        text: 'Aah, you\'re missing out!',
        next: 6
    },
    6: {
        text: 'How are you doing?',
        options: [
            {
                text: 'Good,how about you?',
                next: 7
            }
        ]
    },
    7: {
        text: 'Glad to hear that.I am also fanstastic.',
        options: [
            {
                text: 'I want to access more features of this chatbot',
                next: 8
            }
            
        ]
    },
    8: {
        text: 'More features are on the way',
        options: [
            {
                text: 'I want to check it out!',
                next: 9
            }
            
        ]
    },

    9: {
        text: 'You should check it out on GitHub',
        options: [
            {
                text: "Go to GitHub",
                url: "https://github.com/ankit-singh706/Chatbot"
            }
        ]
    }
};
