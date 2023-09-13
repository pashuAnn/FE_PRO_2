import React, { useState } from 'react';
import LogInForm from './components/LogInForm/LogInForm';
import NavMenu from './components/NavMenu/NavMenu';
import Search from './components/Search/Search';
import ModalError from './components/Modal/ModalError';
import EditProfile from './components/EditProfile/EditProfile';


export default function App() {
  const [menu, setMenu] = useState(1);
  const [userData, setUserData] = useState({});
  const [isExist, setIsExist] = useState(false);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [formData, setFormData] = useState([])

  function onSubmit(data) {
    const queryUrl = `username=${data.userName}&email=${data.email}`;
    fetch(`https://jsonplaceholder.typicode.com/users?${queryUrl}`)
      .then(response => response.json())
      .then(userData => {
        if (userData.length > 0) {
          setUserData(userData);
          localStorage.setItem('user', JSON.stringify(userData));
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
          <NavMenu
             data={userData}
             choiseMenu={setMenu}
             setMenu={setMenu}
            // onEditProfile={() => setIsEditProfileModalOpen(true)} // Открываем модальное окно редактирования профиля
          />
        );
      case 3:
        return (
          <Search
            search={search}
            setSearch={setSearch}
            searchList={searchList}
            setSearchList={setSearchList}
          />
        );
        case 4:
          return (
            <EditProfile
            formData={formData}
            setFormData={setFormData}
            />
          ) 
      default:
        return null;
    }
  };

  // const handleProfileSave = async (updatedProfile) => {
  //   try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${updatedProfile.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedProfile),
  //     });

  //     if (response.status === 200) {
  //       setUserData(updatedProfile);
  //       setIsEditProfileModalOpen(false);
  //     } else {
  //       console.error('Ошибка при обновлении данных профиля');
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при выполнении запроса:', error);
  //   }
  // };

  return (
    <div className='main_app'>
      {pageContent()}
      {/* {isEditProfileModalOpen && (
        <EditProfile
          user={userData}
          onSave={handleProfileSave}
          onClose={() => setIsEditProfileModalOpen(false)}
        /> */}
      
    </div>
  );
}



