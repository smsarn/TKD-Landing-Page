import React, { Component } from "react";
import {
  Dialog,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";



export class PopupUserinputDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.openDialog,
      name: "",
      showInfo: false,
      
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        open: nextProps.openDialog,
      });
    }
  }

  handleOK = () => {
     this.props.respondToInput(true);
   
     this.setState({
      open: !this.state.open,
    }); 
  };

  handleCancel = () => {
    this.props.respondToInput(false);
    this.setState({
      open: !this.state.open,
    });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  handleButton=(item)=> {
    this.props.respondToInput(item-1);
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const handleChange = (evt) => {
      this.setState({
        name: evt.target.value,
      });
    };
    
  
//console.log(this.props.inputFields)
 const style={fontFamily: "Trebuchet MS" }
    
return (
      <div>
        {/*  <Button/> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleToggle}
          aria-labelledby="confirm-dialog"
          style={style}
        >
          <DialogTitle id="confirm-dialog"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span className="dialog" style={{fontSize:"18px"}}>{this.props.title}</span>
              
         
            </DialogContentText>

            <form>
              {this.props.inputFields.map(dd => 
              <TextField style={{ paddingRight: "12px"}}
                id={dd.itemName}
                label={dd.title}
                value={dd.value}
              /*   onChange={handleChange} */
                margin="normal"
              ></TextField>)}
            </form>
         
          </DialogContent>
           
          <DialogActions
            style={{ paddingRight: "14px", paddingBottom: "14px",
       }}
          >


            <div>
            {this.props.inputButtons.map(dd => 
              <Button
                onClick={this.handleButton.bind(this,dd.itemName)} 
                variant="contained"
                style={{marginRight: "8px", width:this.props.buttonWidth,  fontFamily: "Trebuchet MS,Arial,Helvetica,sans-serif"}}
              >
                {" "}
                <span className="dialog" style={{marginBottom: "5px"}}> {dd.title} </span>
              </Button>)}
              </div>             

{/* 
             <div>
             
              <Button
                onClick={this.handleCancel}
                variant="contained"
                style={{marginRight: "8px" }}
              >
                {" "}
                <span className="dialog"> Cancel </span>
              </Button>
              <Button onClick={this.handleOK} variant="contained">
                {" "}
                <span className="dialog"> OK </span>
              </Button>
            </div> */}
          </DialogActions>
        </Dialog>
                 
      </div>
    );
  }
}
