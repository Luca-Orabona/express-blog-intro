import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {

  const foodPosts = [
    {
      titolo: "Pasta alla carbonara perfetta",
      contenuto: "La ricetta tradizionale romana passo dopo passo.",
      immagine: "img/pasta-alla-carbonara.jpg",
      tags: ["pasta", "italiana", "ricetta"]
    },
    {
      titolo: "Dolci facili senza forno",
      contenuto: "Idee veloci per dessert freschi e golosi.",
      immagine: "img/dolci-senza-forno.jpg",
      tags: ["dolci", "senza forno", "facili"]
    },
    {
      titolo: "Come fare il pane in casa",
      contenuto: "Guida completa per impastare, far lievitare e cuocere un pane fragrante.",
      immagine: "img/pane-in-casa.avif",
      tags: ["pane", "lievitazione", "cucina"]
    },
    {
      titolo: "Ricette vegetariane gustose",
      contenuto: "Piatti sani e deliziosi senza carne.",
      immagine: "img/Ricette-vegetariane-gustose.jpeg",
      tags: ["vegetariano", "salutare", "ricette"]
    },
    {
      titolo: "Cocktail estivi rinfrescanti",
      contenuto: "Bevande perfette per le giornate calde, anche in versione analcolica.",
      immagine: "img/Cocktail-estivi-rinfrescanti.jpeg",
      tags: ["cocktail", "estate", "bevande"]
    }
  ];

  const dataJason = {
    data: foodPosts,
    counter: foodPosts.length
  };

  res.json(dataJason);
});



app.listen(port, () => {

})