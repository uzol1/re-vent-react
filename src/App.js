
import React from 'react';
import { Route, Switch, withRouter, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import EventDetailedPage from './features/event/EventDetailedPage/EventDetailedPage'
import EventForm from './features/event/EventForm/EventForm';
import Homepage from './features/Home/HomePage';
import NavBar from './features/nav/NavBar/NavBar';
import People from './features/user/UserDetailed/people';
import SettingsDashboard from './features/user/Settings/SettingsDashboard';


function App(props) {
  return (
    <React.Fragment>
      <Route path="/" exact component={Homepage} />
      <Route path="/(.+)" render={() => {
        return (
          <React.Fragment>
            <NavBar />
            <Container className="main">
              <Switch key={props.location.key}>
                <Route exact path="/events/" component={EventDashboard} />
                <Route exact path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={People} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path={["/createEvent/", "/manageEvent/:id"]} component={EventForm} />
              </Switch>



            </Container>

          </React.Fragment >)
      }} />

    </React.Fragment>

  );
}

export default withRouter(App);
