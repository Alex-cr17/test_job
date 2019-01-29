import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { statusPopup } from '../actions/popup';
class AddButton extends Component {

handlerOpenPopup = () => {
    this.props.statusPopup({
        type: "POPUP_OPEN_FOR_ADD",
        payload: !this.props.isOpened,
    })
   } 
  render() {
    return (
      <Fragment>
        <Fab color="primary" aria-label="Add" style={{ position: 'fixed', right: '20px', bottom: '20px'}} onClick={() => this.handlerOpenPopup()}>
            <AddIcon />
        </Fab>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
    popup: state.popup,
})
export default connect(mapStateToProps, {statusPopup})(AddButton);

