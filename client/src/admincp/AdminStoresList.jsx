import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStores } from '../redux/actions';
import swal from 'sweetalert';
import { FormattedMessage } from 'react-intl'

export default function AdminStoresList({showComponent, getId}) {
    const dispatch = useDispatch();
    const stores = useSelector(state => state.stores);

    useEffect(()=>{
        dispatch(getAllStores());
    },[])

    const addNewStore = () => {
        showComponent('createStore')
    }

    const editStore = (storeId) => {
        getId(storeId);
        showComponent('updateStore')
    }

    const deleteStore = async (storeId) => {
        let token;
        if(localStorage.getItem('jwt')) token = localStorage.getItem('jwt');
        else if(sessionStorage.getItem('jwt')) token = sessionStorage.getItem('jwt');
        try {
            swal({
                title: 'Do you want delete the store?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                buttons: ['No','Yes']
            }).then(async (result) => {
                if (result) {
                    await axios.delete('/stores', {data: {token, storeId}});
                    swal({
                        title: 'You deleted the store with Number: ' + storeId,
                        text: ' ',
                        icon: 'success',
                        timer: 2000,
                        button: null
                    })
                    dispatch(getAllStores());
                }
            })
        } catch (error) {
            swal({
                title: 'Something went wrong',
                text: 'Check console to see more about error',
                icon: 'error',
                timer: 2000,
                button: null
            })
            console.log(error);
        }
    }

    return(
        <div className='adminSubComp'>
            <div className='componentTitle'><FormattedMessage id="app.manage-store" defaultMessage="Stores Management"/><button onClick={addNewStore} className='componentTitle__button'><FormattedMessage id="app.btn-add-store" defaultMessage="Add new Store"/></button></div>
            <div className='tableHeader'><div><FormattedMessage id="app.store-name" defaultMessage="Store name"/></div>|<div><FormattedMessage id="app.store-address" defaultMessage="Address"/></div>|<div><FormattedMessage id="app.store-city" defaultMessage="City"/></div>|<div><FormattedMessage id="app.store-state" defaultMessage="State"/></div>|<div><FormattedMessage id="app.action" defaultMessage="Action"/></div></div>
            <div className='adminTable'>
                <ul>
                    {Array.isArray(stores) ? stores?.map(store => <li className='itemList' key={store.id}>
                        <div>{store.name}</div>
                        <div>{store.address}</div>
                        <div>{store.city}</div>
                        <div>{store.state}</div>
                        <div>
                            <button onClick={e => editStore(store.id)} className='adminCP__button'><FormattedMessage id="app.btn-edit" defaultMessage="Edit"/></button>
                            <button onClick={e => deleteStore(store.id)}className='adminCP__button'><FormattedMessage id="app.btn-delete" defaultMessage="Delete"/></button>
                        </div>
                        
                        </li>) : <div className='noDataFound'>{stores}</div>}
                </ul>
            </div>
        </div>
    )
}
