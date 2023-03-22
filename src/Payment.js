import React, { useState } from "react";
import StripeContainer from './StripeContainer';
import OrderForm from "./OrderForm";
import CheckoutForm from "./CheckoutForm";

function Payment({ orderPay, donation }){
    // const [showCheckout, setShowCheckout] = useState(false)

    // function togglePayment() {
    //     setShowCheckout(showCheckout => (!showCheckout));
    // }

    const newDonation = parseFloat(donation).toFixed(2);
    console.log(newDonation);
    // const donationFloat = newDonation.parseFloat(2);
    // console.log(donationFloat);

    return(
    <div>
        {/* <button onClick={togglePayment}>Submit Payment of ${newDonation}</button>
        { showCheckout ? <StripeContainer total={newDonation} /> : null } */}
    </div>
    )
}

export default Payment;