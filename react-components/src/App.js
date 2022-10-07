import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className='container mt-6 mx-auto w-full px-3'>
      <h1>Tailwind + React</h1>
      <h2>Tailwind + React</h2>
      <button className='btn btn-blue btn-blue:hover'>Boton</button>
      <div className='flex -mx-2 flex-wrap'>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2">
          <Card photo='https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg'/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2">
          <Card photo='https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440' />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2">
          <Card photo='https://us.123rf.com/450wm/kesu87/kesu871907/kesu87190700139/127039478-hermoso-paisaje-con-amanecer-en-la-cascada-kirkjufellsfoss-y-la-monta%C3%B1a-kirkjufell-islandia-.jpg?ver=6' />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-2">
          <Card photo='https://i0.wp.com/www3.gobiernodecanarias.org/medusa/ecoblog/crodalf/files/2022/03/montana-1.jpg?resize=621%2C414&ssl=1' />
        </div>
      </div>
    </div>
  )
}

export default App;
