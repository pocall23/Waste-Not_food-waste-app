const { Router } = require('express');
const router = Router();
const food = require('../../../server/models/Food');
//cloudinary//
const cloudinary = require('cloudinary');
cloudinary.config({
cloud_name: 'dqw6fjffy',
api_key: '391567231425468',
api_secret: 'ZEHESM_KXQbrf6WDkPGL2btmc-o'
});

router.get('/', async (req, res) => {
    const foods = await food.find();
    console.log(foods);
    res.render('/image', {foods});
});

router.get('/foods',(req, res) => {
    res.render('images_form');
});

router.post('/foods', async (req, res) => {
    const { title, description } = req.body
    console.log(req.body);
    console.log(req.file);
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    console.log(result)
    const newFood = new food({
        title,
        description,
        imageUrl: result.url,
        public_id:result.public_id
    });
    await newFood.save();
    res.send('Received');
});

module.exports = router;