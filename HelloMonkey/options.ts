import {DataObject,HeaderFile,HeaderObject,HeaderProvider,ProxyScriptOptions,SsriOptions,WPUSOptions,WebpackUserscriptOptions} from 'webpack-userscript'
let headerObject : HeaderObject = {
    "run-at": 'document-idle',
    grant: ["GM_setValue","GM_getValue","GM.openInTab"],
    include: ["https://www.example.com/*"],
    version: `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}.${new Date().getHours()}.${new Date().getMinutes()}`,
    "description": "Example script for webpack and monkey integration",
    "name": "Empty Script",
}
let proxyScript: ProxyScriptOptions = {
    baseUrl: "http://localhost:8080",
    filename: 'index.proxy.user.js',
    // enable: true
    enable: () => process.env.MONKEY_PROXY === '1'
}
let options: WebpackUserscriptOptions = {
    "headers": headerObject,
    pretty: false,
    // downloadBaseUrl:"",
    // updateBaseUrl:"",
    metajs:true,
    renameExt:false,        
    proxyScript: proxyScript,
}
export default options