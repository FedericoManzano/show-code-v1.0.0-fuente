import $ from "jquery"


(function () {
    let indice = 0
    


    const esClave = (codigo, pos) => {
        return codigo[pos] === '@'
    }

    const esCadena = (codigo, pos) => {
        return codigo[pos] === '"' || codigo[pos] === "'"
    }

    const esProp = (codigo, pos) => {
        return codigo[pos] === '{'
    }

    const esSelector = (codigo, pos) => {
        if(codigo[pos] === ' ' || codigo[pos] === '\t') return false
        return /(\.*\#*[^ @ ][a-zA-Z-_\(\)\[\])]+ *\n*{)/.test(codigo.substring(pos, codigo.length))
    }

    const colorearClave = (codigo, resultado, pos) => {
        while(codigo[pos] !== ' ' && pos < codigo.length ) {
            resultado += "<span class='show-claves'>" + codigo[pos] + "</span>"
            pos ++
        }
        resultado += codigo[pos]
        indice = pos
        return resultado
    }

    const colorearPop = (codigo, resultado, pos) => {
        resultado += "<span class='show-llaves'>" + codigo[pos] + "</span>"
        pos ++

        while(codigo[pos] !== '}' && pos < codigo.length ) {
            while(codigo[pos] !== ':' && codigo[pos] !== '}' &&pos < codigo.length ) {
                resultado += "<span class='show-prop'>" + codigo[pos] + "</span>"
                pos ++
            }
            while( codigo[pos] !== '\n' && codigo[pos] !== '}' && pos < codigo.length ) {
                resultado += "<span class='show-valor'>" + codigo[pos] + "</span>"
                pos ++
            }
        }


        
        resultado += codigo[pos]
        indice = pos
        return resultado
    }


    const colorearCadena = (codigo, resultado, pos) => {
        let caracterFin = codigo[pos]
        resultado += "<span class='show-string'>" + codigo[pos] + "</span>"
        pos ++
        while(codigo[pos] !== caracterFin && pos < codigo.length ) {
            resultado += "<span class='show-string'>" + codigo[pos] + "</span>"
            pos ++
        }
        if(codigo[pos] === caracterFin) 
            resultado += "<span class='show-string'>" + codigo[pos] + "</span>"
        else 
            resultado += codigo[pos]

        if(codigo[pos] === '}') {
            resultado += "<span class='show-llaves'>" + codigo[pos] + "</span>"
            pos ++
        }

        indice = pos
        return resultado
    }

    const colorearSelector = (codigo, resultado, pos) => {
        while(codigo[pos] !== '}' && !esProp(codigo, pos) && !esClave(codigo, pos) && !esCadena(codigo, pos) && codigo[pos] !== '{' && pos < codigo.length ) {
            resultado += "<span class='show-selectores'>" + codigo[pos] + "</span>"
            pos ++
        }

        if(esCadena(codigo, pos) ) {
            indice = pos
            return resultado
        } 

        if(esClave(codigo, pos) ) {
            indice = pos
            return resultado
        } 

        if(esProp(codigo, pos) ) {
            indice = pos
            return resultado
        }

        
        resultado += codigo[pos]
        indice = pos
        return resultado
    }



    const inicializar = () => {
        $(".cod-css").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)

            let resultado = ""
            for (let i = 0; i < codigo.length; i++) {

                if(esSelector(codigo, i)) {
                    resultado = colorearSelector(codigo, resultado, i)
                    i = indice
                    if(esCadena(codigo, i)) {
                        resultado = colorearCadena(codigo, resultado, i) 
                        i = indice
                    }
                    if(esClave(codigo, i)) {
                        resultado = colorearClave(codigo, resultado, i) 
                        i = indice
                    }

                    if(esProp(codigo, i)) {
                        console.log("pror")
                        resultado = colorearPop(codigo, resultado, i) 
                        i = indice
                    }
                }
                else {
                    resultado += codigo[i]
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
     
