const pokedex = document.getElementById('pokedex'); /* recogemos los datos del html */

const fetchPokemon = () => {
    const promises = []; /* array que almacenamos promesa conversion JSON */

    for (let i = 1; i <= 150; i++) { /* recorremos 150 pokemon */

        const api = `https://pokeapi.co/api/v2/pokemon/${i}`; /* llamamos URL api */
        promises.push(           /* almacenamos resultado petición promesa en array */
                     fetch(api)
                     .then((res) =>  res.json()    /* promesa asincrona para recibir info de api y convetir a JSON */
            )
        )
    }
    
    
    /* cuando todas las promesas se cumplen y recibimos los datos se reasignan en otro array para asignar propiedades */
       Promise.all(promises).then(results => {
        const pokemon = results.map((data) => (
            
            {   /* creamos objeto y asignanos valores a propiedades */
                name: data.name,
                id: data.id,
                img: data.sprites['front_default'],
                type: data.types.map((type)=> type.type.name) .join(', ') 

                /* Los tipos del pokemon los recibimos en un array por lo que generamos otro solo con nombres */
            })); 

            PokemonDisplay(pokemon); /* llamamos a la función de mostrar pasandole los pokemons */
        
        })
       
};

const PokemonDisplay = (pokemon) => { 

    const printpokemon = pokemon.map( /* creamos array con los resultados a mostrar */
        pokelist => 
        ` 

            <p> "${pokelist.name}" </p> 
            
     
        `
    )

    pokedex.innerHTML = printpokemon; /* mostramos el html */
}

fetchPokemon();