import React from 'react';

import { FormattedMessage } from 'react-intl';

class App extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage id="LABELS.COMMONS.APP_NAME" />
      </div>
    );
  }
}

export default App;
