const nodemailer = require ('nodemailer');
const User = require('./../models/User');

const mailHelper = async (userId, subject, message) => {
  const user = await User.findById({_id: userId})
  //const type = accountType;
  console.log(user)
  sendMail(user,subject, message)
}

const sendMail = async (user, subject, message) => {
  
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3"
    },
    auth: {
      user:process.env.EMAIL_LOGIN,
      pass:process.env.EMAIL_PASSWORD
    }
  })

  let mailOption = {
    from:process.env.EMAIL_LOGIN,
    to:"pfemainuser2022@outlook.com",
    subject: subject,
    text: user.nom+" "+user.prenom,
    html: message
  }

  let info = await transporter.sendMail(mailOption, (err, result) => {
    if(err) {
      console.log("error occur ==> ", err)
    }else {
      console.log("mail sent")
    }
  })
}

module.exports = mailHelper