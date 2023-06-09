import { useState } from "react";
import Link from "next/link";

// TODO: Change document.body to a guest list array as a useState, add much more chakra-ui
const Welcome = () => {
  const [yourName, setYourName] = useState("");

  const printName = (param) => {
    const box = document.createElement("box");
    box.innerText = "Gabe has now met: " + param + "\n";
    document.body.append(box);
  };

  return (
    <>
      <label>
        Welcome to Geb&apos;s page, please introduce yourself <br />
      </label>
      <br />
      <input
        type="text"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
      <br />
      <button onClick={() => printName(yourName)}>Sign the Guest List</button>
      <br />
      <br />

      <div>Hi Geb, my name is {yourName}</div>
      <div className="about">
        <Link href="/about">Who is Gabe?</Link>
      </div>
    </>
  );
};

export default Welcome;
