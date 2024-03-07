import "./Tab.css";

export default function Tab() {
  return (
    <>
      <section className="tab--section">
        <tab className="tab">
          <span className="tab--active--text">All Entries</span>
          <span className="tab--number tab--active">3</span>
        </tab>
        <tab>
          <span>Favourites</span>
          <span className="tab--number">1</span>
        </tab>
      </section>
    </>
  );
}
