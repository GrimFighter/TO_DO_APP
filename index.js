import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');

const port = 3000;
let notes = [];
app.listen(port, () => {
    console.log("application Started at port no " + port);
})

app.get("/", (req, res) => {
    res.render("home.ejs");

})

app.post("/", (req, res) => {
    // console.log(req.body.textbox);
    let input = req.body.textbox;
    if (input) {
        notes.push(input); // Add new note to the list
    }

    res.render("home.ejs", { notes: notes });
})
