let pokelink =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// 1.png

const container = document.querySelector("#container");

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  btn.style.visibility = "hidden";
  btn.classList.remove("button");
  for (let i = 1; i <= 151; i++) {
    let newImg = document.createElement("img");
    let pokemon = document.createElement("div");
    let label = document.createElement("span");
    label.innerText = `#${i}`;
    newImg.src = `${pokelink}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
    pokemon.classList.add("pokemon");
  }
});
