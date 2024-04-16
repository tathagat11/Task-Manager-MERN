const User = require('../../database/model/user.model');
const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const signin = async(req, res) => {
    let {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).send("No account exists with this email ID");
        }
        user.comparePassword(password, (err, match) => {
            if(!match || err) return res.status(400).send("Incorrect password");
            let token = jwt.sign(
                {
                    _id:user._id

                },
                'hdsjkdksjdhkshdksjhdjsdj',
                {expiresIn:'24h'}
            );
            res.status(200).send({
                token,
                username:user.username,
                email:user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            })
        });
    } catch (error) {
        return res.status(400).send('Unknown error logging in')
    }
}

const register = async(req, res) => {
    const {email, password, username} = req.body;
    try {
        if(!username) return res.status(400).send('username is required');
        if(!email) return res.status(400).send('email is required');
        if(!validator.validate(email)) {
            return res.status(400).send("Invalid Email ID")
        }
        if(!password || password.length < 5) {
            return res.status(400).send("Enter valid password");
        }

        const userExist = await User.findOne({email});
        if(userExist) {
            return res.status(400).send("Account exists with that email ID.");
        }

        const user = await new User({
            email,
            username,
            password,
        });

        await user.save()
        return res.status(200).send('User registration successful');
    } catch (error) {
        return res.status(400).send("Unknown error creating user.");
    }
}