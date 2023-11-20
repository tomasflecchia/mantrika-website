import './Contact.css'

export const Contact = () => {
  return (
    <>

        <div className="contact-right-container">
            <div className="map-container">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49989.12862494723!2d8.502350225139384!3d45.76210621656451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478671c02e383291%3A0xf12c2ea8732ed409!2s28041%20Arona%2C%20Novara!5e0!3m2!1ses!2sit!4v1697901465897!5m2!1ses!2sit" ></iframe>
            </div>
        </div>

        <div className='contact-left-container'>

            <div className="title-container">
                <img className='title' src=".\assets\pics\otras\contatto-title.png" />
            </div>

            <div className="contact-info-upper-container">
            
                <a href="mailto:mantrika.gm@gmail.com" className="contact-info-container">
                    <img 
                        src=".\assets\pics\otras\mail.png" 
                        alt="Icono del mail" 
                        className='contact-icon'
                    />
                    <p className='contact-text'>mantrika.gm@gmail.com</p>
                </a>

                <a href="tel:#+393472487228" className="contact-info-container">
                    <img 
                        src=".\assets\pics\otras\phone.png" 
                        alt="Icono del telefono" 
                        className='contact-icon'
                    />
                    <p className='contact-text'>+39 347 2487 228</p>
                </a>

                <a href='https://www.instagram.com/mantrika_studio_olistico/' className="contact-info-container">
                    <img 
                        src=".\assets\pics\otras\instagram.png" 
                        alt="Icono de instagram" 
                        className='contact-icon'
                    />
                    <p className='contact-text'>@mantrika_studio_olistico</p>
                </a>
            </div>

            <footer>
                <p>Image by <a href="https://www.freepik.com/free-vector/hand-drawn-floral-outline-background_51754837.htm#page=2&query=leaves%20background&position=26&from_view=keyword&track=ais&uuid=61cc4da2-3b8c-44f8-b9ad-a1088c05bfc4">Freepik</a>, Webpage by Tomás Flecchia</p>
            </footer>

        </div>

    </>
  )
}
