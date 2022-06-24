import { useState } from "react"
import { useHistory } from "react-router-dom"
import { 
  Flex, 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Heading, 
  Textarea,
  Select,
  Button, 
  FormHelperText 
} from "@chakra-ui/react"
import "../style.css"

function Seller() {

  const initialForm = {
    appName: "",
    image: "",
    developerNames: "",
    githubRepo: "",
    appUrl: "",
    about: "",
    phase: "1",
}

  const [formData, setFormData] = useState(initialForm)

  const history = useHistory()
  //console.log(history)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ ...formData, likes: 0 }),
    }

    fetch("http://localhost:3000/apps", configObj)
    // .then((res) => res.json())
    // .then((data) => console.log(data) );

    //should this push /seller?
    // history.push("/");

    setFormData(initialForm)
  }

  return (
     <Flex justifyContent="center" >
      <Box marginTop="5%"
      marginBottom="5%"
      border="1px solid lightgrey"
      borderRadius="2xl"
      padding="5%" >
        <FormControl id="form1" >
          <Heading size="lg" >Developer Page</Heading>
          <Heading size="sm"
          marginTop="2%" >
            Add information about your app here
          </Heading>
          <FormLabel htmlFor="developerNames"
          marginTop="5%" >
            Developers:
          </FormLabel>
          <Input type="text"
            name="developerNames"
            id="developerNames"
            onChange={handleChange}
            value={formData.developerNames}
            placeholder="ex. Connie, Mark, Samantha, Harrison"
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="appName">App Title:</FormLabel>
          <Input
            type="text"
            id="appName"
            name="appName"
            onChange={handleChange}
            value={formData.appName}
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="appUrl">App URL:</FormLabel>
          <Input
            type="text"
            id="appUrl"
            name="appUrl"
            onChange={handleChange}
            value={formData.appUrl}
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="githubRepo">GitHub Repo URL:</FormLabel>
          <Input
            type="text"
            id="githubRepo"
            name="githubRepo"
            onChange={handleChange}
            value={formData.githubRepo}
            placeholder="https://github.com/user/project"
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="image">Image URL:</FormLabel>
          <Input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            value={formData.image}
            placeholder="https://imgur.com/t/funny_cat"
          />
          <FormHelperText>If you don't have an image Url, leave this field empty</FormHelperText>
          <br></br>
          <br></br>
          <FormLabel htmlFor="about">App Description:</FormLabel>
          <Textarea
            id="about"
            name="about"
            onChange={handleChange}
            value={formData.about}
            rows="5"
            cols="40"
          />
          <br></br>
          <br></br>
          <FormLabel htmlFor="phase" >Phase:</FormLabel>
          <Select
            id="phase"
            name="phase"
            onChange={handleChange}
            value={formData.phase} >
            <option value="1">Phase 1</option>
            <option value="2">Phase 2</option>
            <option value="3">Phase 3</option>
            <option value="4">Phase 4</option>
            <option value="5">Phase 5</option>
          </Select>
          <br></br>
          <br></br>
          <Flex justifyContent="center" >
            <Button id="submit"
            value="Submit"
            colorScheme="twitter"
            width="75%"
            onClick={handleSubmit}
            >Submit</Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex> 
  );
}

export default Seller;

