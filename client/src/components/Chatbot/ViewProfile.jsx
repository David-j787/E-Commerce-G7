import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'

const ViewProfile = () => {    
    return (
        <span><FormattedMessage id="app.chat-profile" defaultMessage="If you can't find where is your Profile, please click "/><Link to="/user/account/profile"><FormattedMessage id="app.chat-here-upper" defaultMessage="HERE"/></Link><FormattedMessage id="app.chat-redirect" defaultMessage="to redirect"/></span>
        );
    }
export default ViewProfile;