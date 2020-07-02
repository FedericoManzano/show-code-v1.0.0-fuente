import $ from "jquery"


(function () {
    let indice = 0
    
    const colorearFunctones = (codigo ,resultado, pos) => {
        let desde = codigo.search(/[a-zA-Z_$]+ *\({1}/)
        let aux = codigo.substring(pos, codigo.length)

        while(desde !== -1 && pos < codigo.length) {
            pos = desde
            while(aux[pos] !== '(' && pos < codigo.length) {
                resultado += "<span class='show-nombres'>" + codigo[pos] + "</span>"
                pos ++
            }
            console.log(aux)

            if(pos < codigo.length) {
                aux = codigo.substring(pos, codigo.length)
                desde = aux.search(/[a-zA-Z_$]+ *\({1}/)
            }
            
        }
    }
    const inicializar = () => {
        $(".cod-js").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)
            let resultado = codigo



            colorearFunctones(codigo, resultado, 0)



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
            resultado = resultado.replace(/while/g, "<span class='show-control'>while</span>")
            resultado = resultado.replace(/switch/g, "<span class='show-control'>switch</span>")
            resultado = resultado.replace(/case/g, "<span class='show-control'>case</span>")
            resultado = resultado.replace(/default/g, "<span class='show-control'>default</span>")
            resultado = resultado.replace(/return /g, "<span class='show-control'>return </span>")
            resultado = resultado.replace(/do /g, "<span class='show-control'>do </span>")



            resultado = resultado.replace(/!/g, "<span class='show-op'>!</span>")
            resultado = resultado.replace(/&&/g, "<span class='show-op'>&&</span>")
            resultado = resultado.replace(/\|\|/g, "<span class='show-op'>||</span>")

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
     
