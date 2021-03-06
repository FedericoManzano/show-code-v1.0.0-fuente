/*!
 * Show Code v1.0.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/show-code-v1.0.0-fuente)
 */

import CodigoHtml from "./modulos/CodigoHtml"
import CodigoCss from "./modulos/CodigoCss"
import CodigoJs from "./modulos/CodigoJs"

(function() {
    const ShowHtml = (conf) => {
        CodigoHtml.iniciar(conf)
    }

    const ShowCss = () => {
        CodigoCss.iniciar()
    }

    const ShowJs = () => {
        CodigoJs.iniciar()
    }


    const Show = {
        ShowHtmlInit: (conf) => ShowHtml(conf),
        ShowCssInit: () => ShowCss(),
        ShowJsInit: () => ShowJs()
    }

    window.Show = Show
})()

export default Show