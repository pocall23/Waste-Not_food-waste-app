import cloudinary from 'cloudinary';



const search = async (query) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { search };



const cloudinary = require('cloudinary');

cloudinary.config({
cloud_name: 'dqw6fjffy',
api_key: '391567231425468',
api_secret: 'ZEHESM_KXQbrf6WDkPGL2btmc-o'
});