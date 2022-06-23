import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style.css";

function Seller() {
  const initialState = {
    appName: "",
    image: "",
    developerNames: "",
    githubRepo: "",
    appUrl: "",
    about: "",
    phase: "",
  };

  const [formData, setFormData] = useState(initialState);

  const history = useHistory();
  //console.log(history);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

    //console.log(formData);
    //console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, likes: 0 }),
    };

    fetch("http://localhost:3000/apps", configObj);
    // .then((res) => res.json())
    // .then((data) => console.log(data) );

    history.push("/");

    // setFormData({
    //   appName: "",
    //   image: "",
    //   developerNames: "",
    //   githubRepo: "",
    //   appUrl: "",
    //   about: "",
    //   phase: "",
  };

  return (
    <div>
      <form id="form1" onSubmit={handleSubmit}>
        <h1>Seller Page</h1>
        <p>Add information about your app here</p>
        <br></br>
        <label htmlFor="developerNames">Developers:</label>
        <input
          type="text"
          name="developerNames"
          id="developerNames"
          onChange={handleChange}
          value={formData.developerNames}
          placeholder="ex. Connie, Mark, Samantha, Harrison"
        />
        <br></br>
        <br></br>
        <label htmlFor="appName">App Title:</label>
        <input
          type="text"
          id="appName"
          name="appName"
          onChange={handleChange}
          value={formData.appName}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="appUrl">App URL:</label>
        <input
          type="text"
          id="appUrl"
          name="appUrl"
          onChange={handleChange}
          value={formData.appUrl}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="githubRepo">GitHub Repo URL:</label>
        <input
          type="text"
          id="githubRepo"
          name="githubRepo"
          onChange={handleChange}
          value={formData.githubRepo}
          placeholder="https://github.com/user/project"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="about">App Description:</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formData.about}
          rows="5"
          cols="40"
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="phase">Phase:</label>
        <select
          id="phase"
          name="phase"
          onChange={handleChange}
          value={formData.phase}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <br></br>
        <br></br>

        <input id="submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Seller;
