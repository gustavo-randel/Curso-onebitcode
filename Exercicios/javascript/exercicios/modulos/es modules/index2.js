import { inline } from "./inline.js"
// o termo "as" + novoNome permite renomear a função a ser importada. Ex: import { inline as i } from "./inline.js"
import defaultInline from "./inline.js" 
// não necessita das chaves, mais flexivel quanto à troca de nome, mas só pode ter 1 por arquivo.
//import { group } from "./non-inline.js"
//import  exportDefault  from "./non-inline.js"
import  exportDefault, { group }   from "./non-inline.js"
inline()
defaultInline()

group()
exportDefault()