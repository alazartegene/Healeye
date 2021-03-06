import React from 'react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import "./Service.css";
import GeneralEye from "../img/GeneralEye.png";
import Glacuma from "../img/Glacuma.png";
import Diabetic from "../img/Diabetic.png";
import Emergency from "../img/Emergency.png";
import Pediatric from "../img/Pediatric.png";
import Refraction from "../img/Refraction.png";
import Eyeglass from "../img/Eyeglass.png";
import Cataract from "../img/Cataract.png";


const theme = createTheme({
  typography: {
    h5: {
      fontFamily: "Lora",
      textTransform: "none",
      fontSize: 25,
    },
    body2: {
      fontFamily: ['Lato', 'sans-serif'],
      textTransform: "none",
      fontSize: 16,
      textAlign: "justify",
    },
  },
});

export default function Service() {
  return (
    <div className="MainDiv">
      <div className="UpperDiv">
        <div className="ServiceTitle">
          <h2> Services we Offer </h2>
        </div>
        <div>
          <h4>
            Our main philosophy is to preserve and uphold the eye care
            ethically, with high quality and better treatment. Giving accessible
            and high quality eye care service which excels with world class
            technology. This are our premium services.
          </h4>
        </div>
      </div>
      <div className="ServiceFull">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="General Eye Care"
            height="140"
            image={GeneralEye}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                General eye check up
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize="32"
                textAlign="justify"
                fontFamily="Lora,Ubuntu"
              >
                The General Eye Care Service provides diagnosis, treatment and
                monitoring follow-up care in these and other eye, eyelid and
                vision conditions.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Glaucoma screening and treatment"
            height="140"
            image={Glacuma}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Glaucoma screening and treatment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Glaucoma is treated by lowering your eye pressure (intraocular
                pressure). Depending on your situation, your options may include
                prescription eyedrops, oral medications, laser treatment,
                surgery or a combination of any of these. Eyedrops Glaucoma
                treatment often starts with prescription eyedrops.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Diabetic retinopathy screening"
            height="140"
            image={Diabetic}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Diabetic retinopathy screening
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Diabetic retinopathy can occur at any age. The primary
                prevention and screening process for diabetic retinopathy varies
                according to the age of disease onset. Several forms of retinal
                screening with standard fundus photography or digital imaging,
                with and without dilation, are under investigation as a means of
                detecting retinopathy.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Emergency eye care"
            height="140"
            image={Emergency}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Emergency eye care
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We offer emergency services that require immediate and urgent
                eye care. If your eye is injured, don't try to judge the
                severity of it. Immediately seek the opinion of an eye doctor to
                lessen the risk of hurting your vision. We understand ocular
                emergencies can arise at any time.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Pediatric eye care"
            height="140"
            image={Pediatric}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Pediatric eye care
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pediatric Eye Care Eye care for children and infants Thanks to
                improvements in technology over the last 20 years, we can now
                detect many eye and vision problems in the first months and
                years of life. A complete eye and vision exam can detect
                anything from blurred vision in an infant to astigmatism in a
                third grader.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Refraction"
            height="140"
            image={Refraction}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Refraction
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A refraction test is usually given as part of a routine eye
                examination. It may also be called a vision test. This test
                tells your eye doctor exactly what prescription you need in your
                glasses or contact lenses.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Quality eye glass service"
            height="140"
            image={Eyeglass}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Quality eye glass service
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our technicians can perform all types of repairs, with the most
                common repairs such as: Lens Replacements, Metal Frames Repairs,
                Plastic Frames Repairs, Screw replacements, and Scratch
                Removals. Our repair work is performed on-site by our
                experienced technicians, who have successfully completed a
                number of eyeglass and sunglass repairs.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Cataract and other minor surgical services"
            height="140"
            image={Cataract}
          />
          <CardContent>
            <ThemeProvider theme={theme}>
              <Typography gutterBottom variant="h5" component="div">
                Cataract and other minor surgical services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cataract surgery, usually an outpatient procedure, takes an hour
                or less to perform. First, your doctor will place eyedrops in
                your eye to dilate your pupil. You'll receive local anesthetics
                to numb the area, and you may be given a sedative to help you
                relax. If you're given a sedative, you may remain awake, but
                groggy, during surgery.
              </Typography>
            </ThemeProvider>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
