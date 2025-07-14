import React, { useState } from "react";
import { geminiChat } from "../utils/gemini";

export default function OrderTracker() {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTrack = async () => {
        setLoading(true);
        setStatus("");
        try {
            const res = await geminiChat(`Track order status for order ID: ${orderId}`);
            setStatus(res);
        } catch {
            setStatus("Unable to fetch order status.");
        }
        setLoading(false);
    };

    return (
        <div>
            <input
                value={orderId}
                onChange={e => setOrderId(e.target.value)}
                placeholder="Enter your Order ID"
                style={{ padding: 8, marginRight: 8 }}
            />
            <button onClick={handleTrack} disabled={loading}>Track</button>
            {loading && <div>Loading...</div>}
            {status && <div style={{ marginTop: 16 }}>{status}</div>}
        </div>
    );
}
