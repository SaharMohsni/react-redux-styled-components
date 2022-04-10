import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { isObjctEmpty } from "../../../utils/isEmpty";
import { StepperContainer } from "../../styles/cocktailCreationSection/StepperContainer.styled";

const CustomStepper = ({ steps, validStep, setValidStep }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isFinish = activeStep === steps.length - 1;
  const handleNextOrFinish = () => {
    if (isFinish) {
      console.log("finish");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setValidStep(false);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isNextDisabled = !validStep;

  return (
    <StepperContainer>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={step.label} {...stepProps}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {steps[activeStep].content}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* isNextDisabled */}
              <Button
                onClick={handleNextOrFinish}
                disabled={isFinish ? false : isNextDisabled}
              >
                {isFinish ? "See result" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </StepperContainer>
  );
};

export default CustomStepper;
