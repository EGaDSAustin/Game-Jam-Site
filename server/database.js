const mongo = require('mongodb');
const mongoose = require('mongoose');

try {
    const {
        mongo
    } = require('../secret.json');
} catch (ex) {
    console.log(`HEY MAN, you got no secrets, are you even real, your exception is: ${ex}`);
}

const connectionString = `${mongo.address_prefix}${mongo.username}:${mongo.password}${mongo.suffix}`;
const connector = mongoose.connect(connectionString);

const experienceLevel = mongoose.Schema({
    programming: {
        type: Number,
        min: 1,
        max: 5
    },
    two_d_art: {
        type: Number,
        min: 1,
        max: 5
    },
    three_d_art: {
        type: Number,
        min: 1,
        max: 5
    },
    music: {
        type: Number,
        min: 1,
        max: 5
    },
    sound: {
        type: Number,
        min: 1,
        max: 5
    },
    design: {
        type: Number,
        min: 1,
        max: 5
    },
    narrative: {
        type: Number,
        min: 1,
        max: 5
    }
})

var formSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    first_name: {
        type: String,
        required: [true, 'First Name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last Name is required']
    },
    pronouns: {
        type: String,
        required: [true, 'Name is required']
    },
    school: {
        type: String,
        required: [true, 'School is required']
    },
    major: {
        type: String,
        required: [true, 'Major is required']
    },
    year: {
        type: String,
        enum: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super Senior'],
        required: [true, 'Year is required']
    },
    experience_level: {
        type: experienceLevel,
        required: [true, 'Experience is required']
    },
    preferred_disciplines: {
        type: [String],
        default: undefined,
        required: [true, 'Disciplines is required']
    },
    resume_link: {
        type: String,
        required: [true, 'Resume is required']
    },
    desired_teammates: {
        type: [String],
        default: undefined
    },
    portfolio: String,
    linkedIn: String,
    created: {
        type: Date,
        required: [true, 'Date created is required']
    }
});

//Secondary indexing for first + last name & email of submissions
formSchema.index({
    first_name: 1,
    last_name: 1
});
usersSchema.index({
    email: 1
});
formSchema.set('autoIndex', false);

const form_entry = mongoose.model('form_entry', formSchema);

// given the output from a form submission, enter in the entrys into the database
async function enterFormSumbission(submission) {
    // TODO: make sure the submission is valid before saving it to the db
    // FIXME: make sure this is accurate
    
    return new form_entry({
        ...submission,
        created: Date.now()
    }).save();
}


// // mongoose tutorial
// var test_run_db = () => {
//     var db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function () {
//         // connected
//     });

//     var kittySchema = new mongoose.Schema({
//         name: String
//     });

//     var Kitten = mongoose.model('Kitten', kittySchema);

//     var silence = new Kitten({
//         name: 'Silence'
//     });
//     console.log(silence.name); // 'Silence'

//     // NOTE: methods must be added to the schema before compiling it with mongoose.model()
//     kittySchema.methods.speak = function () {
//         var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
//         console.log(greeting);
//     }

//     var Kitten = mongoose.model('Kitten', kittySchema);
//     var fluffy = new Kitten({
//         name: 'fluffy'
//     });
//     fluffy.speak(); // "Meow name is fluffy"
//     fluffy.save(function (err, fluffy) {
//         if (err) return console.error(err);
//         fluffy.speak();
//     });

//     Kitten.find(function (err, kittens) {
//         if (err) return console.error(err);
//         console.log(kittens);
//     });

//     Kitten.find({
//         name: /^fluff/
//     }, (kitten) => console.log(kitten.name));
// };

module.exports = {
    formSchema,

    // run_db
};