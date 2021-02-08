import React from "react";
import { Link } from "react-router-dom";
import FooterLogoImage from "../../images/logo-black.png";
import MiniForm from "../components/Mini";

import { InstagramLogo } from "../Icons";

function Footer() {
    return (
        <section id="footer" className="bg-orange-500 pt-14 pb-16">
            <div className="container mx-auto px-4 sm:px-0">
                <div className="flex justify-between flex-col sm:flex-row">
                    <div className="pr-24">
                        <Link
                            to="/"
                            className="transform-gpu transition-transform hover:scale-110 block mb-6 bg-center bg-no-repeat bg-contain w-14 h-14"
                            style={{
                                backgroundImage: `url(${FooterLogoImage})`
                            }}
                        ></Link>
                        <p className="text-sm text-gray-700 hidden sm:block">
                            All rights reserved.
                            <br />© 2021 kuba.digital{" "}
                        </p>
                    </div>
                    <div className="pr-24 sm:w-2/5">
                        <h4 className="text-lg font-semibold mb-6">
                            Как с вами связаться?
                        </h4>
                        {/* <dl className="flex text-sm mb-3">
                                <dt>Phone:</dt>
                                <dd></dd>
                            </dl> */}
                        <dl className="flex text-sm mb-3">
                            <dt className="whitespace-nowrap mr-2">Email:</dt>
                            <dd className="whitespace-nowrap">
                                <a
                                    className="text-yellow-900 hover:underline"
                                    href="mailto:hello@kuba.digital"
                                >
                                    hello@kuba.digital
                                </a>
                            </dd>
                        </dl>
                        {/* <dl className="flex text-sm mb-3">
                                <dt>Telegram:</dt>
                                <dd></dd>
                            </dl> */}
                        <dl className="flex text-sm mb-3">
                            <dd className="whitespace-nowrap">
                                {" "}
                                <a
                                    className="text-yellow-900 hover:underline"
                                    href="https://instagram.com/kuba.digital?igshid=hjubezg39pb7"
                                >
                                    <InstagramLogo className="w-12 h-12" />
                                </a>
                            </dd>
                        </dl>
                    </div>
                    <div className="pr-24 sm:w-2/5 hidden sm:block">
                        <h4 className="text-lg font-semibold mb-6">
                            Оставайтесь на связи
                        </h4>
                        <MiniForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
