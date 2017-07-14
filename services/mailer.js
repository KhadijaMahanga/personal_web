const nodemailer = require('nodemailer');
const fs = require('fs');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: "feedback-mailer"});
const path = require('path');

const transporter = nodemailer.createTransport('smtps://bhamiji09:BHAGMAil1991!!@smtp.gmail.com');
var fields = ["name", "email", "phoneNumber", "message"];
var recipients = ["bhamiji09@gmail.com", "k.b.mahanga@outlook.com"];

function formatMessage(postedData) {
	let formattedMessage = '<br>The following message has been submitted from your site<br>';
	fields.forEach(function(field) {
		formattedMessage += '<label>' + field + ': </label>' + postedData[field] + ' <br><br>';
	});
	return formattedMessage;
}

function sendMail(postedData) {
		console.log("I am here");
	var recipientList = recipients.toString();
	transporter.sendMail({
	   from: postedData["email"], // sender address
	   to: recipientList, // comma separated list of receivers
	   subject: "A customer for khadijamahanga.com contacted you", // Subject line
	   html: formatMessage(postedData) // plaintext body
	}, function (error, response) {
	   if (error) {
	       console.log(error);
	   } else {
	       console.log("Message sent:", response);
	   }
	});
}

function handleMessage(req, res) {
    var postedData = {};
    var redirectUrl = "/contact/";
    fields.forEach(function(field) {
     postedData[field] = req.body[field];
     });
    sendMail(postedData);
    res.redirect(302, redirectUrl +  "thank");
    res.status(200).end();
}

exports.handleMessage = handleMessage;
