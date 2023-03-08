import Section from "components/Section";
import items from "data/songs";

function Home() {
  return (
    <div>
      <Section title="Recently played" more="/more" items={items} />
    </div>
  );
}

export default Home;
