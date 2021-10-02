const router = require('express').Router();

const {
    getAllThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/thoughts/<pizzaId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;