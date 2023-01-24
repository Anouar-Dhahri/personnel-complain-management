const User = require('./../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const Signup = async (req, res, next) => {
  try {
    const { nom, prenom, email, password, role } = req.body;
    if(validator.isEmail(email)){
      await User.find({email:email}).then((users) => {
        if(users.length >=1){
          res.json({
            success:false,
            message: "L'email existe déjà !"
          })
        }else {
          bcrypt.hash(password, 10, (err, hash) => {
            if(err){
              res.json({
                success:false,
                message: "Erreur, impossible de chiffrer le mot de passe",
              })
            }else{
              const user = new User ({
                nom:nom,
                prenom:prenom,
                email:email,
                password:hash,
                role: role
              });
              user.save((err, doc) => {
                if(err){
                  res.json({
                    success:false,
                    message: err,
                  });
                } 
                res.json({
                  success:true,
                  message: "Inscrivez-vous avec succès !",
                  user: doc
                });
              })
            }
          });
        }
      })
    }else {
      res.json({                  
        success:false,
        message: "Format d'email invalide !"
      })
    }
  } catch (error) {
    res.json({  
      success:false,         
      message:error
    });
  }
}

const Signin = async (req, res, next) => {
  try {
  const { email, password } = req.body;
    if(validator.isEmail(email)){
      await User.findOne({email: email}).then((user) => {
        console.log(user)
        if(user === null) {
          res.json({
            success:false,
            message:"Utilisateur non trouvé"
          })
        }else {
          bcrypt.compare(password, user.password).then(function(match) {
            if(match) {
              const token = jwt.sign({_id:user._id, nom:user.nom, prenom:user.prenom, email:user.email}, process.env.TOKEN_SECRET, {expiresIn: '24h'})
              res.json({
                success:true,
                message:"Welcome",
                user: user,
                token:token
              })
            }else {
              res.json({
                success:false,
                message:"Mauvais mot de passe. réessayer"
              })
            }
          })
        }
      });
    }else {
      res.json({
        success:false,
        message: "Format d'email invalide !"
      })
    }
  } catch (error) {
    res.json({   
      success:false,         
      message:error
    });
  }
}

const UserData = async (req, res, next) => {
  try {
    const token = req.body.token;
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded);
    res.json({
      success:true,
      user:decoded
    })
  } catch (error) {
    res.json({  
      success:false,          
      message:error
    });
  }
}

const Profile = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { nom, prenom, email, password } = req.body;

    await bcrypt.hash(password, 10, (err, hash) => {
      if(err){
        res.json({
          success:false,
          message: "Error, cannot encrypt password",
        })
      }else{
        User.findOneAndUpdate({_id:id}, {$set:{
          nom:nom, prenom: prenom, email: email, password: hash
        }}, {new:true}).then((docs) => {
          if(docs) {
            res.json({
              success:true,
              message: "Profil avec l'identifiant : "+id+ " est mis à jour avec succès",
              user:docs
            })
         } else {
          res.json({
            success:false,
            message: "Aucun utilisateur de ce type n'existe",
          })
         }
        });
      }
    });
  } catch (error) {
    res.json({  
      success:false,          
      message:error
    });
  }
}

module.exports = { Signup, Signin, UserData, Profile }