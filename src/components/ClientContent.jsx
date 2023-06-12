import clientsStyle from '../assets/styles/clients.module.scss'

function ClientContent() {
    return <div>

        {/* trusted clients */}
        <div className={clientsStyle.client}>
            <h5>SOME OF OUR TRUSTED CLIENTS</h5>

            <div className={clientsStyle.cllogo}>
                <ul>
                    <li>CHASE</li>
                    <li>Asana</li>
                    <li>Google</li>
                    <li>BuzzFeed</li>
                    <li>Toggl</li>
                    <li>Walmart</li>
                </ul>
            </div>

        </div>
    </div>

}


export default ClientContent