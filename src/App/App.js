import React from 'react';
import { func } from 'prop-types';

import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import { appActions } from 'commons/store/app';

class App extends React.Component {
  static propTypes = {
    initApp: func.isRequired
  };

  componentDidMount() {
    this.props.initApp({ toto: 'africa' });
  }

  render() {
    return (
      <div>
        <FormattedMessage id="LABELS.COMMONS.APP_NAME" />
      </div>
    );
  }
}

const mapDispatchToProps = {
  initApp: appActions.initApp
};

export default connect(
  null,
  mapDispatchToProps
)(App);
