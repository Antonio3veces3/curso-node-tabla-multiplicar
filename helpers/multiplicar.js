const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar= false, hasta=1)=>{
    try {
        console.clear();
        let salida='', consola = '';
    
        
        for (let i = 1; i<=hasta; i++){
            let result = i*base;
            consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${result}\n`;
            salida += `${base} x ${i} = ${result}\n`;
        }
        
        let filename = `./salida/tabla-del-${base}.txt`
        fs.writeFileSync(filename, salida);
        if(listar == true){
            console.log('=================='.green);
            console.log(colors.yellow(`TABLA DEL ${base}`));
            console.log('=================='.green);
            console.log(consola);
        }
        return colors.green(filename, ' Creado correctamente');
        
    } catch (error) {
        throw 'Ha ocurrido un error'.underline.red;
    }
}

module.exports = {
    crearArchivo
}