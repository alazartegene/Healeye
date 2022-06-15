import { useState, useReducer } from "react";
import { TextField, Alert, AlertTitle } from "@mui/material";
import "./form.css";
import FiristButton from "../../components/UI/FiristButton";

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
          <h1 className="title">
            Please fill the form to schedule an Appointment{" "}
          </h1>
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
                  type="number"
                  value={formData.phone}
                  onChange={phoneHanddler}
                  id="standard-basic"
                  label="Phone Number"
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
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
