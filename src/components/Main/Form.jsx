import Button from "../Button/Button.jsx";

export default function Form() {
  return (
    <>
      <form className="form">
        <label>Motto</label>
        <input type="text" className="form--input"></input>
        <label>Notes</label>
        <textarea rows="4" cols="50" className="form--input"></textarea>
      </form>
      <Button />
    </>
  );
}
