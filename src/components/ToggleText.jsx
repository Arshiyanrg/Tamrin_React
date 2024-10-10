import { useState } from "React";
function ToggleText() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>


      {showText && <p>Hello, World!</p>}
    </>
  );
}

export default ToggleText;