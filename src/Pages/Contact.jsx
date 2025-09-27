import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">Hubungi Kami</h1>
                    <p className="col-md-8 fs-4 mx-auto">Kami siap membantu Anda. Silakan hubungi kami melalui formulir di bawah ini atau kunjungi kantor kami.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3>Kirim Pesan</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nama</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Pesan</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Kirim</button>
                    </form>
                </div>
                <div className="col-md-6 mb-4 bg-dark text-white p-4 rounded">
                    <h3>Contact Us</h3>
                    <p className="mb-1 fw-bold">NURUL FIKRI ACADEMY TRAINING CENTER</p>
                    <p className="mb-4">Jl. Lenteng Agung Raya No. 20C Srengseng Sawah Jagakarsa, Jakarta Selatan 12640</p>
                    <div className="d-flex mb-3">
                        <a href="https://www.instagram.com/nfacademy_id" className="text-white me-3"><i className="fa-brands fa-instagram fa-xl"></i></a>
                        <a href="https://web.facebook.com/NFAcademyid?_rdc=1&_rdr#" className="text-white me-3"><i className="fa-brands fa-facebook fa-xl"></i></a>
                        <a href="https://twitter.com/https://x.com/nfacademyid" className="text-white me-3"><i className="fa-brands fa-x-twitter fa-xl"></i></a>
                        <a href="https://www.linkedin.com/company/nfacademyid/" className="text-white me-3"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                        <a href="https://www.youtube.com/@NFAcademy_id" className="text-white me-3"><i className="fa-brands fa-youtube fa-xl"></i></a>
                        <a href="https://www.tiktok.com/@nfacademy_id" className="text-white me-3"><i className="fa-brands fa-tiktok fa-xl"></i></a>
                    </div>
                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-2">
                            <i className="fa-solid fa-phone me-3"></i>
                            <span>021 7863191</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <i className="fa-brands fa-whatsapp me-3"></i>
                            <span>0813 1980 6335</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <i className="fa-brands fa-telegram me-3"></i>
                            <span>0813 1980 6335</span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                            <i className="fa-brands fa-telegram me-3"></i>
                            <span>0821 1481 5496</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="fa-solid fa-envelope me-3"></i>
                            <span>info@nfacademy.id</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;