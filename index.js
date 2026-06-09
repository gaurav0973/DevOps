import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Attached with a domain name now : devops.campuscrush.site 🐋",
        peakDetailing: "SSL certificate is generated using Caddy server and the traffic is being proxied to this API service running on port 8000."
        status: "success",
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});