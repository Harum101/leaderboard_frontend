import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Progress, Row } from "reactstrap";
import AccordionComponent from "./AccordionComponent";
import unravel from "assets/img/backgrounds/unravel.png";

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
            backgroundImage: `url(${unravel})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // background: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
          },
        }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0 }}
          style={{ padding: "4rem", paddingTop: "3rem", paddingBottom: "1rem" }}
          id="customized-dialog-title"
        >
          <Row>
            <Col md={3} className="d-flex d-sm-flex justify-content-center">
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
            <Col
              md={5}
              className="mt-2 d-flex d-sm-flex justify-content-center"
            >
              <Row>
                <Col md={12} className="d-flex justify-content-center">
                  <h6 className="mb-0 text-white">{user.user.name}</h6>
                </Col>
                <Col
                  md={12}
                  className="mb-0 text-white d-flex justify-content-center"
                >
                  <p>{user.skill.skill_name} Developer</p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <p className="text-white mb-0 text-right" style={{}}>
                Score: {user.score}
              </p>
              <Progress color="danger" value={(user.score / 150) * 100} />
              <p className="text-white mb-0 mt-3 text-right ">
                Rank: {user.rank}
              </p>
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
        <DialogContent dividers className="text-white px-5">
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
