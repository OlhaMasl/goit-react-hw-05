import s from "./SearchBar.module.css"

const SearchBar = ({submitFn}) => {
    return (
        <div className={s.searchBarWrap }>
            <form onSubmit={submitFn} className={s.searchForm } >
                <input name="query" placeholder="Search" type="search" className={s.input} />
                <button type="submit" className={s.formBtn }>Search</button>
            </form>  
        </div>
    );
};

export default SearchBar;