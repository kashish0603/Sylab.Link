import React, { useState, useEffect } from "react"
import "./Details.css"
import poco from "../Images/imagecloud.png"
import videolink from "./videos.json"
import axios from "axios"

function App() {   
    const [ name, setName ] = useState("")
    const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setHome(response.data)
		})
	}, [])

	async function postName(e) {
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_name", {
				name
			})
		} catch (error) {
			console.error(error)
		}
	}

    const [clickState, setClickState] = useState(false)
    // let add = 0
    const clickLink = () => {
        setClickState(prevState => !prevState)
    }
    console.log(clickState)

    const styles = clickLink ? "1" : "0.5"

  return (
    <div className="Details">
        
			<form onSubmit={postName}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<button type="submit">Send Name</button>
			</form>
			{home}
        
        {
            clickState
            ?
            videolink.map(elem => {
                return(
                    <div className="popup-box" key={elem.title}>
                        <div className="popup-children">
                            <div className="para-div-cross">
                                <p className="pop-p" onClick={clickLink}>x</p>
                            </div>
                            <hr></hr>
                            <div className="popup-child">
                                <div className="video-pop">
                                    <p>Video Links</p>
                                    <ul>
                                        <li>{elem.Content[0].link1}</li>
                                        <li>{elem.Content[1].link1}</li>
                                    </ul>
                                </div>
                                <div className="article-pop">
                                    <p>Article Links</p>
                                    <ul>
                                        <li>GFG.com</li>
                                        <li>GFG.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                    
                )
            })
            :
            <div></div>
        }

        <div  style={{opacity: styles}}>

            <nav className="detail-nav">
                <ul className="detail-image-ul">
                    <li>
                        SYLAB.<span>LINK</span>
                    </li>
                </ul>
            </nav>

            <div className="link-par-div">
                <div className="link-display-area">
                    <div className="image-area">
                        <img src={poco} alt="ehhehe" />
                    </div>
                    <div className="links-area">
                        <div className="module-views">
                            {
                                videolink.map(elem => {
                                    return(
                                    <div className="modules" key={elem.title}>
                                        <p>{elem.title}</p>
                                        <div className="link-view">
                                            <ul>
                                                <p>Topic List</p>
                                                {/* {add = add + 1} */}
                                                <li onClick={clickLink}>{elem.Content[0].heading}</li>
                                                <li onClick={clickLink}>{elem.Content[1].heading}</li>
                                                <li onClick={clickLink}>{elem.Content[2].heading}</li>
                                                <li onClick={clickLink}>{elem.Content[3].heading}</li>
                                                <li onClick={clickLink}>{elem.Content[4].heading}</li>
                                            </ul>
                                        </div>
                                    </div>
                            )})}
                            {/* <div className="modules">
                                <p>Module-1</p>
                                <div className="link-view">
                                    <ul>
                                        <p>Topic List</p>
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
                                        <li>Topic 5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modules">
                                <p>Module-1</p>
                                <div className="link-view">
                                    <ul>
                                        <p>Topic List</p>
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
                                        <li>Topic 5</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="module-views">
                            <div className="modules">
                                <p>Module-1</p>
                                <div className="link-view">
                                    <ul>
                                        <p>Topic List</p>
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
                                        <li>Topic 5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modules">
                                <p>Module-1</p>
                                <div className="link-view">
                                    <ul>
                                        <p>Topic List</p>
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
                                        <li>Topic 5</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modules">
                                <p>Module-1</p>
                                <div className="link-view">
                                    <ul>
                                        <p>Topic List</p>
                                        <li>Topic 1</li>
                                        <li>Topic 2</li>
                                        <li>Topic 3</li>
                                        <li>Topic 4</li>
                                        <li>Topic 5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

  )
}

export default App;