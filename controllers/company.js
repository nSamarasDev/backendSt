
// Future controllers for Companies
// NEEDS WORKED ON STILL


// @des     Get all companies
// @route   GET /api/v1/profile
// @access  Public
exports.getProfiles = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all profiles' })
}

// @des     Get single profile
// @route   GET /api/v1/profile/:id
// @access  Public
exports.getProfile = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get profile ${req.params.id}` })
}

// @des     Create a profile
// @route   POST /api/v1/profile
// @access  Private
exports.createProfile = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new profile' })
}

// @des     Update a profile
// @route   PUT /api/v1/profile/:id
// @access  Private
exports.updateProfile = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update profile ${req.params.id}` })
}

// @des     Delete a profile
// @route   DELETE /api/v1/profile/:id
// @access  Private
exports.deleteProfile = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update profile ${req.params.id}` })
}