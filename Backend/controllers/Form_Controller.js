const pool = require('../db/connect.js');

const partnership_Application_Form= (req, res) => {
    const sql = 'INSERT INTO partnership_applications (email, company_name, industry_sector, location, contact_name, designation, mobile_number, contact_email, innovation_verticals, submitted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        // req.body.id,
        req.body.email,
        req.body.company_name,
        req.body.industry_sector,
        req.body.location,
        req.body.contact_name,
        req.body.designation,
        req.body.mobile_number,
        req.body.contact_email,
        // JSON.stringify(partnership_opportunities),
        req.body.innovation_verticals,
        req.body.submitted_at
    ];
    pool.query(sql, values, (err, data)=> {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
};
const Problem_statements_Form = (req,res) => {
    const sql = 'INSERT INTO Problem_statements (company_name, company_type, focus_area, website_or_linkedin, contact_person_name,contact_person_designation, mobile_number, email_id, use_case, submitted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
        req.body.company_name,
        req.body.company_type,
        req.body.focus_area,
        req.body.website_or_linkedin,
        req.body.contact_person_name,
        req.body.contact_person_designation,
        req.body.mobile_number,
        req.body.email_id,
        req.body.use_case,
        req.body.submitted_at
    ];
    pool.query(sql, values, (err, data)=> {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })

};
const Investor_Partnership_Form = (req, res) => {
    const sql = 'INSERT INTO investor_partnership (investor_name, mobile_number, email_id, focus_area, fund_size, no_companies_invested_in, linkedin_profile_or_website_of_the_company , submitted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values =[
        req.body.investor_name,
        req.body.mobile_number,
        req.body.email_id,
        req.body.focus_area,
        req.body.fund_size,
        req.body.no_companies_invested_in,
        req.body.linkedin_profile_or_website_of_the_company,
        req.body.submitted_at
    ];
    pool.query(sql, values, (err, data)=> {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
};
const Startup_Incubation_Application_Form = (req, res) => {
    const sql ='INSERT INTO startup_incubation (startup_name, startup_focus_area, startup_founder_name, startup_location, mobile_number, email_id, website_or_linkedin, team_size, startup_discription, startup_stage, registered_entity, DPIIT_registered,support_seeking_form_CITIL, funding_status, other_comments, submited_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const values =[
        req.body.startup_name,
        req.body.startup_focus_area,
        req.body.startup_founder_name,
        req.body.startup_location,
        req.body.mobile_number,
        req.body.email_id,
        req.body.website_or_linkedin,
        req.body.team_size,
        req.body.startup_discription,
        req.body.startup_stage,
        req.body.registered_entity,
        req.body.DPIIT_registered,
        req.body.support_seeking_form_CITIL,
        req.body.funding_status,
        req.body.other_comments,
        req.body.submited_at   
    ]
    pool.query(sql, values, (err, data)=> {
        if(err){
            return res.json(err);
        }
        return res.json(data);
    })
};
module.exports = {
    partnership_Application_Form,
    Problem_statements_Form,
    Investor_Partnership_Form,
    Startup_Incubation_Application_Form
};
