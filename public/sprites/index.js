const path = require("node:path");
const fs = require("node:fs");
const fetch = require("node-fetch");

async function getSprites() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  const { results } = await res.json();

  results.forEach(async (p) => {
    const res = await fetch(p.url);
    const { name, sprites } = await res.json();

    const image = await fetch(sprites.front_default);
    image.body.pipe(fs.createWriteStream(`./public/sprites/${name}.png`));
  });
}

try {
  getSprites();
} catch (error) {
  console.log(error.message);
}
