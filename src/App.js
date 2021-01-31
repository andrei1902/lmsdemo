import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import { Header } from './components/layout/'
import { Preloader } from './components/reusable/'
import { Courses, Course, NotFound } from './components/pages/'

class App extends React.Component {
  constructor (props) {
    super(props)
    // check locale setup on localStorage
  }

  componentDidMount () {
    // Load texts based on locale
    // Assert loginStatus
  }

  render () {
    const { history } = this.props
    // Conditional rendering based on login status
    return (
      <div className="App">
        <Suspense fallback={<Preloader />}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Courses} history={history} />
            <Route exact path="/courses" component={Courses} history={history} />
            <Route exact path="/courses/:id" component={Course} history={history} />
            <Route component={NotFound} history={history} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App)
