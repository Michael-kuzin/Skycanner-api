import express from "express";
import dates from "./Dates";
import quotes from "./Quotes";
import routes from "./Routes";
import list-markets from "./List-markets";
import list-places from "./List-places"

const router = express.Router();

router.use('/Dates', dates);
router.use('/Quotes', quotes);
router.use('/Routes', routes);
router.use('/List-markets',list-markets );
router.use('/List-places', list-places );


export default router;
