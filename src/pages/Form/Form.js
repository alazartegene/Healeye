
import { useState, useReducer } from "react";
<<<<<<< HEAD:src/pages/From.js
import { TextField, Alert, AlertTitle } from "@mui/material";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import Box from "@mui/material/Box";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// import { display, style } from "@mui/system";
import "./form.css";
import FiristButton from "../components/UI/FiristButton";

const reducer = (state, action) => {
  if (action.type === "FNAME") {
    const newPatient = { ...state.Patient, firstName: action.payload };
    return {
      ...state,
      Patient: newPatient,
    };
  }
  if (action.type === "LNAME") {
    const newPatient = { ...state.Patient, lastName: action.payload };
    return {
      ...state,
      Patient: newPatient,
    };
  }
  if (action.type === "AGE") {
    const newPatient = { ...state.Patient, age: action.payload };
    return {
      ...state,
      Patient: newPatient,
    };
  }
  if (action.type === "EMAIL") {
    const newPatient = { ...state.Patient, email: action.payload };
    return {
      ...state,
      Patient: newPatient,
    };
  }
  if (action.type === "PHONE") {
    const newPatient = { ...state.Patient, phone: action.payload };
    return {
      ...state,
      Patient: newPatient,
    };
  }
  if (action.type === "SUBMIT") {
    console.log(state.Patient);
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Form Submitted Successfully !",
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Fill the required Contents !",
    };
  }
};
=======

import "./form.css";
import { TextField, Alert, AlertTitle } from "@mui/material";
import { display, style } from "@mui/system";
>>>>>>> b40012804269834911aac640f6b16e5c53b36bfd:src/pages/Form/Form.js

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for Day.js
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// or for Luxon
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// or for Moment.js
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const Form = () => {
  const [value, setValue] = useState(null);
  const reducer = (state, action) => {  
    if (action.type === "FNAME") {
      const newPatient = { ...state.Patient, firstName: action.payload };
      return {
        ...state,
        Patient: newPatient,
      };
    }
    if (action.type === "LNAME") {
      const newPatient = { ...state.Patient, lastName: action.payload };
      return {
        ...state,
        Patient: newPatient,
      };
    }
    if (action.type === "AGE") {
      const newPatient = { ...state.Patient, age: action.payload };
      return {
        ...state,
        Patient: newPatient,
      };
    }
    if (action.type === "EMAIL") {
      const newPatient = { ...state.Patient, email: action.payload };
      return {
        ...state,
        Patient: newPatient,
      };
    }
    if (action.type === "PHONE") {
      const newPatient = { ...state.Patient, phone: action.payload };
      return {
        ...state,
        Patient: newPatient,
      };
    }
    if (action.type === "SUBMIT") {
      console.log(state.Patient);
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Form Submitted Successfully !",
      };
    }
    if (action.type === "ERROR") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please Fill the required Contents !",
      };
    }
  };

  let initialState = {
    Patient: {},
    isModalOpen: false,
    modalContent: "",
  };


  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    error: false,
  });

  const submitHanddler = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName) {
      dispatch({ type: "SUBMIT" });
      setFormData((prev) => {
        return { ...prev, firstName: "", lastName: "", error: false };
      });
    } else {
      dispatch({ type: "ERROR" });
      setFormData((prev) => {
        return { ...prev, error: true };
      });
    }
  };

  const fNameHanddler = (e) => {
    e.preventDefault();
    dispatch({ type: "FNAME", payload: e.target.value });
    setFormData((prev) => {
      return { ...prev, firstName: e.target.value };
    });
  };
  const lnameHanddler = (e) => {
    e.preventDefault();
    dispatch({ type: "LNAME", payload: e.target.value });
    setFormData((prev) => {
      return { ...prev, lastName: e.target.value };
    });
  };
  const ageHanddler = (e) => {
    e.preventDefault();
    dispatch({ type: "AGE", payload: e.target.value });
    setFormData((prev) => {
      return { ...prev, age: e.target.value };
    });
  };
  const emailHanddler = (e) => {
    e.preventDefault();
    dispatch({ type: "EMAIL", payload: e.target.value });
    setFormData((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const phoneHanddler = (e) => {
    e.preventDefault();
    dispatch({ type: "PHONE", payload: e.target.value });
    setFormData((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };

  return (
    <>
      <div className="container">
        {state.isModalOpen ? (
          <Alert
            sx={{
              fontSize: "1.8rem",

              "& .MuiAlert-icon": { fontSize: "5rem" },
            }}
            onClose={() => {}}
            className="warning"
            severity={formData.error ? "error" : "success"}
          >
            <AlertTitle sx={{ fontSize: "2rem", fontWeight: "600" }}>
              {formData.error ? "Error" : "Congratulations"}
            </AlertTitle>
            {formData.error
              ? "Please fill the Required Fields"
              : "Your form has been Submmitted!"}
          </Alert>
        ) : (
<<<<<<< HEAD:src/pages/From.js
          <h1 className="appointment-title">
            Please fill the form to schedule an Appointment{" "}
          </h1>
=======
          <p className="title">Make an Appointment </p>
>>>>>>> b40012804269834911aac640f6b16e5c53b36bfd:src/pages/Form/Form.js
        )}
        {!formData.error && state.isModalOpen ? (
          <div className="success">
            <a href="/book" className="btn btn-secondary">
              Submit Another
            </a>
            <a href="/" className="btn btn-primary">
              Home
            </a>
          </div>
        ) : (
          <div>
            <form className="form" onSubmit={submitHanddler}>
              <div className="form-item">
                <TextField
                  className="text-field"
                  type="text"
                  value={formData.firstName}
                  onChange={fNameHanddler}
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
              </div>
              <div className="form-item">
                <TextField
                  className="text-field"
                  type="text"
                  value={formData.lastName}
                  onChange={lnameHanddler}
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </div>
              <div className="form-item">
                <TextField
                  className="text-field"
                  type="number"
                  value={formData.age}
                  onChange={ageHanddler}
                  id="standard-basic"
                  label="Age"
                  variant="standard"
                />
              </div>
              <div className="form-item">
                <TextField
                  className="text-field"
                  type="email"
                  value={formData.email}
                  onChange={emailHanddler}
                  id="standard-basic"
                  label="Email Address"
                  variant="standard"
                />
              </div>
              <div className="form-item">
                <TextField
                  className="text-field"
                  type="number"
                  value={formData.phone}
                  onChange={phoneHanddler}
                  id="standard-basic"
                  label="Phone Number"
                  variant="standard"
                />
              </div>
<<<<<<< HEAD:src/pages/From.js
              {/* <div className="form-item">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Apointment Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <input ref={inputRef} {...inputProps} />
                        {InputProps?.endAdornment}
                      </Box>
                    )}
                  />
                </LocalizationProvider>
              </div> */}

              {/* <Button className="first-button" variant="contained" endIcon={<SendIcon />}></Button> */}
              <FiristButton />
=======
              <div className="form-item">
                <LocalizationProvider   className="datePicker" dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Choice of Appointment Day"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue)}}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <button className="btn btn-secondary form-btn" type="submit">
                Submit
              </button>
>>>>>>> b40012804269834911aac640f6b16e5c53b36bfd:src/pages/Form/Form.js
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
