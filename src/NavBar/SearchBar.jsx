import React, { useEffect, useState, useContext } from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Typography, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';
import clasess from './NavBar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import Context from "../Context/DataContext";




const SearchBar = () => {

    const [radioCheck, setRadioCheck] = useState('companySite')
    const [inputCheck, setInputCheck] = useState('')

    const searchContext = useContext(Context)

    useEffect(() => {
        const identifier = setTimeout(() => {
            searchContext.setClonedData(searchContext.localdata.filter(oneObject => {
                return radioCheck === 'skills' ? oneObject.skills.some((value) => { return value.toLowerCase().includes(inputCheck.toLowerCase()) }) : oneObject[radioCheck].toLowerCase().includes(inputCheck.toLowerCase())
                
            }))
        }, 500)

        return () => {
            clearTimeout(identifier)
        }

    }, [inputCheck])

    const InputHandler = (e) => {
        setInputCheck(e.target.value)
    }


    const changeRadioHandler = (event) => {
        setRadioCheck(event.target.value)
    }

    const radioObject = {
        '& .MuiSvgIcon-root': {
            fontSize: '20px',
        },
    }

    return (
        <div className={clasess['righSiteNav']}>
            <TextField
                onChange={InputHandler}
                hiddenLabel
                variant="filled"
                size='small'
                fullWidth
                InputProps={{
                    style: {
                        fontSize: 25,
                        color: "white",
                        maxWidth: '350px',
                        alignSelf: 'center'
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    )
                }}
            />
            <RadioGroup onChange={changeRadioHandler} row value={radioCheck}>
                <FormControlLabel control={<Radio sx={radioObject} />} value='companySite' label={<Typography fontSize={'15px'}>Company Name</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='skills' label={<Typography fontSize={'15px'}>skills</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='link' label={<Typography fontSize={'15px'}>link</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='customDescription' label={<Typography fontSize={'15px'}>Custom comment</Typography>} />
            </RadioGroup>
        </div>
    )
}


export default SearchBar