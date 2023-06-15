import managedStyle from '../assets/styles/managed.module.scss'
import NewpropsContent from './NewpropsContent'

function Service() {
    return <div>

        {/* service managed */}
        <div className={managedStyle.managed}>
            <div className={managedStyle.text}>
                <NewpropsContent
                    name="Influencer"
                    title="Influencer marketing"
                    text="Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs"

                />
            </div>
            <div className={managedStyle.pic}>
                <div className={managedStyle.Card}>
                    <h4>Earning By Platform Type</h4>
                    <div className={managedStyle.Circle}>
                        <div className={managedStyle.Circle1}>
                            <i class="bi bi-youtube"></i>
                            <div className={managedStyle.Circle2}>
                                <i class="bi bi-twitter"></i>
                                <div className={managedStyle.Circle3}>
                                    <i class="bi bi-facebook"></i>
                                </div><div className={managedStyle.Circle4}>
                                    <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
}

export default Service