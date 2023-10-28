import emailModel from "../models/emailModel.js";

export const saveSentController = async(req,res) => {
try {
        const sentMails = new emailModel(req.body);
        await sentMails.save();
        res.status(200).json(`Sent Email Saved Successfully`);
} catch (error) {
    res.status(500).json(`Error in saveSentController ${error}`);
}
}

export const saveDraftController = async(req,res) => {

 try {
       const draftMail = new emailModel(req.body);
       await draftMail.save();
       res.status(200).json(`Draft Saved Successfully`);
 } catch (error) {
    res.status(500).json(`Error in saveDraftController ${error}`);
}

}

export const getMailsController = async(req,res) => {
    try {
        const Mails = await emailModel.find( { Type:'sent' , Bin:false } );
        return res.status(200).json(Mails);
    } catch (error) {
        res.status(500).json(`Error in getMailsController ${error}`);
    }
}

export const getDraftsController = async(req,res) => {

  try {
      const Drafts = await emailModel.find( { Type:'draft', Bin:false } );
      return res.status(200).json(Drafts);
  } catch (error) {
        res.status(500).json(`Error in getDraftsController ${error}`);
  }

}

export const toggleStarController = async(req,res) => {
  try {
      await emailModel.updateOne( { _id:req.body.id } , { $set : { Starred:req.body.star }  });
      res.status(200).json(`Email Starred Successfully`);
      
  } catch (error) {
        res.status(500).json(`Error in toggleStarController ${error}`);
  }
}

export const getStarMailController = async(req,res) => {
try {
        const starMail = await emailModel.find( { Starred:true } );
        return res.status(200).json(starMail);
} catch (error) {
        res.status(500).json(`Error in getStarMailController ${error}`);
}
}

export const moveMailToBinController = async(req,res) => {

    try {
        await emailModel.updateMany( { _id:req.body.id }, { $set : { Bin:req.body.bin } } );
        res.status(200).json(`Email moved to Bin Successfully`);
    } catch (error) {
            res.status(500).json(`Error in moveMailToBinController ${error}`);
    }
}

export const getBinMailController = async(req,res) => {
try {
        const binMail = await emailModel.find( { Bin:true } );
        res.status(200).json(binMail);
} catch (error) {
        res.status(500).json(`Error in getBinController ${error}`);
}
}
export const deleteMailController = async(req,res) => {
try {       

        const deletedMail = await emailModel.deleteMany( { _id : req.body.id } );
        res.status(200).json(deletedMail);
} catch (error) {
        res.status(500).json(`Error in deleteMailController ${error}`);
}

}