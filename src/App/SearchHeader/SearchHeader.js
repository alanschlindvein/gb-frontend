import React from 'react';
import { object, func } from 'prop-types';

import styled from 'styled-components';
import { compose } from 'recompose';
import { injectIntl } from 'react-intl';
import { Input } from 'antd';

const HeaderBar = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4em;
  display: flex;
  padding: 0.5em;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledInputSearch = styled(Input.Search)`
  &.ant-input-affix-wrapper {
    width: 50% !important;
  }

  @media (max-width: 60em) {
    &.ant-input-affix-wrapper {
      width: 100% !important;
    }
  }
`;

export class SearchHeader extends React.PureComponent {
  static propTypes = {
    onSearch: func.isRequired,
    /* react-intl */
    intl: object.isRequired
  };

  state = {
    searchText: ''
  };

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
    !!searchText && this.props.onSearch(searchText);
  };

  render() {
    const { intl } = this.props;

    return (
      <HeaderBar>
        <StyledInputSearch
          placeholder={intl.formatMessage({ id: 'LABELS.SEARCH_BAR.SEARCH' })}
          onSearch={this.handleSearchTextChange}
          size="large"
          enterButton
        />
      </HeaderBar>
    );
  }
}

export default compose(injectIntl)(SearchHeader);
