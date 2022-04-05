import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllStores } from "../redux/actions"
import Map from './Map'
import { FormattedMessage } from 'react-intl'

const Sucursales = () => {
    const dispatch = useDispatch()
    const { stores } = useSelector(s => s)
    const _default = {
        lat: -38.476998,
        lng: -66.831531,
        zoom: 4,
    }

    const [select, setSelect] = useState({ ..._default })

    useEffect(() => {
        dispatch(getAllStores())
    }, [])

    const handleClick = (id) => {
        if (id === "all") {
            return !select.name ? null : setSelect({ ..._default })
        }
        if (id === select.id) return
        const store = stores.filter(l => l.id === id)[0]
        const format = { ...store, location: { lat: store.lat, lng: store.lng } }
        setSelect(format)
    }

    return (
        <div>
            <h1><FormattedMessage id="app.stores" defaultMessage="Stores"/></h1>
            <button onClick={() => handleClick("all")}>
                <h2><FormattedMessage id="app.see-stores" defaultMessage="See all stores"/></h2>
            </button>
            {stores?.map(location => {
                return (
                    <button key={location.id} onClick={() => handleClick(location.id)} >
                        <h2>{location.name}</h2>
                        <span>{location.city}</span>
                    </button>
                )
            })}
            <Map center={select} markers={stores} />
        </div>
    )
}

export default Sucursales