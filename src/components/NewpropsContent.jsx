 
 function NewpropsContent(props){
    return <div>
    

        <div className={influencerStyle.influencer}>
        <div className={influencerStyle.text}>
          <h5>{props.name}</h5>
          <h3>{props.title}</h3>
           <p>{props.children}</p>
          
        </div>
        </div>

</div>
 }

 export default NewpropsContent