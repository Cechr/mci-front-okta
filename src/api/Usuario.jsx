export async function obtenerUsuario() {
    const url = `http://localhost:8080/whoiam`

    const respuesta = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        credentials: 'include', // include, *same-origin, omit
    });

    const resultado = await respuesta

    if (resultado.redirected) {
        window.location.replace(resultado.url)
    } else {
        return (await respuesta.json())
    }
}

export async function logaut() {
    try {
        const respuesta = await fetch(`http://localhost:8080/logout`, {
            method: 'POST',
            credentials: 'include'
        })
        const resultado = await respuesta.url
    } catch (error) {
        console.log(error);
    }
}