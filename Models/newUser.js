const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    emailID: String,
});

module.exports = mongoose.model('user', userSchema, 'userSchema');
// Data:
//  {
//    id: '100376543808895462698',
//    displayName: 'Raghav Mathur',
//    name: { familyName: 'Mathur', givenName: 'Raghav' },
//    emails: [ { value: 'raghav3501@gmail.com' } ]
//  }