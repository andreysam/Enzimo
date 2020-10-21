function ClinicAvatar (props) {
    return (
        <img className="avatar"
            src={props.clinic.avatar}
            alt={props.clinic.name}
        />

    );
}

export default ClinicAvatar