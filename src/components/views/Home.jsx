import Section from "components/Section";
import items from "data/songs";

function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/more" items={items} />
      <Section title="Show to try" more="/more" items={items} />
      <Section title="Made for Neşathan Öztürk" more="/more" items={items} />
    </div>
  );
}

export default Home;
