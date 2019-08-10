const mongoose = require('mongoose');

// experience level schema
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

const formEntry = mongoose.model('form_entry', formSchema, 'form_entry');

module.exports = formEntry;
