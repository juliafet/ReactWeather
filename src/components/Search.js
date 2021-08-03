import { useState } from "react"

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const searchHandler = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="search">
            <form action="">
                <input type="text" id="search-bar" placeholder="Search cities" 
                onChange={searchHandler} />
                <button type="submit">Search</button> 
            </form>
            <div className="searchResults">
                
            </div>
        </div>
    )

}

export default Search