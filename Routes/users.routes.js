const router = require('express').Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { users } = require('../Database');

router.post('/signup', (req, res) => {
    const { 
        name,
        username,
        email,
        phone,
        gender,
        dob,
        password,
        avatar
    } = req.body;
    users.create({
        name,
        username,
        email,
        phone,
        gender,
        dob,
        password: bcrypt.hashSync(password, 10),
        avatar
    })
    .then(user => {
        res.status(201).json(user);
    }).catch(err => {
        res.status(500).json({ error: err });
    });
});

router.post('/login', (req, res) => {
    const [username, password] = base64.decode(req.headers.authorization.split(' ').pop()).split(':');
    users.findOne({
        where: {
            username
        }
    })
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json( user );
        } else {
            res.status(401).json({ error: 'Invalid Credentials' });
        }
    }).catch(err => {
        res.status(500).json({ error: err });
    });
});

module.exports = router;