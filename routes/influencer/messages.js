const router = require('express').Router();
const authMiddleware = require('../../middlewares/auth');

router.get('/', authMiddleware, async (req, res) => {

})
router.get('/:id', authMiddleware, async (req, res) => {

})
router.post('/:id', authMiddleware, async (req, res) => {

})

module.exports = router;