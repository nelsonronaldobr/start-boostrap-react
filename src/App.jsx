//import style from './styles-sheet/style.module.css';

// import { Button } from './components/Button';
// import { Navbar } from './components/Navbar';
import { CardContainer } from './components';
export const App = () => {
const productos = [
{
  id : "1",
  name: "Bicicleta",
  description : "Montañera MV8",
  price: 500
},
{
  id : "2",
  name: "Colchon",
  description : "Colchon de 1/2",
  price: 200
},
{
  id : "3",
  name: "Mesa",
  description : "Mesa de cedro",
  price: 300
},
{
  id : "4",
  name: "Tv",
  description : "LG4",
  price: 1000
}
]
  return(
    <CardContainer className={"flex"} products= {productos} />
  )
}



// export const App = () => {
//   const links = [
//     {
//       title: 'home',
//       href: '/home',
//     },
//     {
//       title: 'About',
//       href: '/about',
//     },
//   ];

//   const links2 = [
//     {
//       title: 'contact',
//       href: '/contact',
//     },
//     {
//       title: 'products',
//       href: '/products',
//     },
//   ];

//   return (
//     <div>
//       {/* <Navbar
//         links={links}
//         manzana='1'
//         manzana2='2'>
        
//         <p>hola</p>
//         <p>hola</p>
//       </Navbar>
//       <Navbar
//         links={links2}
//         manzana={2}
//         manzana2={['1', '2', '3']}
//         status={false}>
        
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//         <p>hola</p>
//       </Navbar> */}
//       <Button className={'amarillo'}>Aceptar</Button>
//       <Button className={'rosado'}>Cancelar</Button>
//       <Button className={'verde'}>Exportar</Button>
//     </div>
//   );
// };
