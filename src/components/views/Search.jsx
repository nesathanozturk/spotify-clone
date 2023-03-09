import categories from "data/categories";

function Category({ category }) {
  return (
    <div
      style={{ backgroundColor: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          alt={category.title}
          className="w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x[18%] translate-y-[5%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
}

export default Search;
