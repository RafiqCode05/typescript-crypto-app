interface Props {
    value:string;
    onChange:(v:string)=>void;
}

const SearchBar = ({value,onChange}:Props) => {
  return (
    <input type="text" placeholder="Kripto axtar..." className="search-bar" value={value}
    onChange={e=>onChange(e.target.value)} />
  )
};

export default SearchBar