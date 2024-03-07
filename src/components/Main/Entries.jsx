import starFilled from "../../assets/star-filled.svg";
import "./Entries.css";
import "../Button/Button.css";

export default function Entries() {
  const entries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

  return (
    <>
      {entries.map(({ id, date, motto, notes }) => (
        <section key={id} className="entries">
          <h4>{date}</h4>
          <div className="entries_head">
            <h3>{motto}</h3>
            <button className="button--star">
              <img src={starFilled}></img>
            </button>
          </div>
          <p>{notes}</p>
        </section>
      ))}
    </>
  );
}
