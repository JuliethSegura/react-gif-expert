import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import HeaderDashboard  from './components/Dashboard/HeaderDashboard';
import ContainerFluido from './components/Dashboard/ContainerFluido';
import Main from './components/Dashboard/Main';



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <HeaderDashboard/>
      <ContainerFluido /> 
       <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      } 

    </>
  )
  
}


//Agregar categoria, sin modificar las que están: tienen que tener llave unica
    //setCategories([...categories, 'Valorant']);
    //Agregar categoria desestrcturando sin modificar las que estan
    //setCategories( cat => [...cat, 'Valorant' ]);
    //Insertar una categoria al inicio
    //setCategories(cat => ['Valorant', ...categories]);
    //setCategories([onNewCategory, ...categories]);












