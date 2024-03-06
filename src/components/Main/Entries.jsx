import starFilled from "../../assets/star-filled.svg";
import "./Entries.css";

export default function Entries() {
  return (
    <>
      <section>
        <h4>Date</h4>
        <div className="entries_head">
          <h3>Title</h3>
          <img src={starFilled}></img>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          alias tenetur dolor ratione libero fuga tempora. Reiciendis, corrupti
          sunt.
        </p>
      </section>
    </>
  );
}
