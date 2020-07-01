import CodigoHtml from "./modulos/CodigoHtml"
import CodigoCss from "./modulos/CodigoCss"


(function() {
    const ShowHtml = (conf) => {
        CodigoHtml.iniciar(conf)
    }

    const ShowCss = () => {
        CodigoCss.iniciar()
    }



    const Show = {
        ShowHtmlInit: (conf) => ShowHtml(conf),
        ShowCssInit: () => ShowCss()
    }

    window.Show = Show
})()

export default Show