const UpdateAccount = require('./../models/UpdateAccount');
const mailHelper = require('./../helpers/mail.helper')
/*const User = require('./../models/User');
const nodemailer = require("nodemailer");*/

const GetUpdateAccount = async (req, res, next) => {
  try {
    const accounts = await UpdateAccount.find();
    res.json({
      success: true,
      accounts:accounts
    });
  } catch (error) {
    res.json({     
      success:false,       
      error:error
    });
  }
}

const AddUpdateAccount = async (req, res, next) => {
  try {
    const { userId, region, accountType, requestedFor, urgency } = req.body;
    const updateAccount = new UpdateAccount ({
      userId: userId,
      region: region,
      accountType:accountType,
      requestedFor:requestedFor,
      urgency: urgency
    });
    await updateAccount.save((err, doc) => {
      if(err){
        res.json({
          success:false, 
          message: err,
        });
      }else {
        res.json({
          success:true,  
          message: "Le demande de modifier le compte a été ajouté avec succés"
        });
        //findUser(userId, accountType);
        const msg = "<b>Bonjour, Il y a un demande de modification d'un compte</b> <br> <p>User Id: "+ userId+"</p> <br> <p>Type: "+ accountType+"</p> <br><p>Région: "+region+"</p> <br><p>Request For: "+requestedFor+"</p> <br> <p>Urgency: "+urgency+"</p>"; // plain text body
        mailHelper(userId,"MODIFICATION DE COMPTE", msg);
      }
    })
  } catch (error) {
    res.json({     
      success:false,       
      error:error
    });
  }
}

const deleteUpdateAccount = async(req, res, next) => {
  try {
    const id = req.params.id;

    await UpdateAccount.deleteOne({_id:id});
    res.json({
      success: true,
      message: "Le demande de modifier le compte a été supprimé avec succés"
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

module.exports = { GetUpdateAccount, AddUpdateAccount, deleteUpdateAccount }