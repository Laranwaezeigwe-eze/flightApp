import SearchSection from "./SearchSection";
import coverImage from '../icons/coverImage.png'
import style from '../FlightHomePage/style/flight.module.css'

const Hero = () => {

  return(
      <div className={`${style.background} tw-flex tw-items-center tw-justify-center`} style={{backgroundImage:`url(${coverImage})`}}>
          <div>
              <div className={`${style.title} tw-flex tw-justify-center tw-mb-3`}>Let's explore & travel the world</div>
              <span className={'tw-flex tw-justify-center tw-mb-6'} style={{color:'#FFF'}}>Find the best destination and the most popular
                  stays!</span>
              <div>
                  <SearchSection/>
              </div>
          </div>

      </div>
  )
}
export default Hero