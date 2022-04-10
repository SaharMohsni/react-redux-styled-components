import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepperContainer } from "../../styles/cocktailCreationSection/StepperContainer.styled";
import { useMobile } from "../../../utils/useMobile";
import { SectionTitleContainer } from "../../styles/SectionTitleContainer.styled";

const CustomStepper = ({
  steps,
  validStep,
  setValidStep,
  setfilterIsCreated,
  setIsFetchedData,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isFinish = activeStep === steps.length - 1;
  const handleNextOrFinish = () => {
    if (isFinish) {
      setfilterIsCreated(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setValidStep(false);
      setfilterIsCreated(false);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setfilterIsCreated(false);
    setIsFetchedData(false);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isNextDisabled = !validStep;
  const isMobile = useMobile();

  return (
    <StepperContainer>
      <Box sx={{ width: "100%" }}>
        <SectionTitleContainer>
          <span>Make your selection</span>
          <LocalBarIcon />
        </SectionTitleContainer>
        {!isMobile && (
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
        )}

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
