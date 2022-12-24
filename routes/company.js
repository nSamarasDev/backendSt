const express = require('express')
const router = express.Router()

// Future routes for Companies
// NEEDS WORKED ON STILL

const {
    getCompanies,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
} = require('../controllers/profile')

router.route('/')
.get(getProfiles)
.post(createProfile)

router.route('/:id')
.get(getProfile)
.put(updateProfile)
.delete(deleteProfile)

module.exports = router