import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./Table.css";
import { PopupUserinputDialog } from "./PopupUserInput";

const styles = (theme) => ({
  customTableContainer: {
    overflowX: "initial",
  },
  rootTableHead: {
    backgroundColor: "#4775ae",
    fontFamily: "Trebuchet MS,Arial,Helvetica,sans-serif",
    fontSize: "14px",
    lineHeight: ".6rem",
    paddingLeft: "10px",
  },
  rootTableCell: {
    border: "3px solid #fff",
    fontFamily: "Trebuchet MS,Arial,Helvetica,sans-serif",
    fontSize: "16px",
    padding: ".15em .15em .15em .45em",
  },
  MuiPaper: {
    elevation0: {
      boxShadow: "unset",
      borderTop: "1px solid rgb(150, 150, 150)",
      borderRight: "1px solid rgb(136, 136, 136)",
      borderBottom: "1px solid rgb(150, 150, 150)",
      borderLeft: "1px solid rgb(136, 136, 136)",
    },
    rounded: { borderRadius: "2px" },
  },
  headTableCell: {
    color: "#fff",
    fontWeight: 600,
    lineHeight: 1.05,
    "&:hover": {
      backgroundColor: "#d2d2d2",
      webkitTransition: "background-color 200ms ease-out",
      mstransition: "background-color 200ms ease-out",
      transition: "background-color 200ms ease-out",
      cursor: "pointer",
    },
  },
  rootTableRow: {
    backgroundColor: (props) => {
      if (props.data.colorLevel === "NA") {
        return "white";
      } else {
        return props.data.colorLevel;
      }
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#e2e2e2",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#f3f7f4",
    },
    "&:nth-of-type(odd):hover": {
      backgroundColor: "#d2d2d2",
      webkitTransition: "background-color 200ms ease-out",
      mstransition: "background-color 200ms ease-out",
      transition: "background-color 200ms ease-out",
    },
    "&:nth-of-type(even):hover": {
      backgroundColor: "#d3dcd5",
      webkitTransition: "background-color 200ms ease-out",
      mstransition: "background-color 200ms ease-out",
      transition: "background-color 200ms ease-out",
    },
    "& > th:not(:last-child)": {
      borderRight: "3px solid #fff",
    },
    "& > th:not(:first-child)": {
      borderLeft: "3px solid #fff",
    },
    "& > td:not(:last-child)": {
      borderRight: "3px solid #fff",
    },
    "& > td:not(:first-child)": {
      borderLeft: "3px solid #fff",
    },
    "&$tableRowSelected, &$tableRowSelected:hover": {
      backgroundColor: "lightYellow",
    },
  },
  tableRowSelected: {
    backgroundColor: "lightYellow",
  },
});

class EnhancedTable extends Component {
  constructor(props) {
    super(props);
    let col = [];
    if (this.props.addTextAreaToColumn !== undefined) {
      this.props.data.map((k) => {
        col.push({
          id: k["id"],
          response: k[this.props.addTextAreaToColumn],
          changed: false,
        });
      });
    }

    this.state = {
      data: this.props.data,
      sorts: { ordered: 0, direction: 0 },
      sourceRow: -1,
      showConfirm: false,
      inputColumn: col,
      saved: true,
    };

    this.message = "";
    this.selectedRow = this.props.selectedRows;
  }

  componentWillReceiveProps(props) {
    if (
      props.selectedRows !== this.props.selectedRows ||
      props.data !== this.props.data
    ) {
      this.selectedRow = props.selectedRows;
      this.setState({ data: props.data });
    }
  }

  clickImageHover = (k) => {
    //console.log(k)
    this.setState({ sourceRow: k });
  };

  clickHeader = (k) => {
    //const reverse=!this.state.reverse;
    let data = this.state.data;
    let newSort = this.state.sorts;

    let sort = this.props.sort(k, data, newSort, this.props.options);
    data = sort.data;
    newSort = sort.newSort;

    this.setState({ data: data, sorts: newSort });
  };

  propsUnloadMessage = (mode) => {
    this.setState({ showConfirm: false });
    if (mode) {
      this.props.deleteCase(this.state.sourceRow);
    }
    //this.props.deleteCase(k.id)
    this.selectedRow = [];
  };

  clickLoadCase = (k) => {
    this.props.openCaseForEdit(this.props.GUID(k), k.applet);
  };

  clickSelectCase = (row) => {
    this.selectedRow = [];
    this.selectedRow.push(this.props.GUID(row));
    this.props.updateSelectedRow(this.props.GUID(row), row.applet);
  };

