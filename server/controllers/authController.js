const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, email, password, points, level } = req.body;
    // ADD VALIDATION
    console.log('BODY! ', req.body)
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password,
        'points': points,
        'level': level

      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  updateAlias: (req, res) => {
    const { parsedEmail, alias } = req.body;
    // ADD VALIDATION
    console.log('BODY! ', req.body)
    db.User.findOneAndUpdate({email: parsedEmail}, {$set:{alias: alias}}, {new: true}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
  
      console.log("data from updating alias", doc);
  });
    // db.User.findOne({ 'email': email }, (err, userMatch) => {
    //   if (userMatch) {
    //     return res.json({
    //       error: `Sorry, already a user with the username: ${username}`
    //     });
    //   }
    //   const newUser = new db.User({
    //     'firstName': firstName,
    //     'lastName': lastName,
    //     'email': email,
    //     'password': password,
    //     'points': points,
    //     'level': level

    //   });
    //   newUser.save((err, savedUser) => {
    //     if (err) return res.json(err);
    //     return res.json(savedUser);
    //   });
    // });
  },
  updatePoints: (req, res) => {
    const { parsedEmail, sessionPoints } = req.body;
    // ADD VALIDATION
    console.log('BODY! ', req.body)
    db.User.findOneAndUpdate({email: parsedEmail}, {$set:{points: sessionPoints}}, {new: true}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
      console.log("data from updating points", doc);
  });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function(req, res, next) {
    console.log('hit auth!!!!')
		console.log(req.body);
		console.log('================');
		next();
  },
  authenticate: (req, res) => {
    console.log('hit authenticate!!!!!!')
		console.log('POST to /login');
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};
