import React, { useEffect, useState } from "react";
import useInputValue from "../components/input-value";
import client from "../api/client";
import { ArrowRight } from "../Icons";
import { useAlert } from "react-alert";

// components

export default function Mini() {
    const alert = useAlert();
    let email = useInputValue("email");

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/email", {
            body: {
                email: email.value ? email.value : ""
            }
        })
            .then(data => {
                alert.show(data.message, {
                    timeout: 3000,
                    type: "success",
                });
                email.setValue("");
            })
            .catch(error => {
                // console.log(error)
                error.json().then(({ errors }) => {
                    [email].forEach(({ parseServerError }) =>
                        parseServerError(errors)
                    );
                });
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="flex-grow flex items-center justify-center">
                        <input
                            type="email"
                            className={`w-full mr-4 bg-transparent border-b border-gray-700 text-gray-700 outline-none ${
                                email.error ? "border-red-500" : ""
                            }`}
                            placeholder=" "
                            id="email"
                            name="email"
                            required
                            {...email.bind}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleSubmit}
                            className="w-8 outline-none"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                {email.error && (
                    <p className="text-red-500 text-xs pt-2">{email.error}</p>
                )}
            </form>
        </>
    );
}
