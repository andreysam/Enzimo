function CardPhoto (props) {
    return (
        <img className="avatar"
            src={props.photo}
            alt={props.title}
        />

    );
}

export default CardPhoto