import express from 'express';
import { insertUserToNotisController, getNotisController, getNotisByUidController, deleteNotisByUidItemIdController } from '../controllers/notifications.js';

const router = express.Router();

router.get('/', (req, res) => {
    getNotisController(req, res);
})
router.post('/add', (req, res) => {
    insertUserToNotisController(req, res);
});
router.post('/delete', (req, res) => {
    deleteNotisByUidItemIdController(req, res);
})
router.get('/get-by-uid', (req, res) => {
    getNotisByUidController(req, res);
})

export default router;
