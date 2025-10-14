import data from '../data.js'

export default function MainContent() {
    return (
        data.map((pokemon) => (

            <div className='card'>
                <div  key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <h3>Health Pool: {pokemon.hp}</h3>
                    <img src={pokemon.image}></img>
                </div>
            </div>
        ))
    )
}