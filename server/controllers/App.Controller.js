const Application = require('../models/Application');
const mailHelper = require('./../helpers/mail.helper')
/*const User = require('./../models/User');
const nodemailer = require("nodemailer");*/

const GetApplication = async (req, res, next) => {
  try {
    const apps = await Application.find();
    res.json({
      apps:apps,
      success: true
    })
  }catch(err) {
    res.json({
      success:false,
      error:err
    })
  }
}

const AddApplication = async (req, res, next) => {
  try {
   const application = new Application({
      userId:req.body.userId,
      title:req.body.title,
      description:req.body.description,
      src24:req.body.src24,
      src25:req.body.src25,
      src26:req.body.src26,
      contact: req.body.contact,
      urgency:req.body.urgency,
      requestedFor: req.body.requestedFor,
      reference: req.body.reference,
      attachement: {
        name: req.file.filename,
        path:req.file.path,
        type:req.file.mimetype,
        size:fileSizeFormatter(req.file.size, 2)
      }
    });
    await application.save((err, doc) => {
      if(err) throw err

        res.json({
          success: true,
          message: " Le problème application a été ajouté avec succès"
        });

        const msg = "<b>Bonjour, Il y a un réclamation d'un problème application </b> <br> <p>User Id: "+ req.body.userId+"</p> <br> <p>Type: "+ req.body.title+"</p> <br><p>Description: "+req.body.description+"</p><br><p>Src24 : "+req.body.src24+"</p><br><p>Src25 : "+req.body.src25+"</p><br><p>Src26 : "+req.body.src26+"</p><br><p>Contact : "+req.body.contact+"</p><br><p>Request For: "+req.body.requestedFor+"</p> <br><p>Référence : "+req.body.reference+"</p><br><p>Attachament: "+req.file.filename+"</p><p>Urgency: "+req.body.urgency+"</p>"; // plain text body

        mailHelper(req.body.userId, "PROBLÈME APPLICATION", msg);
        //findUser(req.body.userId, req.body.title);
    })
    console.log(req.file, req.body)
  } catch (error) {
    res.json({  
      success: false,          
      error:error
    });
  }
}

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];
};

const deleteApplication = async(req, res, next) => {
  try {
    const id = req.params.id;

    await Application.deleteOne({_id:id});
    res.json({
      success: true,
      message: "Le problème application a été supprimé avec succès"
    });
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }    
}

module.exports =  { GetApplication, AddApplication, deleteApplication }