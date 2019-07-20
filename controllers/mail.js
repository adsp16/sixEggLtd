const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN, testMode : true});


exports.sendContactForm = (req, res, next) => {


 const name = req.body.name;
 const email = req.body.email; 
 const message = req.body.message;
  

    

    var data = {
      from : 'adsp16@gmail.com' ,
      to : 'adam.price@fineandcountry.com', 
      subject : `New enquiry from ${name}`, 
      text : message
    };

    mailgun.messages().send(data, (error, body) => {
      console.log(body);
      res.redirect('/contactSuccess');
    }); 

};

exports.userSubscribe = (req, res, next) => {

  const email  = req.body.email;

  var data = {
    from : 'adsp16@gmail.com' ,
      to : 'adam.price@fineandcountry.com', 
      subject : `New Subscriber`, 
      text : email
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
    res.redirect('/contactSuccess');
  }); 

};

