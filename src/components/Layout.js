import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={2}>
            <NavMenu
              language={this.props.language}
              userGUID={this.props.userGUID}
              selectedApplet={this.props.selectedApplet}
              changeLang={this.props.changeLang}
              logoSource={this.props.logoSource}
              changeLogo={this.props.changeLogo}
              minimizeSideBar={this.props.minimizeSideBar}
              sideBarMinimized={this.props.sideBarMinimized}
              visible={this.props.visible}
              redirectTo={this.props.redirectTo}
              externalUser={this.props.externalUser}
              tokenValid={this.props.tokenValid}
              loginUsageAccess={this.props.loginUsageAccess}
              supressMenuSelect={this.props.supressMenuSelect}
            />{" "}
          </Col>
          <Col sm={10}>{this.props.children}</Col>
        </Row>
      </Grid>
    );
  }
}
