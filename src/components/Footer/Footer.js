import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer_header" style={{color:"black",background:"#34D399"}}>
            <div className="row">
                <div className="col-md-6 col-12 my-auto" style={{paddingLeft:600}}>
                    <small>Copyright &copy;Deepak&Company</small>
                    
                </div>
                <div className="col-md-6 col-12" style={{paddingLeft:600}}>
                    <div className="d-flex float-right">
                        
                        <a href="https://www.linkedin.com/in/deepak-singh-140135136/">
                            <FaLinkedin className="connect text-dark" /></a>
                        <a href="https://www.instagram.com/dp_pk/">
                            <AiFillInstagram className="connect text-dark" /></a>
                        
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Footer;
