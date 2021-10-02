const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(createThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;