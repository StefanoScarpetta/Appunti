ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"))


ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root"))


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )}
function MainContent() { /*pagina componibile*/
    return (
        <div>
        <Navbar /> 
        <h1>I'm learning React!</h1>
        </div>
    )}
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root"))


const element = <h1 className="header">This is JSX</h1>
console.log(element)
/* {
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
} */
// JSX
ReactDOM.render(element, document.getElementById("root"))
// ReactDOM.render renderizza solo un elemento, se si vogliono mettere più elementi usare div


// versione 18:
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar) //1
// ReactDOM.render(navbar, document.getElementById("root"))  vecchio
ReactDOM.createRoot(document.getElementById("root")).render(navbar) //2


//Se si usa react come dependencies bisogna inserire:
import React from "react"
import ReactDOM from "react-dom/client"


//Metodo append + JSON.stringify
const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)
document.getElementById("root").append(JSON.stringify(page))


function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )}
function Footer() {
    return (
        <footer className="footer">
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )}
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )}
function Page() {
    return (
        <div className="page">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )}
ReactDOM.render(<Page />, document.getElementById("root"))


// Componenti in altra pagina ottenuti con import
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header" //nome file //nome percorso
import Footer from "./Footer"
import MainContent from "./MainContent"
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )}
ReactDOM.render(<Page />, document.getElementById("root"))
// Scrittura altri file che esportano
import React from "react"
export default function Header() {
    return (
        <header>
        </header>
    )}


const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
const squares = nums.map(function(num) {
    return num * num
})


const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
console.log(capitalized)


import React from "react"
import Joke from "./Joke"
export default function App() {
    return (
        <div>
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."/>
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." />
        </div>
    )}
//file joke
import React from "react"
export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )}
//versione ottimizzata ->
export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )}


export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )}


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText /*Se ha un valore*/ && <div className="card--badge">{badgeText}</div>} Questa scrittura significa che se la condizione è verificata allora mostra il div
            <img src={`../images/${props.img}`} className="card--image" /></div>)}