import influencerStyle from '../assets/styles/influencer.module.scss'
import communityStyle from '../assets/styles/community.module.scss'
import managedStyle from '../assets/styles/managed.module.scss'

function SideContent(){
    return <div>  
      {/* community */}
  
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