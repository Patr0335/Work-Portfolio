const express = require("express"); // library
const app = express(); // instance

app.use(express.static("public")); // to serve static files such as images, css & js.
// app.use('/images', express.static('images'));

const fs = require("fs"); // filesystem

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Overview") + frontpage;



app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/json", (req, res) => {
    res.json(data);
})


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { 
    console.log("The server is running on port", PORT);
});