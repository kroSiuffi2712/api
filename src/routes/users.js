const router = require('express-promise-router')();

const {
    index,
    newUser,
    getUser,
    replaceUser,
    updateUser,} =require('../controllers/user');

router.get('/', index);
router.post('/', newUser);
router.get('/id', getUser);
router.put('/id', replaceUser);
router.patch('/id', updateUser);

module.exports = router;