import './Studio.css'
import foto1 from '../../../../public/assets/pics/studio/1.jpeg'
import foto2 from '../../../../public/assets/pics/studio/2.jpeg'
import foto3 from '../../../../public/assets/pics/studio/3.jpeg'
import foto4 from '../../../../public/assets/pics/studio/4.jpeg'
import foto5 from '../../../../public/assets/pics/studio/5.jpeg'

const images = [ foto1, foto2, foto3, foto4, foto5];

export const Studio = () => {
  return (
    <>
        <img className='img-bg'
             src="public\assets\pics\otras\disegno-2.jpg" 
             alt="disegno di fondo" 
        />
        
        <h1 className='section-title'>Lo Studio</h1>

        <div className="container__slider">

            <div className="container">
                <input type="radio" name="slider" id="item-1" defaultChecked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />

                <div className="cards">
                    <label className="card" htmlFor="item-1" id="selector-1">
                        <img src="\assets\pics\studio\1.jpeg" />
                    </label>
                    <label className="card" htmlFor="item-2" id="selector-2">
                        <img src="\assets\pics\studio\2.jpeg" />
                    </label>
                    <label className="card" htmlFor="item-3" id="selector-3">
                        <img src="\assets\pics\studio\3.jpeg" />
                    </label>
                    <label className="card" htmlFor="item-4" id="selector-4">
                        <img src="\assets\pics\studio\4.jpeg" />
                    </label>

                </div>
            </div>

        </div>

        

        {/* <div className='upper-img-slider-container'>
            <ImageSlider imageURLs = { images } />
        </div> */}
    </>
  )
}
