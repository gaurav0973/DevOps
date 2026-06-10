import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Full API service deployed successfully with Caddy server as a reverse proxy.",
        peakDetailing: "Now I can use this repository to deploy any API service with Caddy server as a reverse proxy",
        status: "success",
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});