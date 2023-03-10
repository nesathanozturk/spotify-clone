import { Icon } from "Icons";

function Search() {
  return (
    <div className="w-full md:w-80 mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-10 h-10 flex items-center justify-center absolute top-8 left-0 md:top-0 md:left-0"
      >
        <Icon name="search" size={24} />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-input"
        className="max-w-full w-full md:w-[18.75rem] mt-8 md:mt-0 lg:w-[22.75rem] pl-10 md:pl-12 outline-none text-black h-10 bg-white rounded-md md:rounded-3xl placeholder-black/50 text-sm font-medium"
        placeholder="What do you want to listen to?"
      />
    </div>
  );
}

export default Search;
