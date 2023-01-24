const Account = require('./../models/Account');
const mailHelper = require('./../helpers/mail.helper')
/*const User = require('./../models/User');
const nodemailer = require("nodemailer");*/

const GetAccount = async (req, res, next) => {
  try {
    const accounts = await Account.find();
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

const AddAccount = async (req, res, next) => {
  try {
    const { userId, region, accountType, requestedFor, urgency } = req.body;
    const account = new Account ({
      userId: userId,
      region: region,
      accountType:accountType,
      requestedFor:requestedFor,
      urgency: urgency
    });
    await account.save((err, doc) => {
      if(err){
        res.json({
          success:false, 
          message: err,
        });
      }else {
        res.json({
          success:true,  
          message: "Le demande de nouveau compte a été ajouté avec succès !"
        });
        const msg = "<b>Bonjour, Il y a un demande de création un nouveau compte</b> <br> <p>User Id: "+ userId+"</p> <br> <p>Type: "+ accountType+"</p> <br><p>Région: "+region+"</p> <br><p>Request For: "+requestedFor+"</p> <br> <p>Urgency: "+urgency+"</p>"; // plain text body
        mailHelper(userId, "DEMANDE DE NOUVEAU COMPTE", msg);
        //findUser(userId, accountType);
        //sendMail(user, accountType);
      }
    })
  } catch (error) {
    res.json({     
      success:false,       
      error:error
    });
  }
}

const deleteAccount = async(req, res, next) => {
  try {
    const id = req.params.id;

    await Account.deleteOne({_id:id});
    res.json({
      success: true,
      message: "Le demande de nouveau compte a été supprimé avec succès "
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

module.exports = { GetAccount, AddAccount, deleteAccount }