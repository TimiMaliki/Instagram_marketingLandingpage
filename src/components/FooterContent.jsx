import footerStyle from '../assets/styles/footer.module.scss'

function FooterContent() {
    return <div>

        {/* Sub */}
        <div className={footerStyle.footer}>
            <div className={footerStyle.footerContainer}>
                <div className={footerStyle.logo}>
                    <h3>Maliki.</h3></div>
                    <ul>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Plans</a></li>
                        <li><a href="">Resources</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                
            </div>

        </div>

    </div>

}


export default FooterContent