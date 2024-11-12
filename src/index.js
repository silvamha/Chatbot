// import { luisaInstructions } from '../luisa-instructions.js';

// const luisaString = JSON.stringify(luisaInstructions)

// const apiKey = import.meta.env.VITE_XAI_API_KEY // Replace with your actual API key

// const data = {
//   messages: [
//     {
//       role: 'system',
//       content: luisaString,
//     },
//     {
//       role: 'user',
//       content:"Luisa, in great detail and specificty, describe yoursel physically. Describe every part of your body and how it makes you and others feel. The expand on your passions. Explaing why you are passionate for the things you are and why. The in detral describe your role, the expectation of you and tell me about your personality. Be detailed, specific, through, and explicit in your description.",
//     },
//   ],
//   model: 'grok-beta',
//   stream: false,
//   temperature: .5,
// };

// fetch('https://api.x.ai/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log(data.choices[0].message); // Access and print the message
// })
// .catch((error) => {
//   console.error('Error:', error);
// })

//*NOTE - 2nd Code Starts

// Import necessary instructions
// import { luisaInstructions } from '../luisa-instructions.js';

// // Grab the API key from environment variables
// const apiKey = import.meta.env.VITE_XAI_API_KEY;

// // DOM elements
// const sendBtn = document.getElementById('send-btn');
// const clearChatBtn = document.getElementById('clear-chat-btn');
// const deleteAllBtn = document.getElementById('delete-all-btn');
// const userInput = document.getElementById('user-input');
// const messagesDiv = document.getElementById('messages');

// // Placeholder for API interaction setup
// const luisaString = JSON.stringify(luisaInstructions);

// const data = {
//   messages: [
//     {
//       role: 'system',
//       content: luisaString,
//     },
//     {
//       role: 'user',
//       content: 'Hello, how are you?',
//     },
//   ],
//   model: 'grok-beta',
//   stream: false,
//   temperature: 0.5,
// };

// // Send button event
// sendBtn.addEventListener('click', () => {
//   const userMessage = userInput.value;
//   if (userMessage.trim()) {
//     sendMessage(userMessage);
//     userInput.value = ''; // Clear input after sending
//   }
// });

// // Clear chat button event
// clearChatBtn.addEventListener('click', () => {
//   messagesDiv.innerHTML = ''; // Clear displayed messages
// });

// // Delete all button event (Placeholder for future deletion logic)
// deleteAllBtn.addEventListener('click', () => {
//   console.log('Delete all messages');
// });

// // Function to send message (fetch example)
// function sendMessage(message) {
//   const userMessage = {
//     role: 'user',
//     content: message,
//   };

//   data.messages.push(userMessage); // Append user message to conversation

//   fetch('https://api.x.ai/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     const botMessage = data.choices[0].message.content;
//     displayMessage(botMessage, 'assistant');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// // Function to display message in chat area
// function displayMessage(content, role) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('message', role);
//   messageElement.textContent = content;
//   messagesDiv.appendChild(messageElement);
// }

//*NOTE - 2d Code Ends

//*NOTE - 3rd Working Code begins

// Import necessary instructions
// import { luisaInstructions } from '../luisa-instructions.js';

// // Grab the API key from environment variables
// const apiKey = import.meta.env.VITE_XAI_API_KEY;

// // DOM elements
// const sendBtn = document.getElementById('send-btn');
// const clearChatBtn = document.getElementById('clear-chat-btn');
// const deleteAllBtn = document.getElementById('delete-all-btn');
// const userInput = document.getElementById('user-input');
// const messagesDiv = document.getElementById('messages');

// // Placeholder for API interaction setup
// const luisaString = JSON.stringify(luisaInstructions);

// const data = {
//   messages: [
//     {
//       role: 'system',
//       content: luisaString,
//     },
//   ],
//   model: 'grok-beta',
//   stream: false,
//   temperature: 0.5,
// };

