import React from "react";

function Footer() {
    return (
        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="https://www.btpnsyariah.com/web/guest/layanan-pengaduan-konsumen"
                        role="button"
                        target="blank"
                    >
                        <i className="fas fa-headset"></i>
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://www.facebook.com/btpnsyariah.id"
                        role="button"
                        target="blank"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="https://twitter.com/BTPNSyariah?t=13cS6GbmwycGNlFs4wtC3g&s=06"
                        role="button"
                        target="blank"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="https://www.instagram.com/btpnsyariah/"
                        role="button"
                        target="blank"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/company/btpnsyariah/mycompany/"
                        role="button"
                        target="blank"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </section>
            </div>
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2021 Copyright :
                <a
                    target="blank"
                    className="text-white"
                    href="https://www.btpnsyariah.com/"
                >
                    BTPN Syariah
                </a>
            </div>
        </footer>
    );
}

export default Footer;
