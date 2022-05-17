
const BackDrop = ({ show, click }) => {
    //if show is true return the section
    return show &&
        <section className="backdrop" onClick={click}></section>

}

export default BackDrop