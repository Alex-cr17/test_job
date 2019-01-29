import reducer, { initialState } from './listReducer';
import * as t from '../actions/actionsTypes';

describe('list reducers', () => {
    it('GET_ITEMS_REQUEST', ()=> {
        const action = {
            type: t.GET_ITEMS_REQUEST,
        }
        expect(reducer(initialState, action)).toEqual(
            {
                ...initialState,
                isLoading: true,
                list: []
            }
        )
    })

    it('FETCH_ITEMS_SUCCESS', ()=> {
        const stateBefore = {
            isLoading: true,
            list: []
        }
        const action = {
            type: t.FETCH_ITEMS_SUCCESS,
            payload: [1,2,3]
        }
        expect(reducer(stateBefore, action)).toEqual(
            {
                ...stateBefore,
                isLoading: false,
                list: action.payload,
            }
        )
    })
})