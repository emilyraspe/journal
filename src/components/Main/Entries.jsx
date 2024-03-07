import starFilled from "../../assets/star-filled.svg";
import "./Entries.css";
import "../Button/Button.css";

export default function Entries() {
  return (
    <>
      <section className="entries">
        <h4>06. March 2024</h4>
        <div className="entries_head">
          <h3>Title</h3>
          <button className="button--star">
            <img src={starFilled}></img>
          </button>
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
