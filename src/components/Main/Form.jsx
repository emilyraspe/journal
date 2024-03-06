import Button from "../Button/Button.jsx";

export default function Form() {
  return (
    <>
      <form className="form">
        <label>Motto</label>
        <input type="text"></input>
        <label>Notes</label>
        <textarea rows="4" cols="50"></textarea>
      </form>
      <Button />
    </>
  );
}
