import React, { Component } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const ConfirmDialog = (props) => {
  return (
    <Dialog open={true} maxWidth="sm" fullWidth>
      <Box position="absolute" top={0} right={0}>
        <IconButton>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{props.message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => props.propsUnloadMessage(false)}
        >
          <span className="dialog">
            {" "}
            {props.language === "en" ? "Cancel" : "Cancel ^F"}
          </span>
        </Button>
        <Button
          variant="contained"
          onClick={() => props.propsUnloadMessage(true)}
        >
          <span className="dialog">
            {" "}
            {props.language === "en" ? "Confirm" : "Confirm ^F"}
          </span>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
