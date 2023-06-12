import subStyle from '../assets/styles/sub.module.scss'

function SubContent() {
    return <div>

        {/* Sub */}
        <div className={subStyle.sub}>
            <div className={subStyle.subCard}>
                <h4>Subscribe our newsletter</h4>
                <p>Join thousands of marketers and entrepreneurs
                    for a 2-day event at the forefront of social commerce.</p>
                <div className={subStyle.subrequest}>
                      <h3>Subscribe</h3>
                </div>
            </div>


        </div>

    </div>

}


export default SubContent