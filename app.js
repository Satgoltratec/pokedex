

const fetchPokemon = () => {
    const promises = [];
    const api = `https://pokeapi.co/api/v2/pokemon/`; 
         promises.push(
                    fetch(api)
                   .then((res) => res.json())
         )
 
         Promise.all(promises).then(e => {

            const pkm = e.map((d) => 
                     {
                       console.log(pkm);
                     }
                
            
            )    
        }
            
    ) 
     
};




fetchPokemon()