
import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/items';
import { editStartItem } from '../actions/items';
import { activatedItem } from '../actions/items';
import { editeCompletedItem } from '../actions/items';

import Icon from '@material-ui/core/Icon';

class Item extends React.Component {

    handleDeleteItem(item) {
        if(item.settings.activated) {
            let isConfirmed = window.confirm(`Are you sure want to delete: ${item.title}?`);
            if(isConfirmed) {
                let id = item.id;
                this.props.deleteItem(id);
            }
        }
    }
    
    handleActivatedItem(item) {
        let id = item.id;
        this.props.activatedItem(id);
    }
    handleEditItem(item) {
        if(item.settings.activated) {
            let id = item.id;
            this.props.editStartItem(id);
        }
    }

    handleSendEditedItem(item) {
        let newTitle = this.input.value;
        this.props.editeCompletedItem(item.id, newTitle);
    }
  render() {
    const { item } = this.props;
    return (

        <div className={ (!item.settings.activated) ? 'item no_user_select' : 'item'}>
            { (!item.settings.editable) 
            ?   <div className="item__base">
                    <span>
                        <input type="checkbox" checked={(!item.settings.activated) ? true : false} className="item__checkbox" onChange={() => this.handleActivatedItem(item)} />
                    </span>
                    <span>{item.title}</span>
                </div>
            :   <div className="item__editable">
                    <input type="text" ref={input => this.input = input } className="item_input" defaultValue={item.title}/>
                    <button className="item__button" onClick={() => this.handleSendEditedItem(item)}><Icon>save_icon</Icon></button>
                </div>
            }
            <div>
                {
                    (item.settings.editable) ? "" :
                <button className="item__button" onClick={() => this.handleEditItem(item)}>
                    <Icon>edit_icon</Icon>
                </button>
                }
                <button className="item__button" onClick={() => this.handleDeleteItem(item)}>
                    <Icon>delete_icon</Icon>
                </button>
           
            </div>
        </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
    list: state.list,
  })
export default connect(mapStateToProps, {deleteItem, editStartItem, activatedItem, editeCompletedItem})(Item);