  updateInputValue = async (e, k) => {
    //console.log(k)
    let col = this.state.inputColumn;

    col[k].changed = col[k].response !== e.target.value;
    col[k].response = e.target.value;
    this.setState({ inputColumn: col });
    await this.setState({ inputColumn: col });

    //console.log(col,this.state.inputColumn)
  };

  save = () => {
    if (this.state.inputColumn.length > 0) {
      this.setState({ saved: false });
      this.props.saveResponse(
        this.state.inputColumn.filter((item) => {
          return item.changed;
        })
      );

      setTimeout(() => {
        this.setState({ saved: true });
      }, 1500);
    }
  };

  render() {
    const { classes } = this.props;
    const lang = this.props.language;
    const inputFields = [];
    const colorLevel = {};

    return (
      <div>
        <TableContainer classes={{ root: classes.customTableContainer }}>
          <Table
            aria-label="customized table"
            stickyHeader
            aria-label="sticky table"
            style={{
              tableLayout: "fixed",
              width: this.state.inputColumn.length > 0 ? "100%" : "95%",
              overflowX: "auto",
            }}
          >
            <colgroup>
              <col
                style={{
                  width: this.props.width[0],
                  minWidth: this.props.minWidth[0],
                }}
              />
              <col
                style={{
                  width: this.props.width[1],
                  minWidth: this.props.minWidth[1],
                }}
              />
              <col
                style={{
                  width: this.props.width[2],
                  minWidth: this.props.minWidth[2],
                }}
              />
              <col
                style={{
                  width: this.props.width[3],
                  minWidth: this.props.minWidth[3],
                }}
              />
              <col
                style={{
                  width: this.props.width[4],
                  minWidth: this.props.minWidth[4],
                }}
              />
              <col
                style={{
                  width: this.props.width[5],
                  minWidth: this.props.minWidth[5],
                  maxWidth: this.props.minWidth[5],
                }}
              />
              <col
                style={{
                  width: this.props.width[6],
                  minWidth: this.props.minWidth[6],
                  maxWidth: this.props.minWidth[6],
                }}
              />
            </colgroup>
            {this.props.options.header !== undefined && (
              <TableHead>
                <TableRow classes={{ root: classes.rootTableRow }}>
                  {Object.keys(this.props.options.header).map((k) => (
                    <TableCell
                      onClick={this.clickHeader.bind(this, k)}
                      classes={{
                        root: classes.rootTableHead,
                        head: classes.headTableCell,
                      }}
                      align={this.props.options.header[k].align}
                    >
                      {this.props.options.header[k].title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            )}

            {this.state.showConfirm && (
              <PopupUserinputDialog
                openDialog={this.state.showConfirm}
                language={lang}
                respondToInput={this.propsUnloadMessage}
                inputFields={inputFields}
                // inputButtons={inputButtons}
                title={this.message}
                buttonWidth="130px"
              />
            )}

            <TableBody>
              {this.state.data.map((row, i) => {
                return (
                  <TableRow
                    classes={{
                      root: classes.rootTableRow,
                      selected: classes.tableRowSelected,
                    }}
                    key={i}
                  >
                    {Object.keys(this.props.options.data).map((k) => {
                      return (
                        <TableCell
                          classes={{ root: classes.rootTableCell }}
                          style={
                            k !== this.props.color
                              ? {
                                  whiteSpace: "normal",
                                  wordWrap: "break-word",
                                }
                              : {
                                  backgroundColor:
                                    this.props.data[i].colorDisplay,
                                  whiteSpace: "normal",
                                  wordWrap: "break-word",
                                }
                          }
                          align={this.props.options.data[k].align}
                        >
                          {k === this.props.addTextAreaToColumn ? (
                            <textarea
                              id={5}
                              className="inputFieldInTable"
                              onFocus={this.handleFocus}
                              onClick={this.select}
                              type="text"
                              value={this.state.inputColumn[i].response}
                              onChange={(evt) => this.updateInputValue(evt, i)}
                            />
                          ) : (
                            row[k]
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {this.props.addTextAreaToColumn !== undefined && (
          <div>
            <span
              style={{
                marginLeft: "15px",
                visibility: this.state.saved ? "hidden" : "visible",
              }}
            >
              {lang === "en" ? " ...saved" : " ...enregistré"}
            </span>
            <input
              className="roundedCornerCmd"
              onClick={this.save}
              type="button"
              value={lang === "en" ? "Save" : "Enregistrer"}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EnhancedTable);
