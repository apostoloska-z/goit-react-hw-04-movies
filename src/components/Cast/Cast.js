import noImage from "../../No-image.jpg";
import PropTypes from "prop-types";
import "./Cast.scss"

const Cast = ({ cast }) => (
        <ul className="cast">
            {cast.map(actor =>
                <li className="cast__item" key={actor.name}>
                    <img
                        className="cast__photo"
                        src={actor.profile_path? `https://image.tmdb.org/t/p/w300${actor.profile_path}`: noImage }
                        alt={actor.name}
                    ></img>
                    <h3>{actor.name}</h3>
                    <p>Character: {actor.character}</p>
                </li>)}
        </ul>

)

 Cast.propTypes = {
   cast: PropTypes.array,
 };

export default Cast;