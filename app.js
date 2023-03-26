const fetchPokemon = () => {
    const api = `https://pokeapi.co/api/v2/pokemon/1`; /* llamamos URL api */
    fetch(api)
        .then((res) => {        /* promesa asincrona para recibir info de api y convetir a JSON */
            return res.json();  
        })
        .then((data) => {       /* promesa recibe los datos */
           
            const pokemon = { /* creamos objeto y asignanos valores a propiedades */
                name: data.name,
                id: data.id,
                img: data.sprites['front_default'],
                type: data.types.map((type)=> type.type.name) .join(', ') 

                /* Los tipos los recibimos en un array por lo que generamos otro solo con nombres */
            }; 

            
            console.log(pokemon); 
        });
};

fetchPokemon();