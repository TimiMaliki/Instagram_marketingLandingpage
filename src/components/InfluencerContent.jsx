import influencerStyle from '../assets/styles/influencer.module.scss'
import NewpropsContent from './NewpropsContent'

function InfleuncerContent() {
  return <div>

    {/* influencer props */}
    <div className={influencerStyle.influencer}>
      <div className={influencerStyle.text}>

        <NewpropsContent
          name="Influencer"
          title="Influencer marketing"
          text="Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs"

        />

      </div>

      <div className={influencerStyle.pic}>
        <div className={influencerStyle.Card}>
          <div className={influencerStyle.gridinner}>
            <div className={influencerStyle.elipse}>
            </div>
            <div className={influencerStyle.border}>
            </div>
            <div className={influencerStyle.border1}>
            </div>
            <div className={influencerStyle.border2}>
            </div>
          </div>

          <img src="./src/assets/img/Rectangle 40.png" alt="" />
          <div className={influencerStyle.likes}>
            <i class="bi bi-heart-fill"></i>
            <p>23.34K Likes</p>
          </div>
        </div>
      </div>
    </div>


  </div>

}



export default InfleuncerContent