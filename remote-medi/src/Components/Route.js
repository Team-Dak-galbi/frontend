import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DoctorLogin from "../Screens/Doctor/Login";
import PatientLogin from "../Screens/Patient/Login";
import DashboardExample from "../Screens/Example/Dashboard";
import WaitingRoom from "../Screens/Meet/WaitingRoom";
import Header from "./Header";
import * as utils from '../Utils/path'

export default () => (
  <BrowserRouter>
    
    <Header />
    <Switch>
        <Route path={utils.DOCTOR_LOGIN} component={DoctorLogin} />
        <Route path={utils.PATIENT_LOGIN} component={PatientLogin} />
        <Route path={utils.DASHBOARD_EXAMPLE} render={(props) => <DashboardExample/>}/>
        <Route path={utils.VIDEO_CALL} render={(props) => <WaitingRoom identity="kimki" room="1234"/>}/>
    </Switch>
  </BrowserRouter>
)