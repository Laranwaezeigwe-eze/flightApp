import style from "../FlightHomePage/style/flight.module.css";
import {ArrowForward, PlayCircleOutline} from "@mui/icons-material";
import {Button, CardMedia, IconButton} from "@mui/material";

export const PopStays = () => {

    return (
        <div className={'tw-mt-20'}>
            <div className={'tw-flex tw-justify-between tw-mb-6 tw-items-center'}>
                <div className={`${style.pop}`}>Popular Stays</div>
                <span className={`${style.next}`}>View all stays <ArrowForward/></span>
            </div>
            <div>
                <div>
                    <CardMedia component="img"
                               height="180"
                               image={'card.image'}
                               sx={{height: "242px", borderRadius: "8px 8px 0px 0px"}}
                               alt="#"/>
                    <div className={''}>
                        <div className={'tw-flex tw-justify-between'}>
                            <div className={`${style.city}`}>Entire Bungalow</div>
                            <span>
                                <IconButton sx={{color:'#1262AF'}}><PlayCircleOutline/></IconButton>
                            </span>
                        </div>
                        <div className={`${style.price}`}>Matterhorn Suites</div>
                        <div>$575/night</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
