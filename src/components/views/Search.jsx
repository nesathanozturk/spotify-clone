import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import Title from "components/Title";

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
          className="w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x[18%] translate-y-[5%] absolute bottom-0 right-0 shadow-spotify"
        />
      </div>
    </div>
  );
}

function WideCategory({ category }) {
  return (
    <div
      style={{ backgroundColor: category.color }}
      className="rounded-lg relative w-[27.375rem] h-[13.75rem]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          alt={category.title}
          className="w-32 h-32 rotate-[25deg] translate-x[18%] translate-y-[5%] absolute bottom-0 right-0 shadow-spotify"
        />
      </div>
    </div>
  );
}

function Search() {
  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />
        <div>
          {favoriteCategories.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </div>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
