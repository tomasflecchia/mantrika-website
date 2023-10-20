import './Trattamenti.css'

export const Trattamenti = () => {
  return (
    <>
        <p className='section-text-1'>I nostri</p>
        <h1 className='section-title'>Trattamenti</h1>
        <div className="trattamenti-container">
            <div className="trattamenti-containers">
                <div className="details-container color-container">
                    <div className="article-container">
                        <img 
                            src="src\assets\pics\otras\masaje01.jpg" 
                            alt="Foto de un masaje" 
                            className='trattamenti-img'
                        />
                    </div>
                    <h2 className='trattamenti-sub-title trattamenti-title'>Ayurvedico</h2>
                    <div className='btn-container'>
                        <button 
                            className='btn btn-color-2 trattamenti-btn'
                            // onClick={}
                            >
                                Piu informazione
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                        <img 
                            src="src\assets\pics\otras\masaje01.jpg" 
                            alt="Foto de un masaje" 
                            className='trattamenti-img'
                        />
                    </div>
                    <h2 className='trattamenti-sub-title trattamenti-title'>Ayurvedico</h2>
                    <div className='btn-container'>
                        <button 
                            className='btn btn-color-2 trattamenti-btn'
                            // onClick={}
                            >
                                Piu informazione
                        </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                        <img 
                            src="src\assets\pics\otras\masaje01.jpg" 
                            alt="Foto de un masaje" 
                            className='trattamenti-img'
                        />
                    </div>
                    <h2 className='trattamenti-sub-title trattamenti-title'>Ayurvedico</h2>
                    <div className='btn-container'>
                        <button 
                            className='btn btn-color-2 trattamenti-btn'
                            // onClick={}
                            >
                                Piu informazione
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
