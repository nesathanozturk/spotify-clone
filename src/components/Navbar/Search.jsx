import { Icon } from "Icons";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-10 h-10 flex items-center justify-center absolute top-0 left-0"
      >
        <Icon name="search" size={24} />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        className="max-w-full w-[22.75rem] pl-12 outline-none text-black h-10 bg-white rounded-3xl placeholder-black/50 text-sm font-medium"
        placeholder="Sanatçılar, şarkılar veya podcast'ler"
      />
    </div>
  );
}

export default Search;
