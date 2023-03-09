import Section from "components/Section";
import songs from "data/songs";

function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/more" items={songs} />
      <Section title="Show to try" more="/more" items={songs} />
      <Section title="Made for Neşathan Öztürk" more="/more" items={songs} />
    </div>
  );
}

export default Home;
