import React, {  useState } from 'react';
import LogInForm from './components/LogInForm/LogInForm'
import {usersDb} from "./utils";
import NavMenu from './components/NavMenu/NavMenu';
import Search from './components/Search/Search'
import ModalError from './components/LogInForm/ModalError'




function App() {
  const [menu, setMenu] = useState(1);
  const [userInputs, setUserInputs] = useState({});
  const [userData, setUserData] = useState({});
  const [isExist, setIsExist] = useState(false);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const queryUrl = `username=${userInputs.userName}&email=${userInputs.email}`;

  function onSubmit(data) {
    fetch(`${usersDb}${queryUrl}`)
      .then(response => response.json())
      .then(userData => {
        if (userData.length > 0) {
          // Пользователь существует, переходим на страницу личного кабинета
          setUserData(userData);
          localStorage.setItem('user', JSON.stringify(userData));
          setMenu(2); // Перейти на страницу личного кабинета
        } else {
          setIsExist(true); // Показать сообщение об ошибке
        }
      })
      .catch((error) => {
        console.error('fetch error', error);
        alert('no such user');
      });
  }
  
  
  // useEffect(() => {
  //   if (Object.keys(userInputs).length > 0) {
  //     fetch(`${usersDb}${queryUrl}`)
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.length > 0) {
  //           setUserData(data);
  //           localStorage.setItem('user', JSON.stringify(data));
  //           setMenu(2);
  //         } else {
  //           setIsExist(true);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('fetch error', error);
  //         alert('no such user');
  //       });
  //   }
  // }, [userInputs]);
  
  const pageContent = () => {
    switch (menu) {
      case 1:
        return (
            <>
              <LogInForm onSubmit={onSubmit}/>
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

