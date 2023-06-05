import { useState } from "react";
// import getData from "./api/fetch";
// import Flex from "@chakra-ui/react"

const Welcome = () => {
  const [yourName, setYourName] = useState('');
  
  return (
    <>
      <form>
        <label>Welcome to Geb's page, please introduce yourself <br /></label>
        <br />
        <input 
        type="text" 
        value={ yourName }
        onChange={(e) => setYourName(e.target.value)}/>
      </form>
      
      <div>Hi Geb, my name is { yourName }</div>
      
    </>
  );
};

// const About = () => {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         getData()
//     });

//   return (
//     <div>
//       <p>
//         My nem is Geb!
//         <code>About me:</code>

//         <Flex>

//         </Flex>
//       </p>
//     </div>
//   );
// }

export default Welcome;
