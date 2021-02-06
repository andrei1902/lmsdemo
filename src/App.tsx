import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/layout/'
import { Preloader } from './components/reusable/'
import { Courses, Course, NotFound } from './components/pages/'

class App extends React.Component {
  componentDidMount () {
    // Load texts based on locale
    // Assert loginStatus
  }

  render (): JSX.Element {
    // Conditional rendering based on login status
    return (
      <div className="App">
        <Suspense fallback={<Preloader />}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/courses/:id" component={Course} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App