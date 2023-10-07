import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "reactstrap";
import AccordionComponent from "./AccordionComponent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const HackathonDialog = ({ open, setOpen, hackathon }) => {
  const formattedDatetime = new Date(hackathon.hackathonDate);
  const formattedString = formattedDatetime.toLocaleString();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        PaperProps={{
          sx: {
            backgroundColor: "#191D2F",
            color: "white",
            minWidth: "40rem",
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Row className="d-flex justify-content-center">
            <h6>{hackathon.hackathonTitle}</h6>
          </Row>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="text-white">
          <Row>
            <Col md={6}>
              <h6>Date / Time</h6>
              <p>{formattedString}</p>
            </Col>
            <Col md={6}>
              <h6>Target Audience</h6>
              <p>{hackathon.targetAudience}</p>
            </Col>
            <Col md={12}>
              <h6>Prize</h6>
              <p>{hackathon.hackathonPrize}</p>
            </Col>
            <Col md={12}>
              <h6>Description</h6>
              <p>{hackathon.hackathonDescription}</p>
            </Col>
          </Row>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} className="text-white">
            Add To List
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
};

export default HackathonDialog;
