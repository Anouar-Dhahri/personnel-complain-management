const Hardware = require('../models/Hardware');
const mailHelper = require('./../helpers/mail.helper')
/*const User = require('./../models/User');
const nodemailer = require("nodemailer");*/

const GetHardware = async (req, res, next) => {
    try {
      const hards = await Hardware.find();
      res.json({
        success: true,
        hards:hards
      });
    } catch (error) {
      res.json({     
        success:false,       
        error:error
      });
    }
  }

const AddHardware = async (req, res, next) => {
  try {
    const { userId, region, hardwareName, requestedFor, atb, natureBesoin, urgency } = req.body;
    const hardware = new Hardware ({
      userId: userId,
      region:region,
      hardwareName:hardwareName,
      requestedFor:requestedFor,
      aquisition_transfert_budget:atb,
      natureBesoin:natureBesoin,
      urgency: urgency
    });
    await hardware.save((err, doc) => {
      if(err){
        res.json({
          success:false, 
          message: err,
        });
      }else {
        res.json({
          success:true,  
          message: "Le demande de nouveau équipement a été ajouté avec succés"
        });
        //findUser(userId, hardwareName);
        const msg = "<b>Il y a un demande de nouveau équipement </b> <br><p>User Id: "+ userId+"</p> <br><p>Équipement : "+ hardwareName+"</p> <br><p>Région: "+region+"</p> <br><p>requested For :"+requestedFor+"</p> <br> <p>aquisition_transfert_budget : "+atb+"</p><br><p>Nature Besoin :"+natureBesoin+"</p> <br><p>Urgency : "+urgency+"</p>"; // plain text body
        mailHelper(userId, "DEMANDE D'ÉQUIPEMENT", msg);
      }
    })
  } catch (error) {
    res.json({ 
      success:false,             
      message:error
    });
  }
}

const deleteHardware = async(req, res, next) => {
  try {
    const id = req.params.id;

    await Hardware.deleteOne({_id:id});
    res.json({
      success: true,
      message: "Le demande de nouveau équipement a été supprimé avec succés"
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

module.exports =  { AddHardware, GetHardware, deleteHardware }