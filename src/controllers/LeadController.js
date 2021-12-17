const repository = require('../repositories/LeadRepository');

const getLeads = async (req, res) => {
  try {
    const leads = await repository.getLeads();
    res.send(leads);
  } catch (error) {
    throw Error(`leads controller [getLeads]:${error}`);
  }
};

const addLead = async (req, res) => {
  try {
    const { full_name, phone_number, course_id } = req.body;
    const lead = await repository.addLead(full_name, phone_number, course_id);
    res.send(lead);
  } catch (error) {
    throw Error(`leads controller [addLead]:${error}`);
  }
};

module.exports = {
  addLead,
  getLeads
};
