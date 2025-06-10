const express = require('express');
const router = express.Router();
const { partnership_Application_Form, Problem_statements_Form,Investor_Partnership_Form, Startup_Incubation_Application_Form } = require('../controllers/Form_Controller.js');


router.post('/partnership_Application', partnership_Application_Form);
router.post('/Problem_statements', Problem_statements_Form);
router.post('/investor_Partnership', Investor_Partnership_Form);
router.post('/Startup_Incubation_Application', Startup_Incubation_Application_Form);



module.exports = router;