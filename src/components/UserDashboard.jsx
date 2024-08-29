import React, { useEffect, useState } from 'react';

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});


function UserDashboard() {
  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
       name: "name",
       label: "Name",
       options: {
        filter: true,
        sort: true,
       }
      },
     {
      name: "address",
      label: "Address",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "mobileNo",
      label: "Mobile No",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "alternateMobileNo",
      label: "Alternate Mobile No",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "schoolName",
      label: "School Name",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "standard",
      label: "Standard",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "dateOfBirth",
      label: "Date Of Birth",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "previousActivities",
      label: "Previous Activities",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "inSports",
      label: "In Sports",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "enterPreviousActivitiesDetails",
      label: "Enter Previous Activities Details",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "joiningDate",
      label: "Joining Date",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "selectInterestedSports",
      label: "Select Interested Sports",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "previousHealthInjuries",
      label: "Previous Health Injuries",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "medicalHistory",
      label: "Medical History",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "batchTiming",
      label: "Batch Timing",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "trainingPeriod",
      label: "Training Period",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "jerseySize",
      label: "Jersey Size",
      options: {
       filter: true,
       sort: true,
       display: false,
      }
     },
     {
      name: "amountToBePaid",
      label: "Amount to be Paid(Total)",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "paidAmount",
      label: "Paid Amount",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "nextEMIDate",
      label: "Next EMI Date",
      options: {
       filter: true,
       sort: true,
      }
     },
  ];

  const options = {
    search: true,
    download: true,
    print: true,
    viewColumns: true,
    filter: false,
    selectableRows: false,
    filterType: "dropdown",
    responsive: "responsive",
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    {id:"RNSA003", name:"Somi", address:"Maharashtra", mobileNo:"8657936393", alternateMobileNo:"8657936392",schoolName:"JNV", standard:"1st",dateOfBirth:"1st April", previousActivities:"yes", inSports:"yes", enterPreviousActivitiesDetails:"only testing", joiningDate:"1st April", selectInterestedSports:"Footbal", previousHealthInjuries: "Only testing",medicalHistory: "Only Testing", batchTiming:"Morning", trainingPeriod:"3 month", jerseySize:"xs", amountToBePaid:"30000", paidAmount:"25000", nextEMIDate:"5th Nov 2023"},
    ];


  return (
    <div className="container_layout">
      <h4 className="page_title">User Dashboard</h4>
      <div className='content_container'>
        <div className='col'>
        <div className='control-pane'>
        <div className='control-section'>
        <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        
        <MUIDataTable
          title={"User Summary Dashboard"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
