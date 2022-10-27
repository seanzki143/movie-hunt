import './MovieCard.scss'
import placeholder from './../img/placeholder.png'

const MovieCard = ({ movie }) => {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
            <div className="card shadow-lg">
                <img src={movie.Poster == 'N/A' ? placeholder : movie.Poster} className="card-img-top movie-image" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;