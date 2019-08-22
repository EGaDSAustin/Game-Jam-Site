const mongoose = require('mongoose');
const Form = require('./models/form');
const { mongo } = require('../secret.json');

function connectDatabase () {
    const connectionString = `${mongo.address_prefix}${mongo.username}:${mongo.password}${mongo.address_suffix}`;
    console.log(`connection str: ${mongo.address_prefix}${mongo.username}:${mongo.password}${mongo.address_suffix}`);
    const connector = mongoose.connect(connectionString,
        {
            useNewUrlParser: true
        }).catch(err => console.log(err));
}


function PutForm (form_recipt) {
    const submit = new Form({...mySubmit, created: Date.now()});
    submit.save().then(result => console.log(result)).catch(err => console.log(err));
}


// given the output from a form submission, enter in the entrys into the database
// async function enterFormSumbission(submission) {
//     // TODO: make sure the submission is valid before saving it to the db
//     // FIXME: make sure this is accurate
    
//     return new form_entry({
//         ...submission,
//         created: Date.now()
//     }).save();
// }

function testDataBaseSubmission() {
    const mySubmit = {
        email: "sexycatlady69@jimminycrickets.io",
        first_name: "Bath",
        last_name: "Water",
        pronouns: "apache attack helicopter",
        school: "UA",
        major: "Computuh apache attack helicopter",
        year: "Freshman",
        experience_level: {
            programming : 5,
            two_d_art: 3,
            three_d_art: 2,
            music: 5,
            sound: 1,
            design: 3,
            narrative: 1
        },
        preferred_disciplines: [
            "artost",
            "shcjeff",
            "unemployment", 
            "あぬんきき"
        ],
        resume_link: "resume.com",
        desired_teammates: [
            "owo steve-senpai",
            "chan-kun",
            "my name jeff"
        ],
        portfolio: "portfolio.com",
        linkedIn: "ian.linked.in",
    }

    const submit = new Form({...mySubmit, created: Date.now()});
    submit.save().then(result => console.log(result)).catch(err => console.log(err));

}

module.exports = {
    connectDatabase,
    PutForm,
    testDataBaseSubmission
};