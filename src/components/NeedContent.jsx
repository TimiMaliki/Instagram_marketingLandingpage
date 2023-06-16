import needStyle from '../assets/styles/need.module.scss'
import Mypics from '../assets/img/image01.png'

function NeedContent() {
  return <div>

    {/* need */}
    <div className={needStyle.need}>
      <h4>Solutions for every need</h4>
      <p>Join thousands of marketers and entrepreneurs
        for a 2-day event at the forefront of social commerce</p>

      <div className={needStyle.needcol}>
        <div className={needStyle.needCard}>
          <div className={needStyle.needcardtext}>
          <img src={Mypics} alt="" />
          <h6>Rebel Clothing</h6>
            <div className={needStyle.needflex}>
              <div className={needStyle.follower}>
                <div className={needStyle.followersReach}>
                  <h3>6.7 M</h3>
                  <h6>FOLLOWER REACH</h6>
                </div>
                <div className={needStyle.Engagement}>
                  <h3>56.2 K</h3>
                  <h6>ENGAGEMENT</h6>
                </div>
              </div>
              <h2>learn more</h2>
            </div>
            
          </div>
        </div>


        <div className={needStyle.needCard}>
          <div className={needStyle.needcardtext}>
          <img src="./src/assets/img/image02.png" alt="" />
          <h6>Rebel Clothing</h6>
            <div className={needStyle.needflex}>
              <div className={needStyle.follower}>
                <div className={needStyle.followersReach}>
                  <h3>6.7 M</h3>
                  <h6>FOLLOWER REACH</h6>
                </div>
                <div className={needStyle.Engagement}>
                  <h3>56.2 K</h3>
                  <h6>ENGAGEMENT</h6>
                </div>
              </div>
              <h2>learn more</h2>
            </div>
            
          </div>
        </div>

     
        <div className={needStyle.needCard}>
          <div className={needStyle.needcardtext}>
          <img src="./src/assets/img/image03.png" alt="" />
          <h6>Rebel Clothing</h6>
            <div className={needStyle.needflex}>
              <div className={needStyle.follower}>
                <div className={needStyle.followersReach}>
                  <h3>6.7 M</h3>
                  <h6>FOLLOWER REACH</h6>
                </div>
                <div className={needStyle.Engagement}>
                  <h3>56.2 K</h3>
                  <h6>ENGAGEMENT</h6>
                </div>
              </div>
              <h2>learn more</h2>
            </div>
            
          </div>
        </div>
       

      </div>

    </div>


  </div>

}


export default NeedContent