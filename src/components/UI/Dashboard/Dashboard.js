import React from 'react';
import Card from '../Card/Card';
import './Dashboard.css';
import Table from '../Table/Table';

const dashboard = (props) => {
    const data={
        fields:
        {name:"Project Name", start:"Start Date", end:"End Date", state:"Status", manager:"Assignee"},
        data:
        [
            {name:"Project Apollo", start: "01/01/2018", end:"06/31/2018", state:"done", manager:"carl jenkins"},
            {name:"Project Fireball", start: "01/03/2018", end:"06/31/2020", state:"cancelled", manager:"bertha martin"},
            {name:"Project Hades", start: "01/04/2018", end:"06/31/2019", state:"done", manager:"stacie hall"},
            {name:"Project nitro", start: "01/01/2018", end:"06/31/2020", state:"in progress", manager:"carl jenkins"},
            {name:"Project phoenix", start: "01/01/2018", end:"06/31/2019", state:"done", manager:"bertha martin"},
            {name:"Project romeo", start: "01/01/2018", end:"06/31/2019", state:"done", manager:"ashley briggs"},
            {name:"Project wombat", start: "01/01/2018", end:"06/31/2021", state:"in progress", manager:"bertha martin"},
            {name:"Project X", start: "01/01/2018", end:"06/31/2018", state:"done", manager:"stacie hall"},
            {name:"Project zircon", start: "01/01/2018", end:"06/31/2020", state:"cancelled", manager:"stacie hall"}
        ]
    };

    return(
            <div className="Dashboard">
                <Card text="Welcome back, Naga!" subtext="My Dashboard" BlueCard/>

                <Card text="$ 24.300" subtext="Total Earnings" subtext2="Since last week" 
                    badgetype="Success" badgetext="+5.80%" 
                    icon="Money"/>
                <Card text="43" subtext="Pending Orders" subtext2="Since last week" 
                    badgetype="Danger" badgetext="-4.25%" 
                    icon="ShoppingBag"/>
                <Card text="$ 18.700" subtext="Total Revenue" subtext2="Since last week" 
                    badgetype="Success" badgetext="+8.25%" 
                    icon="Money"/>
                
                <Table title="Latest Project Status" data={data} />
            </div>
    );
}

export default dashboard;