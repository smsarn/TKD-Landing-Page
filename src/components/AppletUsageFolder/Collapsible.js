import React, { Component } from "react";

export class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.openCollapsible.open,
      id: this.props.openCollapsible.id,
    };
   
  }
  componentWillReceiveProps(nextProps) {
   
    if (this.state.open !== nextProps.openCollapsible.open)
    {
        this.setState({
        open: nextProps.openCollapsible.open,
        id: nextProps.openCollapsible.id,
      });
    }
  }

  togglePanel = async (e) => {
    if(this.props.enabled!==false)
      {
    await this.props.handleCollapsibleClick({
      id: this.state.id,
      open: this.state.open,
    });
    this.setState({ open: !this.state.open });
  }
  };
  render() {
    const styleBG=this.props.backgroundColor!==undefined?{backgroundColor: this.props.backgroundColor}:{}
    const arr = this.state.open ? (
      <span style={{ fontSize: "16px", float: "right", height: "46px"}}>&#9650;</span>
    ) : (
      <span style={{ fontSize: "16px", float: "right", height: "46px" }}>&#9660;</span>
    );
    return (
      <div style={{ marginTop:"4px"}}>
        <div onClick={this.togglePanel} className="header" style={styleBG}>
          {this.props.title}
    {/*       {this.props.infoIcon !== undefined && <Info infoIcon={this.props.infoIcon} /> } */}
             {arr}
        </div>
        {this.state.open ? (
          <div className="content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
