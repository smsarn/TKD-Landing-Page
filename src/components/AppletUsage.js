import React from "react";
//import toolkit from './toolkit.png';
import "./NA.css";
import Pdf from "./TKD Guidev2.1.pdf";
import PdfFr from "./TKD Guide FRN.pdf";
import {
  fetchAppletUsageFromDB,
  getAppletNames,
  OFFICE_NAMES,
  fetchRecordAppletUsageItselfToDB,
  fetchSaveResponseToFeedback
} from "../Utils/util";
import EnhancedTable from "./AppletUsageFolder/Table";
import { Collapsible } from "./AppletUsageFolder/Collapsible";
import { MultiButtons } from "./AppletUsageFolder/MultiButtons";
import { Bar } from "react-chartjs-2";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const NO_COLLAPSIBLES = 5;
const MIN_DATE_FROM = "2022-05-28";

export class AppletUsage extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    //this.dateToday = new Date().toISOString().slice(0, 10); // today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    this.dateToday =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      "-" +
      today.getDate().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    this.state = {
      loading: false,
      selectedAgent: 0,
      selectAgent: false,
      dateFrom: "2022-05-28",
      dateTo: this.dateToday,
      selectedApplet: 0,
      selectedOffice: 0,
      byAppletchecked: false,
      byOfficechecked: false,
    };
    this.totalCount = [0, 0, 0];
    this.openCollapsible = [
      { open: false, data: [], id: 0 },
      { open: false, data: [], id: 1 },
      { open: false, data: [], id: 2 },
      { open: false, data: [], id: 3 },
      { open: false, data: [], id: 4 },
    ];
    this.selectedMultiButton = 1;
    this.noBusDays = this.workingDaysFrom("2022-05-28", this.dateToday);
    this.agentList = [];

    // applets
    this.appletList = [];
    for (let i = 0; i < getAppletNames("en").length; i++) {
      this.appletList.push(getAppletNames("en")[i]);
    }
    // offices
    this.officeList = [];
    for (let i = 0; i < OFFICE_NAMES.length; i++) {
      this.officeList.push(OFFICE_NAMES[i]);
    }

    // record usage
    fetchRecordAppletUsageItselfToDB(this.props.token);
  }

  handleMultiButtonSelect = async (e) => {
    this.selectedMultiButton = e;
    if (e === 4) {
      if (this.agentList.length === 0) {
        await this.getAgentList();
      }
      this.setState({ selectAgent: true }, this.updateCollapsibles);
    } else {
      this.setState({ selectAgent: false }, this.updateCollapsibles);
    }
  };

  handleAgentDropDownChange = (e) => {
    this.setState(
      { selectedAgent: e.target.value, selectAgent: true },
      this.updateCollapsibles
    );
  };

  handleAppletDropDownChange = (e) => {
    this.setState({ selectedApplet: e.target.value }, this.updateCollapsibles);
  };

  handleOfficeDropDownChange = (e) => {
    this.setState({ selectedOffice: e.target.value }, this.updateCollapsibles);
  };

  handleFilterAppletChange = () => {
    this.setState(
      { byAppletchecked: !this.state.byAppletchecked },
      this.updateCollapsibles
    );
  };

  handleFilterOfficeChange = () => {
    this.setState(
      { byOfficechecked: !this.state.byOfficechecked },
      this.updateCollapsibles
    );
  };

  handleDatechange = (event) => {
    let i;
    var dTo;
    var dFrom;
    if (event.target.name === "dateFrom") {
      dTo = this.state.dateTo;
      dFrom = event.target.value;
      if (dFrom > dTo) dTo = dFrom;
    } else {
      dFrom = this.state.dateFrom;
      dTo = event.target.value;
      if (dFrom > dTo) dFrom = dTo;
    }
    if (dFrom.length === 0) dFrom = MIN_DATE_FROM;
    if (dTo.length === 0) dTo = this.dateToday;

    this.noBusDays = this.workingDaysFrom(dFrom, dTo);

    this.setState({ dateFrom: dFrom, dateTo: dTo }, this.updateCollapsibles);
  };

  handleCollapsibleClick = async (collapsible) => {
    const mode = collapsible.open;
    if (!mode) await this.handleCollapsibleData(collapsible);
    this.openCollapsible[collapsible.id].open = !mode;
  };

  handleCollapsibleData = async (collapsible) => {
    this.setState({ loading: true });
    let dataAll;
    const mode = collapsible.open;
    {
      let i = 0;
      let agentName = "";
      let appletName = "";
      let officeName = "";
      let reportType = "APPLET_COUNT";
      if (collapsible.id === 0) reportType = "APPLET_COUNT";
      else if (collapsible.id === 1) reportType = "USERS_COUNT";
      else if (collapsible.id === 2) reportType = "RUNS_COUNT";
      else if (collapsible.id === 3) reportType = "RUNS_GRAPH";
      else if (collapsible.id === 4) reportType = "FEEDBACK";

      let reportMembers = "ADVISORS";
      if (this.selectedMultiButton === 1) reportMembers = "ADVISORS";
      else if (this.selectedMultiButton === 2) reportMembers = "PPI_NODEVS";
      else if (this.selectedMultiButton === 3) reportMembers = "ALL_NODEVS";
      else if (this.selectedMultiButton === 4) {
        if (this.state.selectAgent) {
          agentName = this.agentList[this.state.selectedAgent];
          reportMembers = "SINGLE_AGENT";
        } else reportMembers = "ALL_NODEVS";
      }

      if (this.state.byAppletchecked) {
        appletName = this.appletList[this.state.selectedApplet];
      }
      if (this.state.byOfficechecked) {
        officeName = this.officeList[this.state.selectedOffice];
      }

      dataAll = await fetchAppletUsageFromDB(
        reportType,
        reportMembers,
        this.state.dateFrom,
        this.state.dateTo,
        agentName,
        appletName,
        officeName === "N/A" ? "NA" : officeName
      );


      if (collapsible.id < 2 && dataAll !== undefined && dataAll.length >= 0) {
        this.totalCount[collapsible.id] = 0;
        this.totalCount[3] = 0;
        if (dataAll.length > 0) {
          dataAll.forEach((element) => {
            this.totalCount[collapsible.id] +=
              collapsible.id === 0 ? element.count : 1;
            this.totalCount[3] += element.count;
            i++;
          });
        }
      }

      if (collapsible.id == 1) {
        const colorLevel = {
          Orange: "#f4ad70",
          Yellow: "lightyellow",
          Red: "#f77f7f",
          Blue: "#8dcff6",
          Purple: "#da77f3",
          Green: "#7aab8e",
          NA: "#f6f8fa",
        };

        if (dataAll.length > 0) {
          dataAll.map((obj) => ({ ...obj, colorDisplay: "" }));
          dataAll.forEach((element) => {
            element.colorDisplay = colorLevel[element.colorLevel];
          });
        }
      }

     // console.log(dataAll, this.agentList);
      this.openCollapsible[collapsible.id].data = dataAll;
      this.noBusDays = this.workingDaysFrom(
        this.state.dateFrom,
        this.state.dateTo
      );
      await this.setState({ loading: false });
    }
  };

  updateCollapsibles = () => {
    let i;

    for (i = 0; i < NO_COLLAPSIBLES; i++) {
      if (this.openCollapsible[i].open) {
        this.handleCollapsibleData(this.openCollapsible[i]);
      }
    }
  };
  workingDaysFrom = (fromDate, toDate) => {
    var frD = new Date(fromDate),
      toD = new Date(toDate),
      numOfWorkingDays = 1;

    // reset time portion
    frD.setHours(0, 0, 0, 0);
    toD.setHours(0, 0, 0, 0);

    while (frD < toD) {
      frD.setDate(frD.getDate() + 1);
      var day = frD.getDay();
      if (day != 0 && day != 6) {
        numOfWorkingDays++;
      }
    }
    return numOfWorkingDays;
  };

  getAgentList = async () => {
    let i = 0;
    let agentName = "";
    let appletName = "";
    let officeName = "";
    let reportType = "USERS_COUNT";
    let reportMembers = "ALL_NODEVS";

    let dataAll = await fetchAppletUsageFromDB(
      reportType,
      reportMembers,
      MIN_DATE_FROM,
      this.dateToday,
      agentName,
      appletName,
      officeName
    );

    // if first time save agent list
    for (let i = 0; i < dataAll.length; i++) {
      this.agentList.push(dataAll[i].agentName);
    }

   // console.log(dataAll, this.agentList);
  };


