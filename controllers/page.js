

exports.getIndex = (req, res, next) => {

  res.render('index');

};

exports.getContact = (req, res, next) => {

  res.render('contact');

};

exports.getPricing = (req, res, next) => {

  res.render('pricing');

}


exports.getcontactSuccess = ( req, res, next) => {

  res.render('contactSucess');

}


