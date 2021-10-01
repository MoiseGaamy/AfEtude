const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const handlebars = require('handlebars');
const fs = require('fs');
const session = require("express-session");
var cookieParser = require('cookie-parser');
const flash   = require("connect-flash");



const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(cookieParser('secret'));
app.use(session(
	{   secret:"mysecret",
		cookie: { maxAge: 60000 },
		resave: false,
		saveUninitialized: false
	}));
app.use(flash());

app.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
});


app.get('/', function(req, res){
	 res.render("index", { sessionFlash: res.locals.sessionFlash });
	// res.render("index");
});
app.get('/dura', function(req, res){
	// res.render("Dura_Institue",{message: req.flash('message')});
	 // res.render("Dura_Institue", { sessionFlash: res.locals.sessionFlash });
	 res.render("Dura_Institue");
});
app.get('/hope', function(req, res){
	res.render("hopeLife");
});
app.get('/Sewa', function(req, res){
	res.render("Sewa_institute");
});
app.get('/El', function(req, res){
	res.render("Ell");
});
app.get('/Un', function(req,res){
    res.render("university");
});


 ////////////dura Institue/////////

app.post('/Dura_Institute', function(req, res){
	// const nom = req.body.nom;
	// const prenom = req.body.prenom;
	// const heure  = req.body.Heure;
 //    const mois  = req.body.mois;
 //    const formation = req.body.Forma;
 //    const devise = req.body.Devise;
 //    const email = req.body.Email;
 //    const whatsapp = req.body.whatsapp;
 //    const InstitueName = "Durra";

 const readHTMLFile =  function(path, callback) {
            fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
                if (err) {
                    throw err;
                    callback(err);
                }
                else {
                    callback(null, html);
                }
            });
        };
        let transporter = nodemailer.createTransport({
            	service: "Gmail",
            	auth: {
            		user:"AfriquEtude.gh@gmail.com",
            		pass: "Beito12345@"
            	},
            });
       readHTMLFile(__dirname + '/public/pages/Email.html', function(err, html) {
        var template = handlebars.compile(html);
        var replacements = {
              nom : req.body.nom,
    	     prenom : req.body.prenom,
    	     heure  : req.body.Heure,
             mois   : req.body.mois,
             formation : req.body.Forma,
             devise : req.body.Devise,
             email : req.body.Email,
             whatsapp : req.body.whatsapp,
             InstitueName : "Durra"
        };
        var htmlToSend = template(replacements);
        var mailOptions = {
            from: "inscription <gam@example.com>",
            to: "AfriquEtude.gh@gmail.com, durra@durragh.com",
            subject: "new subscriber from AfriquEtude",
            html : htmlToSend
         };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }else{
                	console.log("Message sent:"+info.res);
                	req.session.sessionFlash = {
                type: 'success',
                message: "vous avez été inscript l'école vous contactera."
            }
                	// req.flash('message',"");
                	res.redirect("/");
                }
            });
     });


//     let transporter = nodemailer.createTransport({
//     	service: "Gmail",
//     	auth: {
//     		user:"AfriquEtude.gh@gmail.com",
//     		pass: "Beito12345@"
//     	},
//     });
//    readHTMLFile(__dirname + '/public/pages/Email.html', function(err, html) {
//     const template = handlebars.compile(html);
//     const replacements = {
//          nom : req.body.nom,
// 	     prenom : req.body.prenom,
// 	     heure  : req.body.Heure,
//          mois   : req.body.mois,
//          formation : req.body.Forma,
//          devise : req.body.Devise,
//          email : req.body.Email,
//          whatsapp : req.body.whatsapp,
//          InstitueName : "Durra"
//     };
//     var htmlToSend = template(replacements);

//      let info = await transporter.sendMail({
//          from: "inscription <gam@example.com>",
//     	to: "AfriquEtude.gh@gmail.com, moisegamy68@gmail.com",
//     	subject: "new subscriber from AfriquEtude",
//     	text:"voila mes informations..nom:"+nom+"prenom"+prenom+"Email"+email+"whatsapp"+whatsapp+"formation"+formation+"mois"+mois,
//     	html: htmlToSend
//   });

//       console.log("Message sent: %s", info.messageId);
// };
// main().catch(console.error);
// 	res.render("index");
// });
 });

/////////hopelife////////////////

app.post('/hopeLife', function(req, res){
	// const nom = req.body.nom;
	// const prenom = req.body.prenom;
	// const heure  = req.body.Heure;
 //    const mois  = req.body.mois;
 //    const formation = req.body.Forma;
 //    const devise = req.body.Devise;
 //    const email = req.body.Email;
 //    const whatsapp = req.body.whatsapp;

      const readHTMLFile =  function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};
  let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user:"AfriquEtude.gh@gmail.com",
            pass: "Beito12345@"
        },
    });
readHTMLFile(__dirname + '/public/pages/Email.html', function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
          nom : req.body.nom,
         prenom : req.body.prenom,
         heure  : req.body.Heure,
         mois   : req.body.mois,
         formation : req.body.Forma,
         devise : req.body.Devise,
         email : req.body.Email,
         whatsapp : req.body.whatsapp,
         InstitueName : "hopelife"
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
        from: "inscription <gam@example.com>",
        to: "afriquetude.gh@gmail.com, Hopelifeschool@yahoo.com",
        subject: "new subscriber from AfriquEtude",
        html : htmlToSend
     };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }else{
            console.log("Message sent:"+info.res);
            req.session.sessionFlash = {
        type: 'success',
        message: "vous avez été inscript l'école vous contactera."
    }
            // req.flash('message',"");
            res.redirect("/");
        }
    });
});
  
