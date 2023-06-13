import influencerStyle from '../assets/styles/influencer.module.scss'

function InfleuncerContent(){
    return <div>

        {/* influencer props */}
        
       <PropsContent   name="Influencer"  title="Influencer marketing">
       <p>Create 
      infinite pieces of content with our influencer product. Build,streamline,manage l
      arge-scale influencer programs</p>
       </PropsContent>

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

}



export default InfleuncerContent