import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="flex gap-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {items.map((item) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Section;
