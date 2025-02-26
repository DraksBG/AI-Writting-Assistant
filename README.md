# AI Writing Assistant

## Overview

AI Writing Assistant is a modern web application that helps users improve their writing through AI-powered grammar checking, spell checking, and sentence rephrasing. The application leverages OpenAI's API to analyze text and provide intelligent suggestions.

## Features

- **Grammar Correction**: Advanced AI algorithms detect and correct grammatical errors
- **Spell Checking**: Comprehensive spell-checking to catch typos and suggest corrections
- **Sentence Rephrasing**: Intelligent rephrasing suggestions to improve clarity and impact
- **User Authentication**: Secure login system using Privy authentication
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- React Icons for UI elements
- Privy for authentication

### Backend
- Node.js with Express
- TypeScript for type safety
- OpenAI API integration
- RESTful API architecture

## Project Structure
project/
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # React components
│ │ │ ├── about/ # About page
│ │ │ ├── editor/ # Text editor with AI features
│ │ │ ├── home/ # Home page
│ │ │ └── navbar/ # Navigation bar
│ │ ├── images/ # Static images
│ │ ├── App.tsx # Main application component
│ │ └── main.tsx # Entry point
│ ├── package.json # Frontend dependencies
│ └── vite.config.ts # Vite configuration
│
├── server/ # Backend Express application
│ ├── routes/ # API route handlers
│ ├── services/ # Service layer
│ │ └── open-ai/ # OpenAI service integration
│ ├── types/ # TypeScript type definitions
│ ├── app.ts # Express application setup
│ └── package.json # Backend dependencies


## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
bash
git clone https://github.com/yourusername/ai-writing-assistant.git
cd ai-writing-assistant

2. Install backend dependencies
bash
cd server
npm install

3. Create a `.env` file in the server directory with your OpenAI API key
OPENAI_API_KEY=your_openai_api_key_here
PORT=8000

4. Install frontend dependencies
5. bash
cd ../client
npm install

5. Create a `.env` file in the client directory with your Privy API key (if using Privy authentication)

VITE_PRIVY_APP_ID=your_privy_app_id_here

### Running the Application

1. Start the backend server
bash
cd server
npm run dev

2. Start the frontend development server
bash
cd client
npm run dev

3. Open your browser and navigate to `http://localhost:5173`

## Building for Production

### Backend
bash
cd server
npm run build
npm start


### Frontend
bash
cd client
npm run build


The built frontend files will be in the `client/dist` directory, ready to be deployed to a static hosting service.

## API Endpoints

- `POST /api/analyze`: Analyzes and rephrases text
- `POST /api/grammarcheck`: Checks grammar in text
- `POST /api/spellcheck`: Checks spelling in text

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- Privy for authentication services
- All open-source libraries used in this project
