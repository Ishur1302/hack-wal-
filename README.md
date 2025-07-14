
## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the backend root folder:**
   - Create a file named `.env` (no filename, just `.env`).
   - Add your Gemini API key like this:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```
   - Replace `your_gemini_api_key_here` with your actual Gemini API key.

4. **Make sure your backend code loads environment variables:**
   ```js
   require('dotenv').config();
   // Now you can use process.env.GEMINI_API_KEY in your code
   ```

5. **Start the backend server:**
   ```bash
   npm start
   ```
   or, if you use nodemon:
   ```bash
   npm run dev
   ```

6. The backend server will run on `http://localhost:5001` (or your configured port).

## Frontend Setup

1. **Navigate to the frontend folder (or project root if combined):**
   ```bash
   cd frontend
   # or stay in root if not separated
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

4. The frontend will run on `http://localhost:3000` by default.

## Notes

- **Never commit your `.env` file or API keys to GitHub.** Add `.env` to your `.gitignore` file to keep it private[1][2][3][4][5].
- Make sure the frontend calls the backend API at the correct URL (e.g., `http://localhost:5001/api/gemini`).

This ensures anyone can set up and run both backend and frontend, and securely add their own Gemini API key.
working demo at 
https://www.youtube.com/watch?v=hIDYe8ST_VY
