import storyStyle from '../assets/styles/story.module.scss'

function StoryContent() {
    return <div>

        {/* stories */}
        <div className={storyStyle.story}>
       <h1>Tell a better brand story</h1>
     <p>Automate the way you search through hashtags and 
        suggested profiles to find results 100x faster.</p>
        <div className={storyStyle.request }>
          <h3>Request Demo</h3>
        </div>
        </div>
    </div>

}


export default StoryContent