saveResponseToFeedback=(response)=>{
    console.log(response)
    response.forEach(element => {
      fetchSaveResponseToFeedback({id:element.id,response:element.response})
      
    });

}

  sort = (k, data, newSort, options) => {
  //  console.log(k, data, newSort);
  //  console.log(Object.keys(options.header)[0]);
    if (k === "agentName") {
      data.sort((a, b) => {
      //  console.log(a);
        let fa = a.agentName === null ? "" : a.agentName.toLowerCase(),
          fb = b.agentName === null ? "" : b.agentName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      newSort.ordered = 0;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    } else if (k === "appletNameEn") {
      data.sort((a, b) => {
        let fa = a.appletNameEn === null ? "" : a.appletNameEn.toLowerCase(),
          fb = b.appletNameEn === null ? "" : b.appletNameEn.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      newSort.ordered = 0;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    } else if (k === "loginDate") {
      data.sort((a, b) => {
        let da = new Date(a.loginDate),
          db = new Date(b.loginDate);
        return da - db;
      });
      newSort.ordered = 2;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    } else if (k === "province") {
      data.sort((a, b) => {
        let fa = a.province === null ? "" : a.province.toLowerCase(),
          fb = b.province === null ? "" : b.province.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      newSort.ordered = 0;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    } else if (k === "colorLevel") {
      data.sort((a, b) => {
        let fa = a.colorLevel === null ? "" : a.colorLevel.toLowerCase(),
          fb = b.colorLevel === null ? "" : b.colorLevel.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      newSort.ordered = 0;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    } else if (k === "count") {
      data.sort((a, b) => b.count - a.count);
      newSort.ordered = 4;
      newSort.direction = newSort.direction === 0 ? 1 : 0;
      if (newSort.direction === 1) data.reverse();
    }
    return { data: data, newSort: newSort };
  };

  render() {
    const lang = this.props.language === "en" ? "Français" : "English";

    const optionsAll = {
      filter: true,
      sort: true,
      header: {
        Row_Counter: {
          title: "",
          align: "left",
        },
        agentName: {
          title: "Name",
          align: "left",
        },
        province: {
          title: "Province",
          align: "left",
        },
        appletNameEn: {
          title: "Applet",
          align: "left",
        },
        loginDate: { title: "Date", align: "left" },
      },
      data: {
        Row_Counter: { align: "left" },
        agentName: { align: "left" },
        province: { align: "left" },
        appletNameEn: { align: "left" },
        loginDate: { align: "left" },
      },
    };
    const optionsDistinct = {
      filter: true,
      sort: true,
      header: {
        agentName: {
          title: "Name",
          align: "left",
        },
        colorLevel: {
          title: "Level",
          align: "left",
        },
        province: {
          title: "Province",
          align: "left",
        },
        count: {
          title: "Count",
          align: "left",
        },
      },
      data: {
        agentName: { align: "left" },
        colorLevel: { align: "left" },
        province: { align: "left" },
        count: { align: "left" },
      },
    };

    const optionsFeedback = {
      filter: true,
      sort: true,
      header: {
        agentName: {
          title: "Advisor",
          align: "left",
        },
        agentEmail: {
          title: "Email",
          align: "left",
        },
        appletName: {
          title: "Applet",
          align: "left",
        },
        date: {
          title: "Date",
          align: "left",
        },
        feedback: {
          title: "Comment",
          align: "left",
        },
        esponse: {
          title: "Log Response",
          align: "left",
        },
      },
      data: {
        agentName: { align: "left" },
        agentEmail: { align: "left" },
        appletName: { align: "left" },
        date: { align: "left" },
        feedback: { align: "left" },
        response: { align: "left" },
      },
    };

    let widthAll = ["4%", "36%", "10%", "30%", "20%"];
    let minWidthAll = ["55px", "110px", "100px", "110px", "100px"];
    let widthDistinct = ["50%", "23%", "14%", "13%"];
    let minWidthDistinct = ["180px", "80px", "85px", "80px"];
    let widthFeedback = ["18%", "17%", "15%","10%", "20%", "20%"];
    let minWidthFeedback = ["120px","120px", "80px", "60px", "180px", "180px"];

    const optionsCount = {
      filter: true,
      sort: true,
      header: {
        appletNameEn: {
          title: "Applet",
          align: "left",
        },
        count: {
          title: "Count",
          align: "left",
        },
      },
      data: {
        appletNameEn: { align: "left" },
        count: { align: "left" },
      },
    };
    let widthCount = ["50%", "15%"]; //,"15%"]
    let minWidthCount = ["180px", "110px"]; //,"110px"]

    const optionsTotal = {
      filter: true,
      data: {
        appletNameEn: { align: "right" },
        countTotal: { align: "left" },
      },
    };

    const optionsTotal2 = {
      filter: true,
      data: {
        a1: { align: "right" },
        a2: { align: "right" },
        a3: { align: "right" },
        countTotal: { align: "left" },
      },
    };

    let style = {
      fontFamily: "Trebuchet MS",
      color: "#4775ae",
      marginBottom: "18px",
    };
    let style2 = {
      fontFamily: "Trebuchet MS",
      fontSize: "14px",
      color: "#2F4755",
      marginLeft: "10px",
    };

    const colorLevel = {
      Orange: "#f4ad70",
      Yellow: "lightyellow",
      Red: "#f77f7f",
      Blue: "#8dcff6",
      Purple: "#da77f3",
      Green: "#8bf39f",
      NA: "white",
    };
    let colors = [];
    //console.log(colorLevel, this.openCollapsible[1].data);
    for (let index = 0; index < this.openCollapsible[1].data.length; ++index) {
      colors.push(colorLevel[this.openCollapsible[1].data[index].colorLevel]);
    }
    //console.log(colors, this.openCollapsible[1].data);

    // graph
    let optionsFV;
    let dataAppletRuns;
    let dataX = [];
    let dataY = [];

    if (
      this.openCollapsible[3].data !== undefined &&
      this.openCollapsible[3].data.length > 0
    ) {
      optionsFV = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        borderWidth: 2,
        borderColor: "black",
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 5,
                time: {
                  unit: "day",
                  unitStepSize: 5,
                },
              },
            },
          ],
          yAxes: [
            {
              stacked: false,
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
              },
            },
          ],
        },
      };
      let i = 12;
      var date1=  new Date(this.state.dateFrom);
      var date =new Date( date1.getTime() - date1.getTimezoneOffset() * -60000 )
        
      let barColours = [];
      for (let k = 0; k < this.noBusDays; k++) {
         if (date.getDay() === 6) date.setDate(date.getDate() + 1);
        if (date.getDay() === 0) date.setDate(date.getDate() + 1);
        if (date.getDay() === 1) 
        dataX.push("Monday"+date.toISOString().substring(0, 10).substring(4));
        else
          dataX.push(date.toISOString().substring(0, 10));
        barColours.push([
          date.getDay() === 1
            ? "rgba(224, 104, 98, .9)"
            : "rgba(244, 144, 128, 0.7)",
        ]);
        if (k < this.openCollapsible[3].data.length)
          dataY.push(this.openCollapsible[3].data[k].countPerWeekday);
        else dataY.push(0);
        date.setDate(date.getDate() + 1);
       
      }

      //console.log(dataX, dataY, this.state.dateFrom);

      dataAppletRuns = {
        labels: dataX, // this.dataAges,
        datasets: [
          {
            label: "",

            data: dataY,

            fill: true, // Don't fill area under the line
            borderColor: "darkred", // Line color
            borderWidth: 1,
            backgroundColor: barColours,
            hoverBackgroundColor: "darkred",
          },
        ],
      };
    }
    // graph end

    const graphShow = dataX.length > 0 && dataY.length > 0 ? true : false;
    return (
      <div className="appletDiv" style={{ overflow: "auto" }}>
        <div className="UsageDiv">
          <h2 style={style}>Applet Usage:
          {this.state.loading && <span class="loader2"></span>}</h2>
          
          <div
            style={{
              fontSize: "16px",
              width: "100%",
              float: "left",
              clear: "left",
            }}
          >
            <MultiButtons
              //style={{ fontSize: "18px" }}
              noButtons={4}
              buttonCaption={[
                "Advisors",
                "PPI (sales)",
                "Both",
                "Select Advisor",
              ]}
              selected={this.selectedMultiButton}
              selectMultiButton={this.handleMultiButtonSelect}
            />

            {this.state.selectAgent ? (
              <div style={{ marginTop: "6px", fontSize: "12px" }}>
                <select
                  style={{ height: "24px", marginLeft: "5px" }}
                  name="agents"
                  id="agents"
                  value={this.state.selectedAgent}
                  onChange={this.handleAgentDropDownChange}
                >
                  {this.agentList.map((item, index) => {
                    return <option value={index}>{item}</option>;
                  })}
                </select>
              </div>
            ) : (
              ""
            )}
          </div>

          <br />
          <span style={style2}>
            Filter by Applet:{" "}
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.byAppletchecked}
                  onChange={this.handleFilterAppletChange}
                  size="small"
                  color="default"
                />
              }
              label=""
            />{" "}
            {this.state.byAppletchecked ? (
              <select
                style={{
                  height: "24px",
                  marginLeft: "-5px",
                  marginRight: "20px",
                }}
                name="applets"
                id="applets"
                value={this.selectedApplet}
                onChange={this.handleAppletDropDownChange}
              >
                {this.appletList.map((item, index) => {
                  return <option value={index}>{item}</option>;
                })}
              </select>
            ) : (
              ""
            )}
            {"        "}
            Filter by Office:{" "}
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.byOfficechecked}
                  onChange={this.handleFilterOfficeChange}
                  size="small"
                  color="default"
                />
              }
              label=""
            />{" "}
            {this.state.byOfficechecked ? (
              <select
                style={{ height: "24px", marginLeft: "-5px" }}
                name="officees"
                id="office"
                value={this.state.selectedOffice}
                onChange={this.handleOfficeDropDownChange}
              >
                {this.officeList.map((item, index) => {
                  return <option value={index}>{item}</option>;
                })}
              </select>
            ) : (
              ""
            )}
          </span>
          <br />
          <span style={style2}>
            From:{" "}
            <input
              style={{ backgroundColor: "#e2e2e2" }}
              name="dateFrom"
              type="date"
              min={MIN_DATE_FROM}
              value={this.state.dateFrom}
              onChange={this.handleDatechange}
            />
          </span>
          <span style={style2}>
            {"  "}
            To:{" "}
            <input
              style={{ backgroundColor: "#e2e2e2" }}
              name="dateTo"
              type="date"
              value={this.state.dateTo}
              onChange={this.handleDatechange}
            />
            <span style={{ margin: "6px" }}>{this.noBusDays} weekdays </span>
            <span
              style={{ float: "right", marginTop: "6px", marginBottom: "14px" }}
            >
              {"Click Titles to Sort"}{" "}
            </span>
          </span>
          <br />
          <Collapsible
            id={0}
            title={"How many times each Applet was run:"}
            // openParent={this.openParent}
            openCollapsible={this.openCollapsible[0]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {this.state.loading === false &&
              this.openCollapsible[0].data !== undefined && (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",
                    maxHeight: "52vh",
                  }}
                >
                  <EnhancedTable
                    color={""}
                    data={this.openCollapsible[0].data}
                    options={optionsCount}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthCount}
                    minWidth={minWidthCount}
                  />
                  <hr style={{ margin: "7px" }} />
                  <EnhancedTable
                    color={"countTotal"}
                    data={[
                      {
                        appletNameEn: "TOTAL:  ",
                        countTotal: this.totalCount[0],
                        colorDisplay: "#c1cdd3",
                      },
                    ]}
                    options={optionsTotal}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthCount}
                    minWidth={minWidthCount}
                  />
                </div>
              )}
          </Collapsible>

          <Collapsible
            id={1}
            title={"Who ran the Applets:"}
            // openParent={this.openParent}
            openCollapsible={this.openCollapsible[1]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {this.state.loading === false &&
              this.openCollapsible[1].data !== undefined && (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",
                    maxHeight: "52vh",
                  }}
                >
                  <EnhancedTable
                    color={"colorLevel"}
                    data={this.openCollapsible[1].data}
                    options={optionsDistinct}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthDistinct}
                    minWidth={minWidthDistinct}
                  />
                  <hr style={{ margin: "7px" }} />
                  <EnhancedTable
                    color={"countTotal"}
                    data={[
                      {
                        a1: "Total number of Users:   " + this.totalCount[1],
                        a2: "",
                        a3: "",
                        countTotal:
                          "Total number of Applets:  " + this.totalCount[3],
                        colorDisplay: "#c1cdd3",
                      },
                    ]}
                    options={optionsTotal2}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthDistinct}
                    minWidth={minWidthDistinct}
                  />
                </div>
              )}
          </Collapsible>

          <Collapsible
            id={2}
            title={"List of users and Applet runs:"}
            // openParent={this.openParent}
            openCollapsible={this.openCollapsible[2]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {this.state.loading === false &&
              this.openCollapsible[2].data !== undefined && (
                <div
                  style={{
                    overflow: "auto",
                    paddingLeft: "3%",
                    width: "100%",
                    maxHeight: "52vh",
                  }}
                >
                  <EnhancedTable
                    data={this.openCollapsible[2].data}
                    options={optionsAll}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthAll}
                    minWidth={minWidthAll}
                  />
                </div>
              )}
          </Collapsible>

          <Collapsible
            id={3}
            title={"Graph of Applet runs:"}
            // openParent={this.openParent}
            openCollapsible={this.openCollapsible[3]}
            handleCollapsibleClick={this.handleCollapsibleClick}
          >
            {this.state.loading === false &&
              graphShow &&
              this.openCollapsible[3].data !== undefined && (
                <div
                  style={{
                    paddingLeft: "3%",
                    width: "100%",
                    maxHeight: "52vh",
                  }}
                >
                  <article
                    className="canvas-container"
                    style={{ height: "200px" }}
                  >
                    <Bar data={dataAppletRuns} options={optionsFV} />
                  </article>
                </div>
              )}
          </Collapsible>
          <br/><br/><br/><br/>        
          {this.props.feedbackAccess && <Collapsible
            id={4}
            title={"Toolkit Direct Feedback:"}
            openCollapsible={this.openCollapsible[4]}
            handleCollapsibleClick={this.handleCollapsibleClick}
            backgroundColor= "rgba(97,44,81, 1)"
          >
            {this.state.loading === false &&
              this.openCollapsible[4].data !== undefined && (
                <div
                  style={{
                    overflow: "auto",
                    //paddingLeft: "3%",
                    width: "100%",
                    maxHeight: "52vh",
                  }}
                >
                  <EnhancedTable
                    data={this.openCollapsible[4].data}
                    options={optionsFeedback}
                    sort={this.sort}
                    language={this.props.language}
                    width={widthFeedback}
                    minWidth={minWidthFeedback}
                    saveResponse={this.saveResponseToFeedback}
                    addTextAreaToColumn={"response"}
                  />
                </div>
              )}
          </Collapsible>}
        </div>
      </div>
    );
  }
}
