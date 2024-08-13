import {Avatar, Badge} from "@mui/material";
import {NotificationsNone} from "@mui/icons-material";
import FlightLogo from "../icons/flightLogo";

const FlightHeader=()=>{
    return(
        <div className={'tw-mt-4 tw-mb-2 '}>
            <div className={'tw-flex tw-justify-between tw-mx-12 tw-items-center'}>
                <div>
                    <FlightLogo/>
                </div>
                <div className={'tw-flex tw-gap-4'}>
                    <div>Explore</div>
                    <div>Search</div>
                    <div>Hotels</div>
                    <div>Offers</div>
                    <div className={'tw-flex tw-gap-2 tw-items-center'}>
                        <Badge color="info" variant='dot' overlap="circular">
                            <NotificationsNone color={'action'} fontSize={'small'}/>
                        </Badge>
                        <Avatar sx={{width:'20px', height:'20px'}}/>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default FlightHeader