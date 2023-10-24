/* TASCA 1 */
const botonNick = document.querySelector('#btnNick')

botonNick.addEventListener('click', function(event){
    event.preventDefault()
    let nick = document.querySelector('#nick').value
    if(nick.trim() == ""){
        alert('El nick no pot estar en blanc')
    }else{
        nick = nick.toUpperCase()
        nick = nick.replaceAll(' ', '_')
    }
    document.querySelector('#nickFinal').innerHTML = nick
})

/* TASCA 2 */
const botonFecha = document.querySelector('#btnFecha')

botonFecha.addEventListener('click', function(event){
    event.preventDefault()
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    let fechaHoy = new Date()
    let fechaTime = fechaHoy.toTimeString()
    let fecha = fechaHoy.getDate() + ' ' + meses[fechaHoy.getMonth()] + ' ' + fechaHoy.getFullYear() + ' - ' + fechaTime.substring(0,8)	
    let fechaYYMM = fechaHoy.toISOString()
    fechaYYMM = fechaYYMM.replaceAll('-','/')
    fechaYYMM = fechaYYMM.replaceAll('Z','')
    document.querySelector('#modificaDataLabel').innerHTML = fecha
    document.querySelector('#modificaData2Label').innerHTML = fechaYYMM
})

/* TASCA 3 */
const botonDias = document.querySelector('#btnDias')

botonDias.addEventListener('click', function(event){
    event.preventDefault()
    const dataText = document.querySelector('#nick').value
    const resultado = dias(dataText)
    document.querySelector('#dias').innerHTML = resultado
})

function dias(dataDias){
    const format = /^(\d{4})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    let fechaFormat = dataDias.match(format)
    if (!fechaFormat) {
        return document.querySelector('#dias').innerHTML = 'Formato incorrecto'
    }

    const [, any, mes, dia, hora, minuto, segundo] = fechaFormat
    const inputDate = new Date(`${any}-${mes}-${dia}T${hora}:${minuto}:${segundo}`)
    const diaActual = new Date()

    const diferenciaTiempo = diaActual - inputDate
    console.log(diferenciaTiempo)
    const diasContados = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))
    console.log(diasContados)

    return diasContados
}

/* TASCA 4 */
let dades = {
    partidas: [
    {   
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561,
        fecha: '23/12/2005T12:12:00'
    },
    {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561,
        fecha: '23/09/2006T13:12:00'
    }],
    ranking: [
    {   
        avatar: 'imagen1.png',
        nick: 'MANOLO',
        puntuacion: 124561
    },
    {
        avatar: 'imagen2.png',
        nick: 'PEDRA',
        puntuacion: 1561
    }],
}

let ls = { 
    setDades: function(dades) {
        let dadesJSON = JSON.stringify(dades)
        localStorage.setItem('tetris_datos', dadesJSON)
        return true
    },
    getDades: function() {
        let tetrisDades = localStorage.getItem('tetris_datos')
        if (tetrisDades) {
            return JSON.parse(tetrisDades)
        } else {
            return {}
        }
    }
}

ls.setDades(dades)
ls.getDades()

/* TASCA 5 */
partida = {
    avatar: 'imagen2.png',
    nick: 'PEDRA',
    puntuacion: 1561,
    fecha: '23/09/05T13:12:00'
}

function registrePartidas(partida){
    let datos = ls.getDades() /* Aquesta funció ha de capturar les dades del localstorage */
    datos.partidas.push(partida) /* Després ha d'afegir la partida a l'array partidas */
    ls.setDades(datos) /* Finalment, ha de desar les dades al localstorage */
}

registrePartidas(partida)