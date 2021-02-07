import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Header } from './components/layout/';
import { Preloader } from './components/reusable/';
import { Courses, Course, NotFound, CourseEnrollments } from './components/pages/';

class App extends React.Component {
  componentDidMount () {
    // Load texts based on locale
    // Assert loginStatus
  }

  render (): JSX.Element {
    // Conditional rendering based on login status
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="lg">
          <Suspense fallback={<Preloader />}>
            <Header/>
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/courses/:id" component={Course} />
              <Route exact path="/enrollments" component={CourseEnrollments} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

export default App