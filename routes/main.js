const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
    const data = {
        image_profile: 'https://media-exp1.licdn.com/dms/image/C4D03AQHNd3gBr1oGwA/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=N_EtEAOVgiNuEbowk0EC8JnXttLMFQY9B8tyVaJNLFw',
        greeting: 'Hello! Welcome to my portfolio site!',
        introduction: 'I am a web developer from California',
        languages: [
            {name: 'dart', years: 1},
            {name: 'ionic', years: 2}
        ]
    }

    res.render('landing', data)

})


module.exports = router
