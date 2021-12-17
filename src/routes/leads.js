const express = require('express');
const ctrl = require('../controllers/LeadController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getLeads).post(ctrl.addLead);

module.exports = router;
