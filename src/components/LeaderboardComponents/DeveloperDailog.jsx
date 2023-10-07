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

const DeveloperDialog = ({ open, setOpen, user }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        PaperProps={{
          sx: {
            backgroundColor: '#191D2F',
            // background: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Row>
            <Col md={3}>
              <img
                src={`/images/profilePictures/${user.user.profile_image}`}
                style={{
                  width: "110px",
                  height: "100px",
                  objectFit: "cover",
                }}
                alt="profile"
              />
            </Col>
            <Col md={5}>
              <Row>
                <h6 className="mb-0 text-white">{user.user.name}</h6>
              </Row>
              <Row className="mb-0 text-white">
                <p>{user.skill.skill_name} Developer</p>
              </Row>
            </Col>
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
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
          <AccordionComponent user={user} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="text-white">
            Add To List
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DeveloperDialog;
