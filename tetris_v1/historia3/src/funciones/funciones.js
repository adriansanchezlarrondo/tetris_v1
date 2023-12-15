export const modificaNick = (nick)=>{
    let textoDefinitivo = nick
    if(textoDefinitivo != ""){
        textoDefinitivo = textoDefinitivo.toUpperCase() 
        textoDefinitivo = textoDefinitivo.trim() 
        textoDefinitivo = textoDefinitivo.replaceAll(' ', "_")
        
        return textoDefinitivo 
    } else {
        return null
    }
}

export const modificaData = (data)=>{
    const partesFecha = data.split('T');
    const partesFechaPrincipal = partesFecha[0].split('/');
    const partesHora = partesFecha[1].split(':');
    const dia = partesFechaPrincipal[2];
    const mes = partesFechaPrincipal[1];
    const año = partesFechaPrincipal[0];
    const horas = partesHora[0];
    const minutos = partesHora[1];
    const segundos = partesHora[2];
    
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    const fechaFormateada = `${parseInt(dia)} ${meses[parseInt(mes) - 1]} ${año.padStart(4, '20')} - ${horas}:${minutos}:${segundos}`;
        
    return fechaFormateada;
}

export const modificaData2 = (objecteDate) => {
    return `${(objecteDate.getFullYear() % 100)
        .toString()
        .padStart(2, '0')}/${(objecteDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${objecteDate.getDate()
        .toString()
        .padStart(2, '0')}T${objecteDate.getHours()
        .toString()
        .padStart(2, '0')}:${objecteDate.getMinutes()
        .toString()
        .padStart(2, '0')}:${objecteDate.getSeconds()
        .toString()
        .padStart(2, '0')}`;
};


export const dias = (dataText)=>{
    const format = /^(\d{2})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    let fechaFormat = dataText.match(format)

    if (!fechaFormat) {
        return {   
            error: true, 
            missatge: "El format no és correcte"
        }
    }

    const [, any, mes, dia, hora, minuto, segundo] = fechaFormat
    const inputDate = new Date(`20${any}-${mes}-${dia}T${hora}:${minuto}:${segundo}`)
    const diaActual = new Date()

    const diferenciaTiempo = diaActual - inputDate
    const diasContados = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))

    return diasContados
}