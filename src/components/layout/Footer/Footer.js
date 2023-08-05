import React from "react";

import styles from './Footer.module.css';

function Footer(){
    return(
        <>
            <section>
                <footer className="bg-dark text-center text-lg-start">
                <div className="text-center p-3">
                    <span className={styles.textColor}>&copy; 2023 Copyright - </span>
                    <a className={styles.footerText} href="#"><span> Tables</span></a>
                </div>
                </footer>
            </section>
        </>
    )
}

export default Footer;