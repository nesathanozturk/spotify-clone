import categories from "data/categories";
import favoriteCategories from "data/favorite-categories";
import Title from "components/Title";
import ScrollContainer from "react-indiana-drag-scroll";
import { useEffect, useRef, useState } from "react";
import { Icon } from "Icons";

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
      className="rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]"
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
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />
        <div className="relative">
          {prev && (
            <button
              className="absolute -left-6 z-10 top-1/2 hover:scale-[1.06] -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex justify-center items-center"
              onClick={slideFavoritesPrev}
            >
              <Icon name="prev" size={24} />
            </button>
          )}
          {next && (
            <button
              onClick={slideFavoritesNext}
              className="absolute -right-6 z-10 top-1/2 hover:scale-[1.06] -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex justify-center items-center"
            >
              <Icon name="next" size={24} />
            </button>
          )}
        </div>
        <ScrollContainer
          innerRef={favoritesRef}
          className="flex overflow-x gap-x-6 scrollable"
        >
          {favoriteCategories.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </ScrollContainer>
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
