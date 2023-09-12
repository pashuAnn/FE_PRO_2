import { useEffect } from 'react';
import { goodsDb } from '../../utils';

export default function Search({ search, setSearch, searchList, setSearchList }) {
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch(`${goodsDb}?title_like=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Обновляем список товаров
        setSearchList(data);
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  }, [search, setSearchList]);

  return (
    <div className="searchWrap">
      <input type="text" onChange={handleSearch} />
    </div>
  );
}

