import {CardMedia} from "@mui/material";
import NorwayImage from '../../assets/images/NorwayImage.png'
import ParisImage from '../../assets/images/ParisImage.png'
import TuscanyImage from '../../assets/images/TuscanyImage.png'
import GreeceImage from '../../assets/images/GreeceImage.png'
import style from '../../components/FlightHomePage/style/flight.module.css'
import {ArrowForward} from "@mui/icons-material";
export const PopDestinations = () => {
    const locations=[
        {
            city: 'Paris',
            price: '$699',
            image: ParisImage
        },
        {
            city: 'Greece',
            price: '$699',
            image: GreeceImage
        },
        {
            city: 'Norway',
            price: '$699',
            image: NorwayImage
        },
        {
            city: 'Tuscany',
            price: '$699',
            image: TuscanyImage
        },
    ]
    return (
        <>
            <div className={'tw-my-20'}>
                <div className={`${style.plan}`}>PLAN YOUR NEXT TRIP</div>
                <div className={'tw-flex tw-justify-between tw-items-center tw-mb-6'}>
                    <div className={`${style.pop}`}>Most Popular Destinations</div>
                    <span className={`${style.next}`}>View all destinations <ArrowForward/></span>
                </div>
                <div className={'tw-flex tw-justify-between tw-ml-3'}>
                    {locations.map((location,i)=> (
                        <div className={`${style.tripCard} tw-w-[288px]`} key={i}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={location.image}
                                sx={{height: "182px", borderRadius: "8px"}}
                                alt="#"
                            />
                            <div className={'tw-absolute tw-left-0 tw-top-2 tw-inset-x-0 tw-mx-3'}
                                 style={{color: 'white'}}>
                                <div className={'tw-flex tw-justify-between tw-items-center'}>
                                    <h3 className={`${style.depat}`}>{location.city}</h3>
                                    <h3 className={`${style.from}`}>FROM</h3>
                                </div>
                                <span className={`tw-flex tw-justify-end ${style.price}`}>{location.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
