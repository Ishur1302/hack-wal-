import React, { useState } from "react";
import { Box, TextField, Button, Typography, CircularProgress, Paper } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { geminiChat } from "../utils/gemini";

function GeminiChat() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResponse("");
        try {
            const res = await geminiChat(input);
            setResponse(res);
        } catch (e) {
            setResponse("Something went wrong. Try again.");
        }
        setLoading(false);
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, mb: 4, background: "#f9f9f9" }}>
            <Box display="flex" alignItems="center" gap={2}>
                <SmartToyIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={700}>
                    Ask Walmart AI Assistant
                </Typography>
            </Box>
            <Box mt={2} display="flex" gap={2}>
                <TextField
                    fullWidth
                    label="Ask about products, deals, or anything!"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleAsk()}
                />
                <Button variant="contained" color="primary" onClick={handleAsk} disabled={loading}>
                    Ask
                </Button>
            </Box>
            {loading && <CircularProgress sx={{ mt: 2 }} />}
            {response && (
                <Paper elevation={0} sx={{ mt: 2, p: 2, background: "#fff" }}>
                    <Typography variant="body1">{response}</Typography>
                </Paper>
            )}
        </Paper>
    );
}

export default GeminiChat;
