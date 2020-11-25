import { Request, Response, NextFunction } from 'express';

export default ( config ) => ( req: Request, res: Response, next: NextFunction ) => {
const errors = [];
let val1;
console.log( 'Inside ValidationHandler Middleware' );
const keys = Object.keys( config );
keys.forEach((key) => {
const obj = config[key];
console.log('key is' , key);
const values = obj.in.map( ( val ) => {
val1 = val;
return req[ val ][ key ];
});

if (Object.keys(req[obj.in]).length === 0) {
errors.push({
message: `Values should be passed through ${obj.in}`,
status: 400
});
}

if (obj.required) {
if (isNull(values[0])) {
errors.push({
key: {key},
location: {val1},
message: obj.errorMessage || `${key} is required`,
});
}
}
// Checking for string
if (obj.string) {
if ( !( typeof ( values[0] ) === 'string' ) ) {
errors.push({
key: {key},
location: {val1},
message: obj.errorMessage || `${key} Should be a String`,
});
}
}
// Checking for object
if (obj.isObject) {
if ( !( typeof ( values ) === 'object' ) ) {
errors.push({
key: {key},
location: {val1},
message: obj.errorMessage || `${key} Should be an object`,
});
}
}
// Checking for regex
if (obj.regex) {
const regex = /^[a-zA-Z ]{2,30}$/;
if (!regex.test(values)) {
errors.push({
key: {key},
location: {val1},
message: obj.errorMessage || `${key} is not valid expression` ,
});
}
}
// Checking for default
if (obj.default) {
if (isNull(values)) {
    // tslint:disable-next-line: no-unused-expression
    values[0] === obj.default;
}
}
// Checking for number
if (obj.number) {
if (isNaN(values) || values === undefined) {
errors.push({
key: {key},
location: {val1},
message: obj.errorMessage,
});
}
}
});
if (errors.length > 0) {
res.send(errors);
}
else {
next();
}
};

function isNull( obj ) {
const a = ( obj === undefined || obj === null );
return a;
}

// export default (config) => {
//     return (req, res, next) => {

//         let keys;
//         if (req.body) {
//             console.log('In body.....');
//             keys = Object.keys(req.body);
//         }
//         else {
//             console.log('In query.....');
//             keys = Object.keys(req.query);
//         }

//         console.log('in the config section...', keys);
//         keys.forEach((element) => {
//             const value = req.query.element;
//             const help = config[element];

//             Object.keys(help).forEach( (item) => {
//                 console.log(item);
//                 if (item === 'required') {
//                     if (!config[element][item]) {
//                         console.log('Not required');
//                     }
//                     else { console.log('in else part'); }
//                 }
//                 if (item === 'string' || item === 'number') {
//                     console.log('In string and number section');
//                 }
//                 if (item === 'in') {
//                     if (config[element][item][0] === 'body') {
//                         console.log('In body');
//                     }
//                     else if (config[element][item][0] === 'query') {
//                         console.log('we are in query');
//                         // if(req.param){
//                         //     res.send({
//                         //         message: "please send Param query",
//                         //     })
//                         // }
//                     }
//                     console.log('in in section', config[element][item][0]);
//                 }
//                 if (item === 'regex') {
//                     console.log('In regex section');
//                 }
//                     });
//         });
//         next();
//     };
// };
