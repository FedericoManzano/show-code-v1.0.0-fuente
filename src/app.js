import CodigoHtml from "./modulos/CodigoHtml"

(function() {
    const ShowHtml = (conf) => {
        CodigoHtml.iniciar(conf)
    }
    const Show = {
        ShowHtmlInit: (conf) => ShowHtml(conf)
    }

    window.Show = Show
})()

export default Show