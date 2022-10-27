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


//stampare una lista
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


//Banner e html con valori della lista
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


//onClick e OnMouseOver
export default function App() {
    function handleClick() {
        console.log("I was clicked!")}

    function handleOnMouseOver() {
        console.log("MouseOver")}

    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" 
                onMouseOver={handleOnMouseOver} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )}


//elemento random da data
let url
function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    console.log(url)
}


//aggiunta interattiva di elementi
const [things, setThings] = React.useState(["Thing 1", "Thing 2"]) 
function addItem() {
    const newThingText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText]) //...prevState restituisce tutto l'array precedente
}
const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
return (
    <div>
        <button onClick={addItem}>Add Item</button>  
        {thingsElements}
    </div>
)


//State use
const [isImportant, setIsImportant] = React.useState("Yes")
function handleClick() {
    setIsImportant("No")
}
return (
    <div className="state">
        <h1 className="state--title">Is state important to know?</h1>
        <div className="state--value" onClick={handleClick}>
            <h1>{isImportant}</h1>
        </div>
    </div>
)


//Counter con State
const [count, setCount] = React.useState(0)
function add() {
    setCount(prevCount => prevCount + 1)}
function subtract() {
    setCount(prevCount => prevCount - 1)}
return (
    <div className="counter">
        <button className="counter--minus" onClick={subtract}>–</button>
        <div className="counter--count">
            <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}>+</button>
    </div>
)


isGoingOut ? "Yes" : "No" //boolean, se true valore1 se no valore2 //Ternary
!isGoingOut //opposto del valore che ha in quel momento


//modificare un solo aspetto dell'array, stella dei preferiti
const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})
let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
function toggleFavorite() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))}
return (
    <main>
        <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
                <img 
                    src={`../images/${starIcon}`} 
                    className="card--favorite"
                    onClick={toggleFavorite} /></div></article></main>)


//salvare gli oggetti che vogliamo
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)
function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))}


//componente esterno
export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}/>)
}
function toggleFavorite() { //App
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    })) }
return (
    <main>
        <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} /></div></article></main>)


//Piccolo progetto box
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    function toggle(id) {
        setSquares(prevSquares => { //invertire on
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square //Ternary
            })
        })
    }
    const squareElements = squares.map(square => (
        <Box 
            key={square.id}  //Mettere sempre le key per distinguere gli elementi
            on={square.on} 
            toggle={() => toggle(square.id)} //passare una funzione
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )}
export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"} //cambiare il colore a seconda di on, CSS dentro javascript (esempio darkmode)
    return (
        <div 
            style={styles} 
            className="box"
            onClick={props.toggle}>
        </div>
    )}


//Conditional rendering &&
const [isShown, setIsShown] = React.useState(false)
function toggleShown(){
    setIsShown(prevShown => !prevShown)
}
return (
    <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown && <p>{props.punchline}</p>} //se non si clicca il bottone il testo non comparirà
        <button onClick={toggleShown}>Show Punchline</button>
        <hr />
    </div> 
)


//     Ternary example
// <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button> //Se isShown è true il bottone recita Hide, se no Show 
// <div>
//     { messages.length === 0 ?
//       <h1>You're all caught up!</h1> :
//       <h1>You have {messages.length} unread 
//     { messages.length > 1 ? "messages" : "message"}</h1> }
// </div>


//Form
export default function Form() {
const [formData, setFormData] = React.useState(
    {   firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true,
        employment: "",
        favColor: ""
    })
function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })}
function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
}
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}/>
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}/>
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}/>
        <textarea 
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name="comments"/>
        <input 
            type="checkbox" 
            id="isFriendly" 
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"/>
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />
        <fieldset>
            <legend>Current employment status</legend>
            <input 
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}/>
            <label htmlFor="unemployed">Unemployed</label>
            <br />
            <input 
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}/>
            <label htmlFor="part-time">Part-time</label>
            <br />
            <input 
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}/>
            <label htmlFor="full-time">Full-time</label>
            <br />
        </fieldset>
        <br />
        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select 
            id="favColor" 
            value={formData.favColor}
            onChange={handleChange}
            name="favColor">
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
    </form>)}


//useEffect e fetch (ottenere dati da API e gestirli con useEffect)
export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    React.useEffect(function() { //useEffect serve per gestire dati esterni non gestibili da react, la funzione è obbligatoria, l'array no
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`) //con fetch si possono ottenere dati dagli API
            .then(res => res.json()) //trasforma i dati in un json
            .then(data => setStarWarsData(data)) //mette il json nel useState StarWars
    }, [count]) //l'array serve per determinare il numero di volte in cui la versione sarà eseguita, se il contenuto dell'array è diverso dal render precedente allora
                //la funzione verrà rieseguita, se è uguale no
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )}


//useEffect applicato al comando window (accedere alla finestra web)
export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth) //con window accediamo ai dati della finestra, con questo comando otteniamo la larghezza
        }
        window.addEventListener("resize", watchWidth) //catturiamo gli eventi applicati alla finestra, in questo case "resize" (ridimensiona)
        return function() { //serve per rimuovere i side effect non utilizzati
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth) //rimuove la cattura degli effetti sulla finestra
        }
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )}


/*
Competenze acquisite dal secondo macro progetto scrimba: meme generator
- Event listeners
- State
- Conditional rendering
- Forms
- Side effects
*/