const { query } = require('express');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    instructor: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    created_at: {
        type: Date,
        default: new Date()
    }
});

let courses = mongoose.model('courses', courseSchema);


const insertOne = async (body) => {
    try {
        return await new courses(body).save();
    } catch (error) {
        return error;
    }
};

const find = async () => {
    try {
        return await courses.find();
    } catch (error) {
        return error;
    }
};

const get_courses_with_pagination = async (query) => {
    try {
        let page = parseInt(query.page) || 1;
        let limit = parseInt(query.limit) || 5;
        let search_text = query.search_text || '';
        console.log("search_text:", search_text)
        const startIndex = (page - 1) * limit;
        const get = await courses.find({
              'title': {'$regex': query.search_text && query.search_text != null  ? query.search_text : '', '$options': 'i'}
          }).skip(startIndex).limit(limit).exec();
        const total_number_of_records = await courses.countDocuments();
        let number_of_records = get.length;
        return { total_number_of_records, number_of_records, page, get };
    } catch (error) {
        return error;
    }
};

const findOne = async (query) => {
    try {
        return await courses.findOne(query);
    } catch (error) {
        return error;
    }
};

const updateOne = async (match, query) => {
    try {
        return await courses.findByIdAndUpdate(match, query);
    } catch (error) {
        return error;
    }
};

const deleteOne = async (match) => {
    try {
        return await courses.findByIdAndDelete(match);
    } catch (error) {
        return error;
    }
};

module.exports = {
    insertOne,
    find,
    get_courses_with_pagination,
    findOne,
    updateOne,
    deleteOne
};
