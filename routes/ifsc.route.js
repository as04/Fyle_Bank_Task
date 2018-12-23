import express from 'express';
import ifsc from '../controllers/ifsc.controller';
const router = express.Router();

router.post('', (req, res) => {
  ifsc.getIfsc(req.body, (data) => {
    res.json(data);
  });
});

export default router;
