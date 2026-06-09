import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Attached with a domain name now : devops.campuscrush.site 🐋",
        status: "success",
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});