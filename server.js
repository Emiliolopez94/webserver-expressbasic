const express = require('express')
const app = express();
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));

//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//helpers

hbs.registerHelper('getano',()=>{
    return new Date().getFullYear();
})

const port = process.env.PORT || 3000;

app.get('/',  (req, res)=> {
 
        res.render('home',{
            
        })

})


app.get('/about', (req,res) =>{

    res.render('about',{
       
    });
});




 
app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${port}`)
})