import { response, Router } from 'express';
import { omdbService } from '../../services';

const router = Router();

router.get('/search', async (req, res, next) => {
    try {
        await omdbService.search(req.headers, req.query, (payload) => {
            res.json(payload);
        });
    } catch (e) {
        next(e);
    }
});

router.get('/detail', async (req, res, next) => {
    try {
        await omdbService.detail(req.headers, req.query, (payload) => {
            res.json(payload);
        });
    } catch (e) {
        next(e);
    }
});

export default router;
