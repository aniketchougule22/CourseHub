const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const courses = require('../../models/courses');
const auth = require('../../middlewares/auth').isValidToken;

/* Add course */
router.post('/', auth, async (req, res) => {
    try {
        const create = await courses.insertOne(req.body);
        if (create._id) {
            res.status(200).json({ status: true, statusCode: 200, message: "Course added successfully..!", data: create });
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: create });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});

/* Get all courses */
router.get('/all_courses', auth, async (req, res) => {
    try {
        const get = await courses.find();
        if (get.length > 0) {
            res.status(200).json({ status: true, statusCode: 200, message: "Courses found..!", data: get });
        } else {
            res.status(200).json({ status: true, statusCode: 200, message: "No courses available..!", data: get });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});

/* Get all courses with pagination */
router.get('/', auth, async (req, res) => {
    try {
        const get = await courses.get_courses_with_pagination(req.query);
        if (get) {
            res.status(200).json({ status: true, statusCode: 200, message: "Courses found..!", data: get });
        } else {
            res.status(200).json({ status: true, statusCode: 200, message: "No courses available..!", data: get });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});


/* Get course by _id */
router.get('/course_by_id', auth, async (req, res) => {
    try { 
        const get = await courses.findOne({ _id: new mongoose.Types.ObjectId(req.query.course_id) });
        if (get != null) {
            res.status(200).json({ status: true, statusCode: 200, message: "Course found..!", data: get });
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: "Invalid course_id..!", data: get });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});

/* Update course */
router.patch('/', auth, async (req, res) => {
    try {
        const update = await courses.updateOne({ _id: new mongoose.Types.ObjectId(req.body._id) }, { $set: req.body });
        if (update != null) {
            res.status(200).json({ status: true, statusCode: 200, message: 'Course updated successfully..!', data: update });
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: 'document not found..!' });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});

/* Delete course */
router.delete('/', auth, async (req, res) => {
    try {
        const remove = await courses.deleteOne({ _id: new mongoose.Types.ObjectId(req.query.course_id) });
        if (remove != null) {
            res.status(200).json({ status: true, statusCode: 200, message: 'Course deleted successfully..!' });
        } else {
            res.status(400).json({ status: false, statusCode: 400, message: 'document not found..!' });
        }
    } catch (error) {
        res.status(400).json({ status: false, statusCode: 400, message: "something went wrong..!", error: error.stack });
    }
});


module.exports = router;
