import influencerStyle from '../assets/styles/influencer.module.scss'
import communityStyle from '../assets/styles/community.module.scss'
import managedStyle from '../assets/styles/managed.module.scss'

function SideContent(props){
    return <div>  
      {/* community */}
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
          <h5><span>Community</span></h5>
          <h3>Community marketing</h3>
          <p>Bring your relationships to new heights with our community product. Discover your biggest enthusiasts</p>
        </div>

      </div>
      {/* service managed */}
      <div className={managedStyle.managed}>
      <div className={managedStyle.text}>
          <h5>services</h5>
          <h3>Managed services</h3>
          <p>Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling</p>
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

export default SideContent