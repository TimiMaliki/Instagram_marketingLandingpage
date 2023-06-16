import communityStyle from '../assets/styles/community.module.scss'
import NewpropsContent from './NewpropsContent'
import Rectangleimage from '../assets/img/Rectangle40.png'


function Community() {
     {/* community */}
     
    return <div>
        <div className={communityStyle.community}>
            <div className={communityStyle.unity}>
                <div className={communityStyle.unityline1}>
                    <img src={Rectangleimage} alt="" />
                </div>
                <div className={communityStyle.unityline2}>
                    <img src={Rectangleimage} alt="" />
                    <img src={Rectangleimage} alt="" />
                </div>
                <div className={communityStyle.unityline4}>
                    <img src={Rectangleimage} alt="" />
                </div>

            </div>
            <div className={communityStyle.text}>
            <NewpropsContent
          name="Influencer"
          title="Influencer marketing"
          text="Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs"

        />
            </div>
        </div>
    </div>
}

export default Community