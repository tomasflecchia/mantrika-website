import './App.css'
import { toggleMenu } from './assets/toggleMenu'
import { showCV } from './assets/showCV'
import { goToInstagram } from './assets/goToInstagram'

function App() {

    return (
        <>
            <nav id='desktop-nav'>
                <img src="src\assets\mantrika.jpg" alt="Mantrika" className='logo'/>
                <div>
                    <ul className='nav-links'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#studio">Studio</a></li>
                        <li><a href="#trattamenti">Trattamenti</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <nav id='hamburger-nav'>
                <img src="src\assets\mantrika.jpg" alt="Mantrika" className='logo'/>  
                <div className='hamburger-menu'>
                    <div className="hamburger-icon" onClick={ toggleMenu }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li><a href="#about" onClick={ toggleMenu }>About</a></li>
                        <li><a href="#studio" onClick={ toggleMenu }>Studio</a></li>
                        <li><a href="#trattamenti" onClick={ toggleMenu }>Trattamenti</a></li>
                        <li><a href="#contact" onClick={ toggleMenu }>Contact</a></li>
                    </div>
                </div>
            </nav>

            <section id='profile'>
                <div className='section__pic-container'>
                    <img src="src\assets\fiore.jpg" alt="Fiore" />
                </div>
                <div className="section__text">
                    <p className='section__text__p1'>Ciao! Sono</p>
                    <h1 className='title'>Giuditta Manni</h1>
                    <p className='section__text__p2'>Operatrice del Benessere</p>

                    <div className="btn-container">
                        <button className='btn btn-color-2' onClick={ showCV }>Vedere CV</button>
                        <button className='btn btn-color-1' onClick={ showCV }>Contatto</button>
                    </div>

                    <div id='socials-container'>
                        <img 
                            src="src\assets\instagram.png" 
                            alt="Il mio profilo Instagram" 
                            className='icon'
                            onClick={ goToInstagram }    
                        />
                    </div>
                </div>
            </section>

            <section id='about'>
                <h1 className='title'>Conoscetemi!</h1>
                <div className='section-container'>
                    <div className="section__pic-container">
                        <img 
                            src="src\assets\giudi.jpg" 
                            alt="Giuditta y una cajita feliz" 
                            className='about-pic'    
                        />    
                    </div>
                    <div className="about-details-container">
                        <div className='about-containers'>
                            <div className="details-container">
                                <img 
                                    src="src\assets\certificate.png" 
                                    alt="icono de certificado" 
                                    className='icon'
                                />
                                <h3>Educazione</h3>
                                <p>Corso di <br /> Massaggi Ayurvedici</p>
                            </div>

                            <div className='details-container'>
                                <img 
                                    src="src\assets\certificate.png" 
                                    alt="icono de certificado" 
                                    className='icon'
                                />
                                <h3>Esperienzia</h3>
                                <p>+ di dieci mila trecento quaranta <br /> Massaggi Fatti</p>
                            </div>
                        </div>

                        <div className='text-container'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod odit consequatur iure a beatae sunt tempore maxime, quos nemo. Optio illum quaerat iusto architecto alias dolor error dignissimos consequatur perferendis, temporibus cupiditate veniam ipsam vel autem eaque accusantium necessitatibus odio eligendi et nihil. Optio animi aperiam veniam dicta modi.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='studio'>
                <p className='section__text__p1'>Scoprite</p>
                <h1 className='title'>Lo Studio</h1>
                <img 
                    src="src\assets\disegno.jpg" 
                    alt="Ejemplo" 
                    className='pic-studio'
                />
            </section>

            <section id='trattamenti'>
                <p className='section__text__p1'>I nostri</p>
                <h1 className='title'>Trattamenti</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img 
                                    src="src\assets\masaje01.jpg" 
                                    alt="Foto de un masaje" 
                                    className='project-img'
                                />
                            </div>
                            <h2 className='experience-sub-title project-title'>Ayurvedico</h2>
                            <div className='btn-container'>
                                <button 
                                    className='btn btn-color-2 project-btn'
                                    // onClick={}
                                    >
                                        Piu informazione
                                </button>
                            </div>
                        </div>

                        <div className="details-container color-container">
                            <div className="article-container">
                                <img 
                                    src="src\assets\masaje01.jpg" 
                                    alt="Foto de un masaje" 
                                    className='project-img'
                                />
                            </div>
                            <h2 className='experience-sub-title project-title'>Ayurvedico</h2>
                            <div className='btn-container'>
                                <button 
                                    className='btn btn-color-2 project-btn'
                                    // onClick={}
                                    >
                                        Piu informazione
                                </button>
                            </div>
                        </div>

                        <div className="details-container color-container">
                            <div className="article-container">
                                <img 
                                    src="src\assets\masaje01.jpg" 
                                    alt="Foto de un masaje" 
                                    className='project-img'
                                />
                            </div>
                            <h2 className='experience-sub-title project-title'>Ayurvedico</h2>
                            <div className='btn-container'>
                                <button 
                                    className='btn btn-color-2 project-btn'
                                    // onClick={}
                                    >
                                        Piu informazione
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id='contact'>
                <p className='section__text__p1'>Vuoi sapere di piu?</p>
                <h1 className='title'>Contattami</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <img 
                            src="src\assets\mail.png" 
                            alt="Icono del mail" 
                            className='icon contact-icon'
                        />
                        <p><a href="mailto:examplemail@gmail.com"></a>*********@gmail.com</p>
                    </div>
                </div>
            </section>

            <footer>
                <nav>
                    <div className='nav-links-container'>
                        <ul className='nav-links'>
                            <li><a href="#about">About</a></li>
                            <li><a href="#studio">Studio</a></li>
                            <li><a href="#trattamenti">Trattamenti</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <p>Copyright &#169; 2023 Giuditta Manni. Tutti Diritti Reservati</p>
            </footer>
        </>   
    )
}

export default App
