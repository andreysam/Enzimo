

function Head(props) {
    return(
        <div className="about-title">
            <div className="about-photo">
                <img className="photo-doc"
                src={props.photo}
                alt={props.title}
                />
            </div>
            <div className="about-container">
                <div className="description-text">
                    <div className="title-text">
                        {props.title}
                    </div>
                    <div className="info-text">
                        {props.info}
                    </div>
                </div>
                    <div className="button-text">
                        <div className="input-button">
                            <div className="input-text">
                                Запись на приём
                            </div>
                        </div>
                        <div className="output-button">
                            <div className="output-text">
                                Вызов на дом
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
    
export default Head