import React from 'react';
import { Link } from "react-router-dom";

function HeroCmp(props) {
    const imageDescription = props.description || 'Undescribed header image';
    const styles = {};
    if (props.height) {
        styles['--hero-image-height'] = props.height;
    }
    if (props.path) {
        styles['--hero-image'] = `url('${props.path}')`;
    }

    return (
        <div
            aria-label={imageDescription}
            className='hero'
            role='image'
            style={styles}
        >
            <div className='hero__image-blurred-bg'></div>
            <div className='hero__image flex column justify-center align-center'>
                <h2>"To enjoy the glow of good health,<br/>
                 you must exercise!"</h2>
                <p>Gene Tunney</p>
            </div>
            
        </div>
    );
}

export default HeroCmp;