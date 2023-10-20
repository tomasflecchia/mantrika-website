import './Contact.css'

export const Contact = () => {
  return (
    <>
        <p className='section-text-1'>Vuoi sapere di piu?</p>
        <h1 className='section-title'>Contattami</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <img 
                    src="src\assets\pics\mail.png" 
                    alt="Icono del mail" 
                    className='icon contact-icon'
                />
                <p><a href="mailto:gm.mantrika@gmail.com"></a>gm.mantrika@gmail.com</p>
            </div>
            <div className="contact-info-container">
                <img 
                    src="src\assets\pics\phone.png" 
                    alt="Icono del mail" 
                    className='icon contact-icon'
                />
                <p><a href="tel:223232323"></a>+39 333-3222-115</p>
            </div>
        </div>
    </>
  )
}
