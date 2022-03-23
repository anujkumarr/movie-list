import React from "react";
import data from "../data.json";

class movieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieIdx: "",
    };
  }
  modal = (idx) => {
    this.setState({
      movieIdx: idx,
    });
  };
  cross = () => {
    this.setState({
      movieIdx: ""
    })
  }
  render() {
    return (
      <>
        <h1>Movie App</h1>
        <div className="container flex justify wrap">
          {data.map((movie, idx) => (
            <>
              <div key={idx} className="flex-25 card">
                <img  src={`${movie.Poster}`} alt={movie.Title} />
                <div className="flex justify">
                  <h2 className="title flex-45">{movie.Title}</h2>
                  <button className="btn flex-45" onClick={() => this.modal(idx)}>
                    More Info
                  </button>
                </div>
                <span className="date">{movie.Released}</span>
              </div>
              {this.state.movieIdx === idx ? <ul className="modal">
                <div className="flex">
                <h1>{ movie.Title}</h1>
                <li>Released Year-{movie.Year}</li>
                <span onClick={() => this.cross()} className="cross">
                 ❌
                </span>
                </div>
                <li>RunTime - {movie.Runtime}</li>
                <li>Genre- {movie.Genre}</li>
                <li>
                  Writer- {movie.Writer}
                  Director- {movie.Director}
                </li>
                <li>Actors- {movie.Actors}</li>
                <li>Award - {movie.Awards}</li>
                <li>Rating- {movie.imdbRating}</li>
                <li>Type-{movie.Type}</li>
                <li>Response- {movie.Response}</li>
                <div className="flex wrap images">
                  {movie.Images.map((image) => (
                    <div className="flex-25">
                      <img className="img image-width-modal " src={`${image}`} alt={image} />
                    </div>
                  ))}
                </div>
              </ul> : null}
            </>
          ))}
        </div>
      </>
    );
  }
}

export default movieList;
