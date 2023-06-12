import happyStyle from '../assets/styles/happy.module.scss'

function HappyContent() {
    return <div>

        {/* Happy */}
        <div className={happyStyle.happy}>
            <h4>Happy Clients</h4>
            <p>The Marketing Accountability Standards Board (MASB) 
                endorses the definitions, purposes, and constructs of classes</p>
                <div className={happyStyle.happygrid}>
                <div className={happyStyle.happytext }>
                <div className={happyStyle.happylogo}>
                <div className={happyStyle.happylogo2}></div>
                </div>
                <div className={happyStyle.happybuy }>
                Not weekly or monthly like other sites out there. 
                This ensures that we offer prospective homebuyers and 
                investors with the freshest- hottest deals on the Internet.
                <div className={happyStyle.happysmith }>
                Rowhan Smith
                <div className={happyStyle.next}>
                    <p>CEO, Foreclosure</p>
                </div>
                </div>

                </div>
               
                </div>
                <div className={happyStyle.happypic }>
                <img src="./src/assets/img/PngItem_214430 1.png" alt="" />
                   </div>
                </div>
                   
       
        </div>
    </div>

}


export default HappyContent