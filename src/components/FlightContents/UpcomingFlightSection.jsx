import FlightIcons from "../icons/FlightIcons";
import style from '../FlightHomePage/style/flight.module.css'
import {HotelIcon} from "../icons/HotelIcon";
import {AttractionIcon} from "../icons/AttractionIcon";
import {EatIcon} from "../icons/EatIcon";
import {CommuteIcon} from "../icons/CommuteIcon";
import {TaxiIcon} from "../icons/TaxiIcon";
import {MovieIcon} from "../icons/MovieIcon";
const UpcomingFlightSection = () => {
    const journey=[
        {
            from: 'LOS',
            to:'LAX',
            date:'7 Sep 2021'
        },
        {
            from: 'LON',
            to:'DXB',
            date:'17 Sep 2021'
        },
    ]
    const  trips=[
        {
            menu:'Hotel',
            icon:<HotelIcon/>
        },
        {
            menu:'Attractions',
            icon:<AttractionIcon/>
        },
        {
            menu:'Eats',
            icon:<EatIcon/>
        },
        {
            menu:'Commute',
            icon:<CommuteIcon/>
        },
        {
            menu:'Taxi',
            icon:<TaxiIcon/>
        },
        {
            menu:'Movies',
            icon:<MovieIcon/>
        },
    ]
  return(
      <div>
          <div className={'tw-mt-16'}>
              <h2 className={`${style.recent} tw-mb-5`}>RECENT SEARCHES</h2>
              <div className={'tw-flex tw-gap-5 tw-mb-5'}>
                  {journey.map((trip, i)=> (
                      <div className={`${style.search_body} tw-w-1/2 tw-px-5 tw-pt-6`} key={i}>
                          <div className={'tw-flex tw-justify-between'}>
                              <span className={`${style.dest}`}>{trip.from}</span>
                              <span>
                          <FlightIcons/>
                      </span>
                              <span className={`${style.dest}`}>{trip.to}</span>
                          </div>
                          <div className={'tw-flex tw-justify-center tw-my-3'}>
                              <div>
                                  <span className={`${style.depat}`}>Depart On: </span>
                                  <span className={`${style.date}`}>{trip.date}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <div>
                  <div>PREPARE FOR YOUR TRIP</div>
                  <div className={'tw-flex tw-justify-between'}>
                      {trips.map((trip,index)=>(
                          <div className={'tw-flex tw-flex-col'}>
                              {trip.icon}
                              <span>{trip.menu}</span>
                          </div>
                      ))}
                  </div>
              </div>

          </div>
      </div>
  )
}
export default UpcomingFlightSection