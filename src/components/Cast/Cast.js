import noImage from ".../img/No-image.jpg"

const Cast = ({ cast }) => (
        <ul>
            {cast.map(actor =>
                <li >
                    <img
                        src={actor.profile_path? `https://image.tmdb.org/t/p/w300${actor.profile_path}`: noImage }
                        alt={actor.name}
                    ></img>
                    <h3>{actor.name}</h3>
                    <p>Character: {actor.character}</p>
                </li>)}
        </ul>

)

export default Cast;