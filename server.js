const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (require, response) => {
    const items = [
        // Descrevendo as qualidades e benefícios do EJS:
        {
            title: 'D',
            message: 'esenvolver aplicações de maneira mais prática'
        },
        {
            title: 'E',
            message: 'screver código de maneira mais legítima'
        },
        {
            title: 'M',
            message: 'anter o código limpo'
        },
        {
            title: 'A',
            message: 'prender de maneira mais simples'
        },
        {
            title: 'I',
            message: 'novar'
        },
        {
            title: 'S',
            message: 'er um desenvolvedor melhor'
        }
    ]
    const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript'
    response.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get('/about', (require, response) => {
    response.render('pages/about')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})
