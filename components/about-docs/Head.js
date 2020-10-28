

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
                    {props.info}
                </div>
                    {props.buttons}
                </div>
        </div>
    );
}
    
export default Head