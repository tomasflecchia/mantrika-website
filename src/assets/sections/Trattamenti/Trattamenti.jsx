import './Trattamenti.css'

export const Trattamenti = () => {
  return (
    <>
        <div className="title-container">
            <img className='title' src=".\assets\pics\otras\trattamenti-title.png" />
        </div>

        <div className="trattamenti-container">

            <div className="trattamenti-item">
                <img className='pic' src=".\assets\pics\studio\viso.jpg" />
                <div className="img-text">
                    <p className='trattamenti-text'>Trattamenti Viso</p>
                </div>
            </div>

            <div className="trattamenti-item">
                <img className='pic' src=".\assets\pics\studio\piede.jpeg" />
                <div className="img-text">
                    <p className='trattamenti-text'>Riflessologia Plantare</p>
                </div>
            </div>


            <div className="trattamenti-item">
                <img className='pic' src=".\assets\pics\studio\massaggio.jpeg" />
                <div className="img-text">
                    <p className='trattamenti-text'>Drenante</p>
                </div>
            </div>

            <div className="trattamenti-item">
                <img className='pic' src=".\assets\pics\studio\olii.jpeg" />
                <div className="img-text">
                    <p className='trattamenti-text'>Massaggio Ayurvedico</p>
                </div>
            </div>

        </div>

        
        
    </>
  )
}
