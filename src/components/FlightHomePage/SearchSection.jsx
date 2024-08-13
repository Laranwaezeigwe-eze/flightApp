import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import style from './style/flight.module.css'

const SearchSection = () => {
  return(
      <div className={'tw-flex tw-justify-center'}>
          <div className={`${style.search} tw-p-4`}>
              <div className={'tw-flex tw-justify-between tw-items-center tw-mb-2'}>
                  <div className={`${style.search_title}`}>SEARCH FLIGHTS</div>
                  <div className={''}>
                      <RadioGroup defaultValue="" name="radio-buttons-group"
                                  style={{display: 'flex', flexDirection: 'row'}}>
                          <FormControlLabel control={<Radio size={'small'}/>} label={'Return'} value={'return'} />
                          <FormControlLabel control={<Radio size={'small'}/>} label={'One-way'} value={'one-way'}/>
                      </RadioGroup>
                  </div>
              </div>
              <div className={'tw-flex tw-gap-2'}>
                  <TextField variant={'outlined'} label={'Departure'} size={'small'} color='action'/>
                  <TextField variant={'outlined'} label={'Arrival'} size={'small'} color='action'/>
                  <DatePicker variant={'outlined'} label={'Date'} slotProps={{textField: {size: 'small',color:'action'}}}/>
                  <div>
                      <Button variant={'contained'} sx={{background: '#F99A0E', width:'160px', height:'40px'}}>
                          <span>SEARCH FLIGHTS</span>
                      </Button>
                  </div>
              </div>
          </div>

      </div>
  )
}
export default SearchSection