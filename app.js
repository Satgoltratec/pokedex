const fetchPokemon = () => {
    const promises = []; /* array que almacenaremos promesas */

    for (let i = 1; i <= 150; i++) { /* recoremos todos los pokemon */

        const api = `https://pokeapi.co/api/v2/pokemon/${i}`; /* llamamos URL api */
        promises.push(           /* almacenamos resultado petición promesa en array */
                     fetch(api)
                     .then((res) =>  res.json()    /* promesa asincrona para recibir info de api y convetir a JSON */
            )
        )
    }
    
    
    /* cuando todas las promesas se cumplen y recibimos los datos se reasignan en otro array */
       Promise.all(promises).then(results => {
        const pokemon = results.map((data) => (
            
            {   /* creamos objeto y asignanos valores a propiedades */
                name: data.name,
                id: data.id,
                img: data.sprites['front_default'],
                type: data.types.map((type)=> type.type.name) .join(', ') 

                /* Los tipos los recibimos en un array por lo que generamos otro solo con nombres */
            })); 

            console.log(pokemon)
        
        })
       
};

fetchPokemon();