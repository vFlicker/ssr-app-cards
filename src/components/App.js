import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAppsIfNeeded } from '../store/actions'
import { Card } from './Card/Card'

class App extends Component {
  componentDidMount() {
    this.props.fetchAppsIfNeeded();
  }

  render() {
    const { isFetching, apps } = this.props;
    const totalApps = apps.length;

    const cards = apps.map((app, index) => (
      <Card
        app={app}
        appNumber={index + 1}
        totalApps={totalApps}
        key={app.name}
      />
    ));

    return (
      <>
        {isFetching && totalApps === 0 && <h2>Loading...</h2>}
        {!isFetching && totalApps === 0 && <h2>Empty.</h2>}
        {cards}
      </>
    );
  }
}

const mapStateToProps = ({ isFetching, apps }) => ({
  isFetching,
  apps,
});

const mapDispatchToProps = { fetchAppsIfNeeded }

export default connect(mapStateToProps, mapDispatchToProps)(App);
