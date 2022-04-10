import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { BackgoundWithImage } from "../../components/styles/BackgoundWithImage.styled";
import cocktailBarBackground from "../../assets/images/cocktailListSectionBackground.jpg";
import { SectionBackgroundColor } from "../../components/styles/SectionBackgroundColor.styled";
import { ContainerWithHorizontalContent } from "../../components/styles/ContainerWithHorizontalContent.styled";
import { ContentContainer } from "../../components/styles/ContentContainer.styled";

const CustomDialog = ({ open, setOpen }) => {
  

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <BackgoundWithImage backgroundImage={cocktailBarBackground}>
        <SectionBackgroundColor color="226, 229, 231">
          <ContainerWithHorizontalContent>
            <ContentContainer>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Opps No cocktail with those filters
                </DialogContentText>
              </DialogContent>
            </ContentContainer>
          </ContainerWithHorizontalContent>
        </SectionBackgroundColor>
      </BackgoundWithImage>
    </Dialog>
  );
};

export default CustomDialog;
