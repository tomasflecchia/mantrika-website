import './App.css'
import { Profile, Studio, Trattamenti, Contact } from './assets/sections'

function App() {

    return (
        <>
            <section id='profile'>
                <Profile />
            </section>

            <div className="line-container">
                <div className="lines">
                    <div className="figure diamond"></div>
                </div>
            </div>

            <section id='studio'>
                <Studio />
            </section>

            <div className="line-container">
                <div className="lines">
                    <div className="figure circle"></div>
                </div>
            </div>

            <section id='trattamenti'>
                <Trattamenti />
            </section>

            <div className="line-container">
                <div className="lines">
                    <div className="figure diamond"></div>
                </div>
            </div>

            <section id='contact'>
                <Contact />
            </section>
        </>   
    )
}

export default App
