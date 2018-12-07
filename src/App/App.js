import React from 'react';

import SearchHeader from './SearchHeader';

import 'antd/dist/antd.css';

export class App extends React.PureComponent {
  handleSearch = text => console.log(text);

  render() {
    return (
      <div>
        <SearchHeader onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
