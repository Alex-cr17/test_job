import React, { Component } from 'react';
import List from './List';
import { getItemsRequest } from '../actions/items';
import { connect } from 'react-redux';

export class ListContainer extends Component {
  componentDidMount() {
    this.props.getItemsRequest()
}

  render() {
    const { isLoading } = this.props.list; 
    return (
      <div>
      {
        (isLoading) ? <p>Loading...</p> : <List/> 
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
})
export default connect(mapStateToProps, {getItemsRequest})(ListContainer);
