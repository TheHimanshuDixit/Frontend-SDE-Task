import React from 'react'
import {useNavigate} from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <section className="background-radial-gradient text-center lg:text-left">
            <div className="relative bg-gradient-to-r from-blue-500 to-fuchsia-500 h-[100vh]">
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                            <img className="h-20 mx-auto" src="https://www.codeinbound.com/assets/images/main-logo/logo.png" alt="logo" />
                            <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                                Are you ready <br /><span>to choose our service</span>
                            </h2>
                            <button
                                onClick={() => {
                                    navigate('/customersurvey');
                                }}
                                type="button"
                                className="flex mx-auto rounded bg-gradient-to-r from-blue-900 to-fuchsia-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:from-fuchsia-900 hover:to-blue-900  text-white">
                                Click me<BsArrowRight className="ml-2 text-lg my-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome