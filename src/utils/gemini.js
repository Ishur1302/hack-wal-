export async function geminiChat(prompt) {
    const res = await fetch('http://localhost:5001/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    if (data.result) return data.result;
    throw new Error(data.error || "Unknown error");
}
