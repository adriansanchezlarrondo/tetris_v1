const partidas = [
    {
        avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
        nick: 'MANUEL',
        puntos: 520,
        fecha: '27 SEPTIEMBRE 2023'
    },
    {
        avatar: 'https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg',
        nick: 'JOSEMA',
        puntos: 150,
        fecha: '2 MARZO 2023'
    },
    {
        avatar: 'https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg',
        nick: 'MARIA',
        puntos: 650,
        fecha: '5 MAYO 2023'
    }
]   

function pintaTabla(partidas){
    let tabla = `
    <h2 class="text-center text-light">Partidas</h2>
    <div class="input-group mb-3">
    <input
        type="text"
        class="form-control"
        placeholder="Buscador"
        aria-label="Buscador"
        aria-describedby="button-addon2"
    />
    <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
    >
        <i class="bi bi-x-lg"></i>
    </button>
    </div>
    <table class="table table-dark">
    <theader>
        <tr>
        <td></td>
        <td>Nick <i class="bi bi-arrow-up-square"></i></td>
        <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
        <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
        </tr>
    </theader>
    <tbody>
    `
    partidas.forEach(element => {
        tabla += `<tr>
        <td><img width="50" src="${element.avatar}"></td>
        <td>${element.nick}</td>
        <td>${element.puntos}</td>
        <td>${element.fecha}</td>
        </tr>`
    });

    tabla+=`
    </tbody>
    <tfoot></tfoot>
    </table> 
    `
    document.querySelector('#partidas').innerHTML = tabla
    console.log(tabla)
}

function pintaRanking(){
    let rank = `
    <h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
    <theader>
        <tr class="bg-dark">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </theader>
    <tbody>
        <tr>
            <td class="fs-2">1</td>
            <td><img src="" alt="avatar" /></td>
            <td>ANDER</td>
            <td>1255</td>
        </tr>
        <tr>
            <td class="fs-2">2</td>
            <td><img src="" alt="avatar" /></td>
            <td>ANDER</td>
            <td>1255</td>
        </tr>
        <tr>
            <td class="fs-2">3</td>
            <td><img src="" alt="avatar" /></td>
            <td>ANDER</td>
            <td>1255</td>
        </tr>
    </tbody>
    <tfoot></tfoot>
    </table>
    `
    document.querySelector('#ranking').innerHTML = rank
    console.log(rank)
}



const datosEjemploPartida = {
    avatar:'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
    nick: 'JORGE',
    puntos: 100,
    fecha:'21 MAYO 2023' 
}

function insertaNuevaPartida(datosEjemploPartida){
    console.log('Guardando partida..')
    console.log('Avatar: ' + datosEjemploPartida.avatar)
    console.log('Nombre: ' + datosEjemploPartida.nick)
    console.log('Puntos: ' + datosEjemploPartida.puntos)
    console.log('Fecha: ' + datosEjemploPartida.fecha)

    partidas.push(datosEjemploPartida)
    console.log(partidas)
}

function pintaDatosPartida(datosEjemploPartida){
    console.log('Avatar: ' + datosEjemploPartida.avatar)
    console.log('Nombre: ' + datosEjemploPartida.nick)
    console.log('Puntos: ' + datosEjemploPartida.puntos)
    console.log('Fecha: ' + datosEjemploPartida.fecha)

    let datosPartida = `
    Avatar: ${datosEjemploPartida.avatar}
    Nombre: ${datosEjemploPartida.nick}
    Puntos: ${datosEjemploPartida.puntos}
    Fecha: ${datosEjemploPartida.fecha}

    ¿Quieres guardar la partida?
    `
    const guardarPartida = confirm(datosPartida)
    if(guardarPartida){
        insertaNuevaPartida(datosEjemploPartida)
        pintaTabla(partidas)
    }
}

pintaTabla(partidas)
pintaRanking()
pintaDatosPartida(datosEjemploPartida)