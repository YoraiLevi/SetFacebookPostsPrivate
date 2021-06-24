import {DataObject,HeaderFile,HeaderObject,HeaderProvider,ProxyScriptOptions,SsriOptions,WPUSOptions,WebpackUserscriptOptions} from 'webpack-userscript'
let headerObject : HeaderObject = {
    "run-at": 'document-idle',
    grant: ["GM.setValue","GM.getValue","GM.openInTab"],
    include: ["https://www.facebook.com/*"],
    version: `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}.${new Date().getHours()}.${new Date().getMinutes()}`,
    description: "Automation tool that sets posts in facebooks activity log to private public or friends for the new 2020 design",
    name: "Bulk Set Facebook Posts' Privacy",
}
let proxyScript: ProxyScriptOptions = {
    baseUrl: "http://localhost:8081",
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