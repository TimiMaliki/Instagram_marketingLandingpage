import communityStyle from '../assets/styles/community.module.scss'
import NewpropsContent from './NewpropsContent'


function Community() {
    return <div>
        <div className={communityStyle.community}>
            <div className={communityStyle.unity}>
                <div className={communityStyle.unityline1}>
                    <img src="./src/assets/img/Rectangle 40.png" alt="" />
                </div>
                <div className={communityStyle.unityline2}>
                    <img src="./src/assets/img/Rectangle 40.png" alt="" />
                    <img src="./src/assets/img/Rectangle 40.png" alt="" />
                </div>
                <div className={communityStyle.unityline4}>
                    <img src="./src/assets/img/Rectangle 40.png" alt="" />
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