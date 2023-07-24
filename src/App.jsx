import { useState } from 'react';
import { ContainerUser } from './components/ContainerUser';
import { useEffect } from 'react';

export const App = () => {
    /* creamos un state para guardar los USUARIOS */
    const [users, setUsers] = useState([]);

    const limit = 6;
    const offset = 0;

    /* aqui creamos el useEffect para que se ejecute
     tan solo una vez sea creado o renderizado el componente */
    useEffect(() => {
        /* creamos la funcion async que nos va traer a los usuarios de la API */
        /* usamos fetch para hacer la peticion */
        const getUser = async () => {
            /* usamos un await porque vamos a esperar una promesa (el FETCH retorna una promesa) */
            /* el AWAIT hace que esta linea del codigo se detenga y solo siga si se
            resuelve la promesa */
            const result = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
            );
            /* usamos un await porque el result sigue siendo una promesa y lo transformamos a json
            para poder manipularlo, como aun es una promesa tambien esperamos esta linea mientras
            se transforma a JSON*/
            const data = await result.json();
            /* aqui SETEAMOS el resultado de la api en el STATE users */
            setUsers(data.results);
        };
        /* mandamos a llamar la funcion una vez cargue el useEffect */
        /* NOTA: este useEffect se manda a llamar una sola vez (siempre y cuando no tenga dependencias) */
        getUser();
    }, []);

    return <ContainerUser users={users} />;
};
