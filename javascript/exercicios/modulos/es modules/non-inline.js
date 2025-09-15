function group() {
    console.log('grupo, foda.')
}

function a() {}
function b() {}
function c() {}
function d() {}

function exportDefault() {
    console.log('default não inline')
}

export default exportDefault
export {group, a, b, c, d}