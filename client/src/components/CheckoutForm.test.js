import React from "react";
import {
    render, screen, fireEvent
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render( <CheckoutForm /> )

    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const first = screen.getByLabelText(/first Name/i)
    const last = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(first, {target: {value: "Hanina"}});
    fireEvent.change(last, {target: {value: "Syed"}});
    fireEvent.change(address, {target: {value: "21 street"}});
    fireEvent.change(state, {target: {value: "CA"}});
    fireEvent.change(zip, {target: {value: "23452"}});
    

    const submitbtn = screen.getByRole('button', {name: /checkout/i})
    fireEvent.click(submitbtn)

    const success = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
    expect(success).toBeInTheDocument

});