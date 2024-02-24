import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {movies.map(eachMovie => (
          <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