// async function main(){ 
//     let transporter = nodemailer.createTransport({
//     	service: "Gmail",
//     	auth: {
//     		user:"afriquetude.gh@gmail.com",
//     		pass: "Beito12345@"
//     	},
//     });

//      let info = await transporter.sendMail({
//          from: "inscription <gam@example.com>",
    	
//     	subject: "new subscriber from AfriquEtude",
//     	text:"voila mes informations..nom:"+nom+"prenom"+prenom+"Email"+email+"whatsapp"+whatsapp+"formation"+formation+"mois"+mois,
//     	html: "<p>vous avez une nouvelle inscription</p><ul><li>nom "+nom+"</li><li>prenom "+prenom+"</li><li>whatsapp "+whatsapp+"</li><li> formation "+formation+"</li><li>Durée "+mois+"mois</li></ul>"
//   });

//       console.log("Message sent: %s", info.messageId);
// }
// main().catch(console.error);
// 	res.render("index");
});

 //////////////Sewa INstitue//////////


app.post('/Sewa', function(req, res){
	// const nom = req.body.nom;
	// const prenom = req.body.prenom;
	// const heure  = req.body.Heure;
 //    const mois  = req.body.mois;
 //    const formation = req.body.Forma;
 //    const devise = req.body.Devise;
 //    const email = req.body.Email;
 //    const whatsapp = req.body.whatsapp;

  const readHTMLFile =  function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};
  let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user:"AfriquEtude.gh@gmail.com",
            pass: "Beito12345@"
        },
    });
readHTMLFile(__dirname + '/public/pages/Email.html', function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
          nom : req.body.nom,
         prenom : req.body.prenom,
         heure  : req.body.Heure,
         mois   : req.body.mois,
         formation : req.body.Forma,
         devise : req.body.Devise,
         email : req.body.Email,
         whatsapp : req.body.whatsapp,
         InstitueName : "Sewa"
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
        from: "inscription <gam@example.com>",
        to: "afriquetude.gh@gmail.com, Sewainstitute.edu@gamil.com",
        subject: "new subscriber from AfriquEtude",
        html : htmlToSend
     };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }else{
            console.log("Message sent:"+info.res);
            req.session.sessionFlash = {
        type: 'success',
        message: "vous avez été inscript l'école vous contactera."
    }
            // req.flash('message',"");
            res.redirect("/");
        }
    });
});
  
// async function main(){ 
//     let transporter = nodemailer.createTransport({
//     	service: "Gmail",
//     	auth: {
//     		user:"afriquetude.gh@gmail.com",
//     		pass: "Beito12345@"
//     	},
//     });

//      let info = await transporter.sendMail({
//          from: "inscription <gam@example.com>",
    	
//     	subject: "new subscriber from AfriquEtude",
//     	text:"voila mes informations..nom:"+nom+"prenom"+prenom+"Email"+email+"whatsapp"+whatsapp+"formation"+formation+"mois"+mois,
//     	html: "<p>vous avez une nouvelle inscription</p><ul><li>nom "+nom+"</li><li>prenom "+prenom+"</li><li>whatsapp "+whatsapp+"</li><li> formation "+formation+"</li><li>Durée "+mois+"mois</li></ul>"
//   });

//       console.log("Message sent: %s", info.messageId);
// }
// main().catch(console.error);
// 	res.render("index");
});


////////////Ell Institue////////////////////////////////////////

app.post('/Ell', function(req, res){
	// const nom = req.body.nom;
	// const prenom = req.body.prenom;
	// const heure  = req.body.Heure;
 //    const mois  = req.body.mois;
 //    const formation = req.body.Forma;
 //    const devise = req.body.Devise;
 //    const email = req.body.Email;
 //    const whatsapp = req.body.whatsapp;

      const readHTMLFile =  function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};
  let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user:"AfriquEtude.gh@gmail.com",
            pass: "Beito12345@"
        },
    });
readHTMLFile(__dirname + '/public/pages/Email.html', function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
          nom : req.body.nom,
         prenom : req.body.prenom,
         heure  : req.body.Heure,
         mois   : req.body.mois,
         formation : req.body.Forma,
         devise : req.body.Devise,
         email : req.body.Email,
         whatsapp : req.body.whatsapp,
         InstitueName : "Ell"
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
        from: "inscription <gam@example.com>",
        to: "afriquetude.gh@gmail.com, Englishlanglab1@gmail.com",
        subject: "new subscriber from AfriquEtude",
        html : htmlToSend
     };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }else{
            console.log("Message sent:"+info.res);
            req.session.sessionFlash = {
        type: 'success',
        message: "vous avez été inscript l'école vous contactera."
    }
            // req.flash('message',"");
            res.redirect("/");
        }
    });
});
  
// async function main(){ 
//     let transporter = nodemailer.createTransport({
//     	service: "Gmail",
//     	auth: {
//     		user:"afriquetude.gh@gmail.com",
//     		pass: "Beito12345@"
//     	},
//     });

//      let info = await transporter.sendMail({
//          from: "inscription <gam@example.com>",
//     	to: "afriquetude.gh@gmail.com, Englishlanglab1@gmail.com",
//     	subject: "new subscriber from AfriquEtude",
//     	text:"voila mes informations..nom:"+nom+"prenom"+prenom+"Email"+email+"whatsapp"+whatsapp+"formation"+formation+"mois"+mois,
//     	html: "<p>vous avez une nouvelle inscription</p><ul><li>nom "+nom+"</li><li>prenom "+prenom+"</li><li>whatsapp "+whatsapp+"</li><li> formation "+formation+"</li><li>Durée "+mois+"mois</li></ul>"
//   });

//       console.log("Message sent: %s", info.messageId);
// }
// main().catch(console.error);
// 	res.render("index");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(req, res){
	console.log(`server is running at port ${PORT}`);
});