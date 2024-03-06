import Form from "./Form";
import Entries from "./Entries";
import "./Main.css";

export default function Main() {
  return (
    <>
      <main className="main">
        <h3>New Entry</h3>
        <Form />
        <Entries />
        <Entries />
        <Entries />
      </main>
    </>
  );
}
