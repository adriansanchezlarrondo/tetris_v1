export const juego = {
    template: // html
    `
    <div class="container mt-5">
        <form>
            <div class="mb-3">
                <label for="inputField" class="form-label">Ingrese Nick:</label>
                <input
                type="text"
                class="form-control w-25"
                id="nick"
                name="inputField"
                placeholder="Nick:"
                />
            </div>
            <button id="btnNick" type="submit" class="btn btn-primary">VER NICK</button>
            <label for="inputField" class="form-label d-block mt-3" id="nickFinal"></label>

            <button id="btnFecha" type="submit" class="btn btn-primary mt-5">
                CLICA PARA VER FECHA
            </button>

            <div class="mb-3">
                <label for="modificaData" class="form-label mt-4">Fecha (yy/mm/ddThh:mm:ss) :</label>
                <label id="modificaDataLabel"></label>
                <label for="modificaData2" class="form-label d-block">YY/MM/DDTHH:MM:SS :</label>
                <label id="modificaData2Label"></label>

                <button id="btnDias" type="submit" class="btn btn-primary my-3 d-block">
                CUANTOS DIAS HAN PASADO 
                </button>
                <label for="cuentaDias" class="form-label d-block">Cuantos dias han pasado desde el</label>
                <label id="dias"></label>
            </div>
        </form>
    </div>
    `,
    script: () => {
        /* TASCA 1 */
        const botonNick = document.querySelector('#btnNick')
        botonNick.addEventListener('click', function(event){
            event.preventDefault()
            let nick = document.querySelector('#nick').value
            modificaNick (nick)
        })

        function modificaNick (nick) {
            if(nick != ""){
                nick = nick.toUpperCase() 
                nick = nick.trim() 
                nick = nick.replaceAll(' ', "_")
                
                document.querySelector('#nickFinal').innerHTML = nick
            } else {
                alert('El nick no pot estar en blanc')
            }
        }

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

        function dias(dataText){
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
    }
}