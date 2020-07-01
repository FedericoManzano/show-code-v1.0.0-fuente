import $ from "jquery"


(function () {
    let indice = 0
    


    const esClave = (codigo, pos) => {
        return codigo[pos] === '@'
    }

    const colorearClave = (codigo, resultado, pos) => {
        while(codigo[pos] !== ' ' && pos < codigo.length ) {
            resultado += "<span class='show-clave'>" + codigo[pos] + "</span>"
            pos ++
        }

        indice = pos
        return resultado
    }

    const inicializar = () => {
        $(".cod-css").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)

            let resultado = ""
            for (let i = 0; i < codigo.length; i++) {
                if(esClave(codigo,i)){
                    resultado = colorearClave(codigo, resultado, i)
                    i = indice
                }
            }

            $(e).html(resultado)
        })
    }

    const CodigoCss = {
        iniciar: () => {
            inicializar()
        }
    }

    window.CodigoCss = CodigoCss
})()

export default CodigoCss
     
