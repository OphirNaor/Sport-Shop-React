import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <section className="app-footer flex space-between align-center">
            <div className="footer-logo flex">
                <h2>Sport Shop</h2>
            </div>
            <p>Ophir Naor 2022</p>

            <p className="icons">
                <a href="https://www.linkedin.com/in/ophir-naor-9ab167238/" target="_blank">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/OphirNaor" target="_blank">
                    <AiFillGithub />
                </a>
                <a href="https://www.facebook.com/ophir.naor" target="_blank">
                    <AiFillFacebook />
                </a>

            </p>


        </section>
    )
}

export default Footer