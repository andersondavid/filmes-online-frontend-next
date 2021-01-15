import { useState } from "react";
import { useRouter } from 'next/router'

const SeachBar = ({fromMobile}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter()


  const submitSearch = (e) => {
    e.preventDefault()
    router.push(`/pesquisar/${searchTerm}/1`)
    
    if(fromMobile !== undefined){
      fromMobile.setOpenedMenu(!fromMobile.openedMenu)
    }
  };

  return (
    <div className="searchbar-container">
      <div className="logo">
        <img
          src={'/images/big-logo.png'}
          alt=""
        />
      </div>
      <div className="search-input">
        <form onSubmit={submitSearch} >
          <input
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            className="searchbar-input"
            placeholder="Pesquisar..."
          />
          <input
            type="submit"
            className="material-icons searchbar-submit"
            value="search"
          />
        </form>
      </div>
    </div>
  );
};

export default SeachBar;
