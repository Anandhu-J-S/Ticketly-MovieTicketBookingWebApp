import "../LandingPage/LandingPage.css"
import lp1 from "../../../../assets/images/LandingPageImgs/lp-1.avif"
import lp2 from "../../../../assets/images/LandingPageImgs/lp.2.avif"
import lp3 from "../../../../assets/images/LandingPageImgs/lp-3.avif"
import film1 from "../../../../assets/images/movies/film1.png"
import film2 from "../../../../assets/images/movies/film2.png"
import film3 from "../../../../assets/images/movies/film3.png"
import film4 from "../../../../assets/images/movies/film4.png"
import film5 from "../../../../assets/images/movies/film5.png"
import film6 from "../../../../assets/images/movies/film6.png"



function LandingPage() {
  const movies = [
    { id: 1, title: 'xxx', image: `${film1}` },
    { id: 2, title: 'Interstellar', image: `${film2}` },
    { id: 3, title: 'Tenet', image: `${film3}` },
    { id: 4, title: 'Dunkirk', image: `${film4}` },
    { id: 5, title: 'The Dark Knight', image: `${film5}` },
    { id: 6, title: 'Memento', image: `${film6}` },
  ];
  return (
    <div className="landing-page-body">
      {/* Carousel  */}
      <div className="container-fluid">
        <div id="demo" className="carousel slide landing-page-carousel-custom" data-bs-ride="carousel">

          {/* Indicators/dots  */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner rounded-5  ">
            <div className="carousel-item active">
              <img src={lp1} alt="Los Angeles" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={lp2} alt="Chicago" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={lp3} alt="New York" className="d-block w-100" />
            </div>
          </div>

          {/* Left and right controls/icons  */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      {/* carousel ends */}

      {/* Now Showing */}
      <p className="lp-now-showing-head container">Now Showing</p>


      {/* movie Carousel  */}


      <div>
        <div className="landing-page-carousel-wrapper container">
          <div className="landing-page-carousel-track">
            {[...movies, ...movies].map((movie, index) => (
              <div className="landing-page-movie-card" key={index}>
                <img src={movie.image} alt={movie.title} />
                <h5>{movie.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* movie carousel ends */}

      {/* Recently Added   */}
      <p className="lp-now-showing-head container">Recently Added</p>

      <div className="container">
        <div className="card bg-secondary lp-recently-added-movies-card">
          <div className="card-head">
            movie head here
          </div>
          <div className="card-body"> movie desc here</div>
          <div className="card-footer"><button>click</button></div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
