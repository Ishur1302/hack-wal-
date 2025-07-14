const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // <-- Use .env

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

app.post('/api/gemini', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: prompt }] }]
            }
        );
        const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
        res.json({ result });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Gemini API error" });
    }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
