import data from '../data.js'

export default function MainContent() {
    return (
        data.map((pokemon) => (

            <div className='card'>
                <div key={pokemon.id}>
                    <h2 className="pokemon-name">{pokemon.name}</h2>
                    <h3>Health Pool: {pokemon.hp}</h3>
                    <h3>Attack power: {pokemon.attack}</h3>
                    <h3>Defense: {pokemon.defense}</h3>
                    <img src={pokemon.image}></img>  
                </div>
            </div>
        ))
    )
}