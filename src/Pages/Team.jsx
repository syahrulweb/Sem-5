import React from 'react';

const Team = () => {
    return (
        <div className="container">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Our Team</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Kami adalah tim yang bersemangat di balik Book Store ini. Kami percaya bahwa setiap buku memiliki cerita yang unik dan kami berdedikasi untuk membantu Anda menemukannya.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top mx-auto mt-3 rounded-circle" alt="John Doe" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Co-Founder & CEO</p>
                            <p className="card-text"><small className="text-body-secondary">"Buku adalah jendela dunia."</small></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top mx-auto mt-3 rounded-circle" alt="Jane Smith" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">Chief Operating Officer</p>
                            <p className="card-text"><small className="text-body-secondary">"Mari membaca, mari berkarya."</small></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top mx-auto mt-3 rounded-circle" alt="Peter Jones" style={{width: '150px', height: '150px', objectFit: 'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Peter Jones</h5>
                            <p className="card-text">Head of Marketing</p>
                            <p className="card-text"><small className="text-body-secondary">"Membaca adalah petualangan."</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;