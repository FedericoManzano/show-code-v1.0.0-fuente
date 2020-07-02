import $ from "jquery"


(function () {
    let indice = 0

    const colorearCadenas = (codigo) => {
        let resultado = ""
        for(let i = 0; i < codigo.length; i ++ ){
            if(codigo[i] === '"' || codigo[i] === "'" || codigo[i] === "`") {
                let car = codigo[i] 
                resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                i ++ 
                while(i < codigo.length && codigo[i] !== car) {
                    resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                    i ++
                }
                if(codigo[i] === car) {
                    resultado += "<span class='show-string'>" + codigo[i] + "</span>"
                    i ++
                }
                resultado += codigo[i]
            }else {
                resultado +=  codigo[i] 
            }
        }

        return resultado
    }


    const colorearComentarios = (codigo) => {
        let resultado = ""
        for(var i = 0; i < codigo.length; i ++ ){ 
            if(codigo[i] === '/' && codigo[i + 1] === '/') {
                resultado += "<span class='show-com'>" + codigo[i] + "</span>"
                i ++ 
                while(codigo[i] !== '\n' && i < codigo.length) {
                    resultado += "<span class='show-com'>" + codigo[i] + "</span>"
                    i ++ 
                }
                resultado +=  codigo[i] 
            } else if(codigo[i] === '/' && codigo[i + 1] === '*') {
                resultado += "<span class='show-com'>" + codigo[i] + "</span>"
                i ++ 
                while(codigo[i] !== '/' && i < codigo.length) {
                    resultado += "<span class='show-com'>" + codigo[i] + "</span>"
                    i ++ 
                }
                if(codigo[i] === '/' ) {
                    resultado += "<span class='show-com'>" + codigo[i] + "</span>"
                    i ++ 
                }
                resultado +=  codigo[i] 
            }
            else {
                resultado +=  codigo[i] 
            }
        }
        return resultado
    }

    const inicializar = () => {
        $(".cod-js").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)
            let resultado = colorearCadenas(codigo)
            resultado = colorearComentarios(resultado)
            resultado = resultado.replace(/=&gt;/g, "<span class='show-res'>=></span>")
            resultado = resultado.replace(/const /g, "<span class='show-res'>const </span>")
            resultado = resultado.replace(/let /g, "<span class='show-res'>let </span>")
            resultado = resultado.replace(/var /g, "<span class='show-res'>var </span>")
            resultado = resultado.replace(/class /g, "<span class='show-res'>class </span>")
            resultado = resultado.replace(/function /g, "<span class='show-res'>function </span>")
            resultado = resultado.replace(/constructor /g, "<span class='show-res'>constructor </span>")
            resultado = resultado.replace(/this/g, "<span class='show-res'>this</span>")
            resultado = resultado.replace(/typeof/g, "<span class='show-res'>typeof</span>")
            resultado = resultado.replace(/import /g, "<span class='show-res'>import </span>")
            resultado = resultado.replace(/export /g, "<span class='show-res'>export </span>")
            resultado = resultado.replace(/from /g, "<span class='show-res'>from </span>")
            resultado = resultado.replace(/true/g, "<span class='show-res'>true</span>")
            resultado = resultado.replace(/false/g, "<span class='show-res'>false</span>")
            

            resultado = resultado.replace(/if/g, "<span class='show-control'>if</span>")
            resultado = resultado.replace(/else/g, "<span class='show-control'>else</span>")
            resultado = resultado.replace(/while/g, "<span class='show-control'>while</span>")
            resultado = resultado.replace(/switch/g, "<span class='show-control'>switch</span>")
            resultado = resultado.replace(/case/g, "<span class='show-control'>case</span>")
            resultado = resultado.replace(/default/g, "<span class='show-control'>default</span>")
            resultado = resultado.replace(/return /g, "<span class='show-control'>return </span>")
            resultado = resultado.replace(/do /g, "<span class='show-control'>do </span>")
            resultado = resultado.replace(/forEach/g, "<span class='show-control'>forEach</span>")
            resultado = resultado.replace(/for/g, "<span class='show-control'>for</span>")
            resultado = resultado.replace(/break/g, "<span class='show-control'>break</span>")


            resultado = resultado.replace(/!/g, "<span class='show-op'>!</span>")
            

            resultado = resultado.replace(/console\./g, "<span class='show-sistema'>console</span><span class='show-neutro'>.</span>")
            resultado = resultado.replace(/window\./g, "<span class='show-sistema'>window</span><span class='show-neutro'>.</span>")
            resultado = resultado.replace(/\( *window *\)/g, "<span class='show-neutro'>( </span><span class='show-sistema'>window</span><span class='show-neutro'> )</span>")
            resultado = resultado.replace(/document\./g, "<span class='show-sistema'>document</span><span class='show-neutro'>.</span>")
            resultado = resultado.replace(/\( *document *\)/g, "<span class='show-neutro'>( </span><span class='show-sistema'>document</span><span class='show-neutro'> )</span>")
            resultado = resultado.replace(/alert\./g, "<span class='show-sistema'>alert</span><span class='show-neutro'>.</span>")
    

            resultado = resultado.replace(/0/g, "<span class='show-numeros'>0</span>")
            resultado = resultado.replace(/1/g, "<span class='show-numeros'>1</span>")
            resultado = resultado.replace(/2/g, "<span class='show-numeros'>2</span>")
            resultado = resultado.replace(/3/g, "<span class='show-numeros'>3</span>")
            resultado = resultado.replace(/4/g, "<span class='show-numeros'>4</span>")
            resultado = resultado.replace(/5/g, "<span class='show-numeros'>5</span>")
            resultado = resultado.replace(/6/g, "<span class='show-numeros'>6</span>")
            resultado = resultado.replace(/7/g, "<span class='show-numeros'>7</span>")
            resultado = resultado.replace(/8/g, "<span class='show-numeros'>8</span>")
            resultado = resultado.replace(/9/g, "<span class='show-numeros'>9</span>")

            
            $(e).html(resultado)
        })
    }

    const CodigoJs = {
        iniciar: () => {
            inicializar()
        }
    }

    window.CodigoJs = CodigoJs
})()

export default CodigoJs
     
