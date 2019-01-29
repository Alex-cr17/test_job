import React, { Component, Fragment } from 'react';
import Item from './Item';
import { addItem } from '../actions/items';
import { connect } from 'react-redux';

class List extends Component {
    handleAddItem = () => {
        this.props.addItem();
    }

   
    render() {
        const { list } = this.props.list;
    return (
        <Fragment>
    <div className="list" id="list">
            {
               list.map((item) => {
                return (
                    <Item key={item.id} item={item} />
              );
            })
            }
    </div>
    <button className="add-btn" onClick={() => this.handleAddItem()}>Add item</button>
    </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    list: state.list,
  })
export default connect(mapStateToProps, {addItem})(List);
