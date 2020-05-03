import React, { FC } from "react"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import CameraPage from "./pages/CameraPage"
import LicensePlateLookupPage from "./pages/LicensePlateLookupPage"

import "./style/common.sass"
import style from "./style/app.module.sass"

const App: FC = () => {
  return <Router>
    <div className={style.app}>
      <div className={style.sidebar}>
        <NavLink to="/" className={style.sidebarButton}>Dashboard</NavLink>
        <NavLink to="/camera" className={style.sidebarButton}>Camera</NavLink>
        <NavLink to="/license-plate-lookup" className={style.sidebarButton}>License Plate Lookup</NavLink>
      </div>
      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/camera" component={CameraPage} />
          <Route exact path="/license-plate-lookup" component={LicensePlateLookupPage} />
        </Switch>
      </div>
    </div>
  </Router>
}

export default App
