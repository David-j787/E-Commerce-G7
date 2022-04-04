import React from 'react';
import { FormattedMessage } from 'react-intl'

export default function AdminDashboard() {
    return(
        <div className='adminSubComp'>
            <div className='componentTitle'><FormattedMessage id="app.dashboard" defaultMessage="Dashboard"/></div>
            <div className='adminTable'>
                <textarea></textarea>
            </div>
        </div>
    )
}
