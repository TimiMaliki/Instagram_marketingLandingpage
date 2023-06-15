import { useState } from 'react'
import SideContent from './components/SideContent'
import ClientContent from './components/ClientContent'
import StoryContent from './components/StoryContent'
import InfluencerContent from './components/InfluencerContent'
import SolutionContent from './components/SolutionContent'
import SearchContent from './components/SearchContent'
import NeedContent from './components/NeedContent'
import HappyContent from './components/HappyContent'
import SubContent from './components/SubContent'
import FooterContent from './components/FooterContent'
import style from './assets/styles/index.module.scss'




function App() {

  return (
    <div className={style.body}>
      <header>
        <nav>
          <div className={style.logo}><h2>Maliki.</h2></div>

          <ul>
            <li><a href="">Solutions</a></li>
            <li><a href="">Plans</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
          </ul>

          <div className={style.demo}>
            <p>Request Demo</p>
          </div>
        </nav>
        <div className={style.growth}>
             OluwaTimi Lehin M.
          <div className={style.yourgrowth}>
            <div className={style.yg}>
              <div className={style.span}>
              Your Growth
              3,000
              </div>
            </div>
          </div>

        </div>
      </header>

      <StoryContent />

      <ClientContent />

      <SolutionContent />
      
<InfluencerContent />

      <SideContent />

      <SearchContent />

      <NeedContent />

      <HappyContent />

      <SubContent />

      <FooterContent />
  
      
      
      

    </div>
  )
}

export default App
