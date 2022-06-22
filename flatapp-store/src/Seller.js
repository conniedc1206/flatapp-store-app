import ReactDOM from 'react-dom'
import "./style.css"

function Seller () {
    return(
        <div>
            <form id="form1">
                <h1>Seller Account</h1>
            <label htmlfor="creators">Creators:</label>
            <br></br>
            <input
                type="text"
                id="creators"
                value="">
                </input>
            <br></br>
            <br></br>
            <label htmlfor="appname">App Title:</label>
            <br></br>
            <input
                type="text"
                id="appname"
                value=""></input>
                <br></br>
                <br></br>
            <label htmlfor="appURL">App URL:</label>
            <br></br>
            <input
                type="text"
                id="appURL"
                value="">
                </input>
                <br></br>
                <br></br>
            <label htmlfor="githubURL">GitHub URL:</label>
            <br></br>
            <input
                type="text"
                id="githubURL"
                value="">
                </input>
                <br></br>
                <br></br>
            <label htmlfor="linkedin">LinkedIn URL:</label>
            <br></br>
            <input
                type="text"
                id="linkedin"
                value="">
                </input>
                <br></br>
                <br></br>
            <label htmlfor="aboutApp">App Description:</label>
            <br></br>
            <textarea
                id="aboutApp"
                name="about"
                rows="5"
                cols="40">
            </textarea>
                <br></br>
                <br></br>
            <label htmlfor="phase">Phase:</label>
            <br></br>
            <select id="phase" name="phase">
                <option value="phase1">Phase 1</option>
                <option value="phase2">Phase 2</option>
                <option value="phase3">Phase 3</option>
                <option value="phase3">Phase 4</option>
            </select>
                <br></br>
                <br></br>
            <input id="submit" type="submit" value="Submit">
                </input>
            </form>

        </div>
    )
}

export default Seller