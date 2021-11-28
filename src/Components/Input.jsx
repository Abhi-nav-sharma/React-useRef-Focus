import { useRef } from "react";

export default function Input() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <input ref={ref} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
