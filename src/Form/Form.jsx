import React, { useState, useContext } from "react";
import Background from "../CustomComponents/Background";
import TextField from "@mui/material/TextField";
import DropDownMenu from "../CustomComponents/DropDownMenu";
import CustomButtonSubmit from "../CustomComponents/CustomSubmitButton";
import Context from "../Context/DataContext";
import "./Form.module.scss";
import CloserPopup from "../CustomComponents/CloserPopup";

const Form = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [link, setLink] = useState("");
  const [customDescription, setcustomDescription] = useState("");
  const [jobStatut, setJobStatus] = useState("");
  const localDataContext = useContext(Context);
  const NameHandler = (e) => {
    setName(e.target.value);
  };

  const skillHandler = (e) => {
    const newItems = e.target.value.trim().split(",");
    setSkills(newItems);
  };

  const LinkHandler = (e) => {
    setLink(e.target.value.trim());
  };

  const customDescriptionHandler = (e) => {
    setcustomDescription(e.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();

    const job = {
      id: Date.now(),
      companySite: name,
      skills: skills,
      link: link,
      customDescription: customDescription,
      status: jobStatut,
    };
    localDataContext.setLocalData((prevData) => [...prevData, job]);

    setName("");
    setSkills("");
    setLink("");
    setcustomDescription("");
    localDataContext.setShowItem("");
  };

  const textColorInput = {
    style: {
      color: "#fff",
      height: "50%",
    },
  };

  return (
    <Background>
      <form onSubmit={submitForm}>
        <CloserPopup />
        <TextField
          autoComplete="off"
          variant="outlined"
          label="Company name"
          value={name}
          onChange={NameHandler}
          InputLabelProps={textColorInput}
          required
          inputProps={{ maxLength: 25,
          style:{
            color:'whitesmoke'
          } }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="Skills"
          InputLabelProps={textColorInput}
          value={skills}
          onChange={skillHandler}
          required
          inputProps={{ maxLength: 100,
            style:{
              color:'whitesmoke'
            } }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="link"
          InputLabelProps={textColorInput}
          value={link}
          onChange={LinkHandler}
          required
          inputProps={{ maxLength: 150,
            style:{
              color:'whitesmoke'
            } }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="custom comment"
          InputLabelProps={textColorInput}
          value={customDescription}
          onChange={customDescriptionHandler}
          inputProps={{ maxLength: 50,
            style:{
              color:'whitesmoke'
            } }}
        ></TextField>
        <DropDownMenu onChange={setJobStatus} />
        <CustomButtonSubmit type="submit" variant="contained">
          Send
        </CustomButtonSubmit>
      </form>
    </Background>
  );
};

export default Form;
