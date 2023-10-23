import express from "express";
import { saveSentController,
        saveDraftController,
        getMailsController,
        getDraftsController,
        toggleStarController,
        getStarMailController,
        moveMailToBinController,
        getBinMailController,
        deleteMailController } from "../controllers/emailController.js";


const router = express.Router();

router.post("/save-sent", saveSentController);
router.post("/save-draft", saveDraftController);
router.get('/get-mails',getMailsController );
router.get('/get-drafts', getDraftsController );
router.put('/toggle-star', toggleStarController );
router.get('/get-starmail', getStarMailController);
router.put('/move-bin', moveMailToBinController);
router.get('/get-bin',getBinMailController);
router.delete('/delete-mail',deleteMailController);


export default router;