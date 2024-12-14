// Import necessary instructions
import { laurenInstructions } from '../lauren-instructions.js';

// Grab the API key from environment variables
const apiKey = import.meta.env.VITE_XAI_API_KEY;

// DOM elements
const sendBtn = document.getElementById('send-btn');
const clearChatBtn = document.getElementById('clear-chat-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const userInput = document.getElementById('user-input');
const messagesDiv = document.getElementById('messages');

// Placeholder for API interaction setup
const laurenString = JSON.stringify(laurenInstructions);

// Initialize data with system message for context (this will not be displayed)
const data = {
  messages: [
    {
      role: 'system',
      content: laurenString, // System message for agent's context only
    },
    ...loadChatHistory(), // Load user and assistant messages only
  ],
  model: 'grok-2-1212',
  stream: false,
  temperature: 0.3,

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











