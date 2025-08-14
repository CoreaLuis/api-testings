exports.hello = (req, res) => {
    const test = 'pruebas';
    const test2 = 23;
    console.log("Hello World");
    console.log({test,test2})
    res.send('¡Bienvenido a la API de Testing!');
};