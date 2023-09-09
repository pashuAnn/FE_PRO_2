import React, { useState } from 'react';
import LogInForm from './components/LogInForm/LogInForm'
import NavMenu from './components/NavMenu/NavMenu';
import Search from './components/Search/Search'
import ModalError from './components/Modal/ModalError'

function App() {
  const [menu, setMenu] = useState(1);
  const [userData, setUserData] = useState({}); // Убираем userInputs, так как мы больше не используем его
  const [isExist, setIsExist] = useState(false);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  
  function onSubmit(data) {
    const queryUrl = `username=${data.userName}&email=${data.email}`;
    fetch(`https://jsonplaceholder.typicode.com/users?${queryUrl}`)
      .then(response => response.json())
      .then(userData => {
        if (userData.length > 0) {
          setUserData(userData);
          localStorage.setItem('user', JSON.stringify(userData)); // Правильно сохраняем данные пользователя
          setMenu(2);
        } else {
          setIsExist(true);
        }
      })
      .catch((error) => {
        console.error('fetch error', error);
        alert('no such user');
      });
  }
  
  const pageContent = () => {
    switch (menu) {
      case 1:
        return (
            <>
              <LogInForm onSubmit={onSubmit} />
              <ModalError show={isExist} onHide={() => setIsExist(false)} />
            </>
          );
      case 2:
        return (
          <NavMenu data={userData} choiseMenu={setMenu} setMenu={setMenu} />
        );
      case 3:
        return (
          <Search search={search} setSearch={setSearch} searchList={searchList} setSearchList={setSearchList}/>
        );
      default:
        return null; 
    }
  };

  return (
    <div className='main_app'>
      {pageContent()}
    </div>
  );
}

export default App;


