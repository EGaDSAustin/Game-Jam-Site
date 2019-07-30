const mongoose = require('mongoose');

const { mongo } = require('../secret.json');

// try {
//     const { mongo } = require('../secret.json');
// } catch (ex) {
//     console.log(`HEY MAN, you got no secrets, are you even real, your exception is: ${ex}`);
// }

const connectionString = `${mongo.address_prefix}${mongo.username}:${mongo.password}${mongo.address_suffix}`;
console.log(`connection str: ${mongo.address_prefix}${mongo.username}:${'******'}${mongo.address_suffix}`);

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
formSchema.index({
    email: 1
});
formSchema.set('autoIndex', false);

const form_entry = mongoose.model('form_entry', formSchema, 'form_entry');

// given the output from a form submission, enter in the entrys into the database
async function enterFormSumbission(submission) {
    // TODO: make sure the submission is valid before saving it to the db
    // FIXME: make sure this is accurate
    
    return new form_entry({
        ...submission,
        created: Date.now()
    }).save();
}

async function testDataBaseSubmission() {
    const my_submit = {
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

    const connector = mongoose.connect(connectionString);


    
    async function findEntry(email) {
        return await form_entry.findOne({ email })
    }

    async function forceGet(submission) {
        let entry = await connector.then(async () => {
            return findEntry(submission.email)
        });
        if (!entry) {
            entry = await enterFormSumbission(submission);
        }
    }

    
    await mongoose.connect(connectionString).then(
        console.log(`entry is: ${forceGet(my_submit)}`)
    ).then(
        console.log("DONE!")
    );

    // let v = await forceGet(my_submit);
    // console.log(`entered submission, the cat lady: ${v}`);
    // console.log(`totally a cat lady: ${await findEntry("sexycatlady69@jimminycrickets.io")}`);
    // console.log(`not cat lady: ${await findEntry("notsexycatlady69@jimminycrickets.io")}`);
}
module.exports = {
    formSchema,
    enterFormSumbission,
    testDataBaseSubmission
};