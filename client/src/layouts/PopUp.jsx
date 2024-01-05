import "../layouts/PopUp.css"

function PopUp({togglePopup}) {
    return ( 
        <div className="">
            <div className="overlay" onClick={togglePopup}></div>
            <div className="popup">

            <div className="info-slide">
                <div className="left-info">
                    <h1>Finish Your Research in Minutes. Save your Sleep</h1>
                    <p>Pates your easy to find, summarize, and add credible sources. (That something Google Scholar can't do!)</p>
                </div>
                <div className="right-info">
                    <img src="https://static.wixstatic.com/media/11062b_d8b519d30b6149ae855a141c84a0dab1f000.jpg/v1/fill/w_451,h_440,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/11062b_d8b519d30b6149ae855a141c84a0dab1f000.jpg" alt="" />
                </div>
            </div>
            </div>
            </div>
     );
}

export default PopUp;