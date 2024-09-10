import express,{Request, Response} from "express";
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

const url = "";

app.get('/', function (request:Request, response: Response) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1025")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            response.render("index", data);
        });
});

app.get("/:name/stats", function(request:Request, response:Response){
    const nomePokemon = request.params.name;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        .then(res => res.json())
        .then(pokemon => {
            
        })
})


app.listen(3001, function () {
    console.log("http://localhost:3001/");
})