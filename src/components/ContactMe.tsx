'use client';

import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvgaggkw");

    return (
        <section id="contactMe" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>

            <div className="flex justify-center">
                <fieldset className="bg-base-200  rounded-box w-full max-w-3xl p-8 ">
                    <legend className="text-lg font-semibold px-2">Get In Touch</legend>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <input type="input" className="input validator" required placeholder="First Name"
                                    pattern="[A-Za-z]+" minLength={3} maxLength={30} title="Only letters" />
                                <p className="validator-hint">
                                    Must be 3 to 30 characters
                                    <br />containing only letters
                                </p>
                            </div>

                            <div>
                                <input type="input" className="input validator" required placeholder="Last Name"
                                    pattern="[A-Za-z]+" minLength={3} maxLength={30} title="Only letters" />
                                <p className="validator-hint">
                                    Must be 3 to 30 characters
                                    <br />containing only letters
                                </p>
                            </div>
                        </div>

                        <div className="flex" >
                            <textarea
                                className="textarea textarea-bordered flex-1 h-80 max-h-150 min-h-40"
                                placeholder="Say hi..."
                                id="message"
                                name="message"
                                required

                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={state.submitting}
                            >
                                {state.submitting ? (
                                    <>
                                        <span className="loading loading-dots loading-xs"></span>
                                        Sending...
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                        </div>
                        {state.succeeded && (
                            <div className="mt-4">
                                <div role="alert" className="alert alert-success shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 stroke-current"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Your message has been sent!</span>
                                </div>
                            </div>
                        )}
                    </form>
                </fieldset>
            </div>
        </section>
    );
}