// // Send button event
// sendBtn.addEventListener('click', () => {
//   const userMessage = userInput.value;
//   if (userMessage.trim()) {
//     displayMessage(userMessage, 'user'); // Display user message immediately
//     sendMessage(userMessage);
//     userInput.value = ''; // Clear input after sending
//   }
// });

// // Clear chat button event
// clearChatBtn.addEventListener('click', () => {
//   messagesDiv.innerHTML = ''; // Clear displayed messages
// });

// // Delete all button event (Placeholder for future deletion logic)
// deleteAllBtn.addEventListener('click', () => {
//   console.log('Delete all messages');
// });

// // Function to send message (fetch example)
// function sendMessage(message) {
//   const userMessage = {
//     role: 'user',
//     content: message,
//   };

//   data.messages.push(userMessage); // Append user message to conversation

//   fetch('https://api.x.ai/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     const botMessage = data.choices[0].message.content;
//     displayMessage(botMessage, 'assistant');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// // Function to display message in chat area
// function displayMessage(content, role) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('message', role);
//   messageElement.textContent = content;
//   messagesDiv.appendChild(messageElement);
// }
//* 3rd Working Code Ends

// Import necessary instructions
import { luisaInstructions } from '../luisa-instructions.js';

// Grab the API key from environment variables
const apiKey = import.meta.env.VITE_XAI_API_KEY;

// DOM elements
const sendBtn = document.getElementById('send-btn');
const clearChatBtn = document.getElementById('clear-chat-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const userInput = document.getElementById('user-input');
const messagesDiv = document.getElementById('messages');

// Placeholder for API interaction setup
const luisaString = JSON.stringify(luisaInstructions);

// Initialize data with system message for context (this will not be displayed)
const data = {
  messages: [
    {
      role: 'system',
      content: luisaString, // System message for agent's context only
    },
    ...loadChatHistory(), // Load user and assistant messages only
  ],
  model: 'grok-beta',
  stream: false,
  temperature: 0.75,

};
 console.log(data) 
// Function to load messages from localStorage (excluding the system message)
function loadChatHistory() {
  const savedHistory = localStorage.getItem('chatHistory');
  return savedHistory ? JSON.parse(savedHistory) : [];
}

// Function to save only user and assistant messages to localStorage
function saveChatHistory() {
  const chatHistory = data.messages.filter(
    message => message.role === 'user' || message.role === 'assistant'
  );
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Load and display only user and assistant messages on page load
window.addEventListener('DOMContentLoaded', () => {
  loadChatHistory().forEach(message => {
    displayMessage(message.content, message.role);
  });
});

// Send button event
sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    displayMessage(userMessage, 'user'); // Display user message immediately
    sendMessage(userMessage);
    userInput.value = ''; // Clear input after sending
  }
});

// Clear chat button event
clearChatBtn.addEventListener('click', () => {
  messagesDiv.innerHTML = ''; // Clear displayed messages
  localStorage.removeItem('chatHistory'); // Clear saved chat history
  data.messages = [
    {
      role: 'system',
      content: luisaString, // Keep system message for agent context
    },
  ]; // Reset data.messages to initial state
});

// Delete all button event (Placeholder for future deletion logic)
deleteAllBtn.addEventListener('click', () => {
  console.log('Delete all messages');
});

// Function to send message to the API and handle the response
function sendMessage(message) {
  const userMessage = {
    role: 'user',
    content: message,
  };

  data.messages.push(userMessage); // Append user message to conversation
  saveChatHistory(); // Save chat history after adding user message



  fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),


  })
  .then(response => response.json())
  .then(apiData => {
    if (apiData.choices && apiData.choices[0].message) {
      const botMessage = apiData.choices[0].message.content;
      const assistantMessage = {
        role: 'assistant',
        content: botMessage,
      };
      data.messages.push(assistantMessage); // Append bot message to conversation
      displayMessage(botMessage, 'assistant'); // Display bot message in chat
      saveChatHistory(); // Save chat history after receiving bot message
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Function to display message in chat area
function displayMessage(content, role) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', role);
  messageElement.textContent = content;
  messagesDiv.appendChild(messageElement);
}











