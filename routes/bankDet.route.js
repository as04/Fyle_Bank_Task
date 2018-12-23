import express from 'express';
import bankDet from '../controllers/bankDet.controller';
const router = express.Router();

router.post('', (req, res) => {
  bankDet.getBankDetails(req.body, (data) => {
    res.json(data);
  });
});

export default router;
