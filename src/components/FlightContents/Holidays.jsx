import {CardMedia} from "@mui/material";
import style from "../FlightHomePage/style/flight.module.css";
import bali from '../../assets/images/bali.jpg'
import swiss from '../../assets/images/SwitzerlandImage.png'
import boracay from '../../assets/images/boracay.jpg'
import mara from '../../assets/images/mara.jpg'
import {ArrowForward} from "@mui/icons-material";

export const Holidays = () => {
    const cards=[
        {
            image:bali,
            city:'Bali',
            cityCode:'4D3N',
            price:'$899'
        },
        {
            image:swiss,
            city:'Swiss',
            cityCode:'6D5N',
            price:'$900'
        },
        {
            image:boracay,
            city:'Boracay',
            cityCode:'5D4N',
            price:'$699'
        },
        {
            image:mara,
            city:'Marakesh',
            cityCode:'2DF1',
            price:'$800'
        }
    ]
    return (
        <>
            <div className={''}>
                <div className={'tw-flex tw-justify-between tw-items-center tw-mb-6'}>
                    <div className={`${style.pop}`}>Recommended Holidays</div>
                    <span className={`${style.next}`}>View all holidays <ArrowForward/></span>
                </div>
                <div className={'tw-flex tw-justify-between'}>
                    {cards.map((card, i) => (
                        <div className={`${style.tripCard} tw-w-[287px]`} key='i'>
                            <CardMedia
                                component="img"
                                height="180"
                                image={card.image}
                                sx={{height: "242px", borderRadius: "8px 8px 0px 0px"}}
                                alt="#"/>
                            <div className={'tw-flex tw-justify-between tw-items-center tw-mx-4 tw-my-5'}>
                                <div>
                                    <div className={`${style.city}`}>{card.city}</div>
                                    <span>{card.cityCode}</span>
                                </div>
                                <span className={`${style.price}`}>{card.price}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
