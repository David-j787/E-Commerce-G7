import React from "react";
import { FormattedMessage } from "react-intl";

export function Payment(props) {
  const url = window.location.href;
  const query = new URL(url);
  const { paymentStatus } = props.match.params
  /* console.log(props.match.params); */
/*   console.log(query);
  console.log(query.searchParams.get("external_reference"));  //ID DE LA ORDEN DE NUESTRO SISTEMA
  console.log(query.searchParams.forEach((a,b,c) => console.log(a,b,c))); */
  console.log(query.searchParams.has('external_reference')); // TODO: COMPROBAR EN DB LA ORDEN CON EL ID DE EXTERNAL REFERENCE
  return (
    <div>
      {paymentStatus === 'success' && <div><FormattedMessage id="app.payment-successful" defaultMessage="PAYMENT HAS BEEN SUCCESSFUL"/></div>}
      {paymentStatus === 'failure' && <div><FormattedMessage id="app.payment-failed" defaultMessage="PAYMENT HAS FAILED"/></div>}
      {paymentStatus === 'pending' && <div><FormattedMessage id="app.payment-pending" defaultMessage="PAYMENT IS PENDING APPROVAL"/></div>}
    </div>
  );
}

export default Payment;
