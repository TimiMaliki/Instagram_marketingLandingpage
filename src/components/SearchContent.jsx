import searchStyle from '../assets/styles/search.module.scss'

function SearchContent() {
    return <div>

        {/* search */}
        <div className={searchStyle.search}>
          <h2>Search through more than 11 million social media profiles</h2>
          <div className={searchStyle.searchp}>
          Heepsy’s search filters help you find exactly what you’re looking for, 
            and our influencer reports provide you with the metrics
          </div>
           
          <div className={searchStyle.num}>
          <div className={searchStyle.satisfiedbrand}>
            <h5>2260</h5>
            <p>Satisfied Brands</p>
          </div>
          <div className={searchStyle.satisfiedclients}>
            <h5>1324</h5>
            <p>Satisfied Clients</p>
          </div>
          <div className={searchStyle.sponsored}>
            <h5>3453</h5>
            <p>Sponsored</p>
          </div>
          <div className={searchStyle.completed}>
            <h5>9786</h5>
            <p>Completed</p>
          </div>
          </div>
        </div>
    </div>

}


export default SearchContent