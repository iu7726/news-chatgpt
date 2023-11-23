# ChatGPTModel

![TypeScript](https://img.shields.io/badge/TypeScript-%5E4.0-blue)
![Node.js](https://img.shields.io/badge/node-%5E14.17.3-brightgreen)
![ChatGPT](https://img.shields.io/badge/chatGPT-3.5-fedcba)


## Description
The ChatGPTModel class in this project is designed to interact with OpenAI's GPT-3 API using the text-davinci-003 model. It processes a given text input, typically a news headline, and returns a summary including a fundamental score and key keywords.

## Setup

### Prerequisites
- Node.js installed on your system.
- An API key from OpenAI for accessing GPT-3 services.

## Installation
1. Clone the repository to your local machine.
2. Run npm install to install the required dependencies.

## Environment Variables
- Create a .env file in the root directory of your project.
- Add your OpenAI API key as CHATGPT_API_KEY=<your_api_key_here>.

## Usage
To use the ChatGPTModel, import the class and instantiate it. Call the getChatGPTSummary method with a string argument representing the text you want to process.

```javascript
import ChatGPTModel from './path_to_ChatGPTModel';

const chatGPTModel = new ChatGPTModel();
chatGPTModel.getChatGPTSummary("Your news headline here")
  .then(result => console.log(result))
  .catch(error => console.error(error));
```