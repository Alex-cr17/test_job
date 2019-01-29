import React from 'react'
import { shallow } from 'enzyme'
import { ListContainer } from './ListContainer'

describe('App container', () => {
  const props = { 
    list: {
        data: [],
        isLoading: false,
    },
   
    getItemsRequest: () => {},
  }
  
  
  describe('App container loading', () => {
      // Shallow render 
      it('isLoading', ()=> {
        const nextProps = {
          ...props,
          list: {
            ...props.list,
            isLoading: true
          }
        }

        const listContainer = shallow(<ListContainer {...nextProps}/>)
        console.log(listContainer)
        expect(listContainer.find('p').text()).toEqual('Loading...');
      })
  })
})
