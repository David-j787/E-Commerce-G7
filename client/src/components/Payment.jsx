import React from "react";
import { Link } from "react-router-dom";

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
      {paymentStatus === 'success' && <div>EL PAGO SE COMPLETÓ CON ÉXITO</div>}
      {paymentStatus === 'failure' && <div>EL PAGO FALLÓ CON ÉXITO</div>}
      {paymentStatus === 'pending' && <div>EL PAGO SE ENCUENTRA PENDIENTE DE APROBACIÓN</div>}
    </div>
  );
}

export default Payment;
