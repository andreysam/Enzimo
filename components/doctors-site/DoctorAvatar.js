function DoctorAvatar (props) {
    return (
        <img className="avatar"
            src={props.doctor.avatar}
            alt={props.doctor.name}
        />

    );
}

export default DoctorAvatar