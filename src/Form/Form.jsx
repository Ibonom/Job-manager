import React, { useState, useRef, useEffect } from "react";
import Background from "./Background";
import TextField from '@mui/material/TextField';
import DropDownMenu from "../CustomComponents/DropDownMenu";
import CustomButtonSubmit from "../CustomComponents/CustomSubmitButton";

const Form = (props) => {
    const [name, setName] = useState('')
    const [skills, setSkills] = useState('')
    const [link, setLink] = useState('')
    const [customDescription, setcustomDescription] = useState('')
    const [jobStatut, setJobStatus] = useState('')

    const NameHandler = (e) => {
        setName(e.target.value)
    }

    const skillHandler = (e) => {
        const newItems = e.target.value.trim().split(',')
        setSkills(newItems)
    }

    const LinkHandler = (e) => {
        setLink(e.target.value.trim())

    }
    
    const customDescriptionHandler = (e) => {
        setcustomDescription(e.target.value)
    }
    const submitForm = (event) => {
        event.preventDefault();

        const job = {
            id: Date.now(),
            companySite: name,
            skills: skills,
            link: link,
            customDescription: customDescription,
            status: jobStatut
        }
        props.data(job)
        setName('')
        setSkills('')
        setLink('')
        setcustomDescription('')
        props.back(false)
    }
    const BackgroundCloser = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {

                if (ref.current && !ref.current.contains(event.target)) {
                    props.back(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
        //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    }
    const wrapperRef = useRef(null);
    BackgroundCloser(wrapperRef);

    const colorChanger = {
        style: {
            color: '#fff',
            height: '50%',
        },
    }


    return (
        <Background >
            <form onSubmit={submitForm} ref={wrapperRef}>
                <TextField variant="outlined" label='Company name' value={name} onChange={NameHandler} InputLabelProps={colorChanger} required inputProps={{ maxLength: 20 }}></TextField>
                <TextField variant="outlined" label='Skills' InputLabelProps={colorChanger} value={skills} onChange={skillHandler} required inputProps={{ maxLength: 30 }}></TextField>
                <TextField variant="outlined" label='link' InputLabelProps={colorChanger} value={link} onChange={LinkHandler} required inputProps={{ maxLength: 100 }}></TextField>
                <TextField variant="outlined" label='custom comment' InputLabelProps={colorChanger} value={customDescription} onChange={customDescriptionHandler} inputProps={{ maxLength: 50 }}></TextField>
                <DropDownMenu onChange={setJobStatus} />
                <CustomButtonSubmit type='submit' variant="contained">Send</CustomButtonSubmit>
            </form>
        </Background>

    )
}


export default Form