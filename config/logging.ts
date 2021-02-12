// import {config} from "./config"

// const DEFAULT_NAMESPACE =  config.default.namespace


// // here the user allows to pass a message and a namespace. The namespace tells where the message coming form !
// const info = (message:any , namespace?:string) => {
//     if(typeof message === "string"){
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`)
//     } else {
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`)
//     }
// }

// const warn = (message:any , namespace?: string) => {
//     if(message === "string"){
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`)
//     } else {
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`)
//     }
// }

// const error = (message:any , namespace?: string) => {
//     if(message === "string"){
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`)
//     } else {
//         console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`)
//     }
// }


// const getDate = () => {
//     return new Date().toISOString()
// }

// export const logging = {
//     info,
//     warn,
//     error
// }