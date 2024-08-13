import Hero from "./Hero";
import FlightHeader from "./FlightHeader";
import UpcomingFlightSection from "../FlightContents/UpcomingFlightSection";
import {PopDestinations} from "../FlightContents/PopDestinations";
import {Holidays} from "../FlightContents/Holidays";
import {PopStays} from "../FlightContents/PopStays";

const HomePage=()=>{
    return(
        <div>
            <FlightHeader/>
            <Hero/>
            <div className={'tw-mx-12'}>
                <UpcomingFlightSection/>
                <PopDestinations/>
                <Holidays/>
                <PopStays/>
            </div>

        </div>
    )
}
export default HomePage