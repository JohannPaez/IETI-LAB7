
var listaInicial = [
{
    id: 1,
    description:"Crear Vista Login", 
    name: "Carlos Sanchez", 
    email: "carlos@mail.com", 
    status: "Ready", 
    dueDate: new Date()
},
{
    id: 2,
    description:"Crear Vista Registro", 
    name: "Julian Benitez", 
    email: "julian@mail.com", 
    status: "In Progress", 
    dueDate: new Date()},
{
    id: 3,
    description:"Crear Sidebar", 
    name: "Johann Campos", 
    email: "johann@mail.com", 
    status: "Done", 
    dueDate: new Date()
},
{
    id: 4,
    description:"Crear Carrito", 
    name: "Johann Campos", 
    email: "johann@mail.com", 
    status: "In Progress", 
    dueDate: new Date()
}];    

var headers = {"Content-Type":"application/json"};
module.exports = async function (context, req) {

    if (req.method == "GET") {
        context.res = {
            status: 200,
            body: listaInicial,
            headers: headers
        }
    } else if (req.method == "POST") {
        req.body.id = listaInicial.length + 1;
        listaInicial.push(req.body)
        context.res = {

        }
    }
    

}