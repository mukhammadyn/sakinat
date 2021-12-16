const { Lead } = require('../models');

async function getLeads() {
  try {
    return await Lead.findAll();
  } catch (error) {
    throw Error(`leads repository [getLeads]:${error}`);
  }
}

async function addLead(full_name, phone_number, course_id) {
  try {
    return await Lead.create({
      full_name,
      phone_number,
      course_id
    });
  } catch (error) {
    throw Error(`leads repository [addLead]:${error}`);
  }
}

module.exports = { addLead, getLeads };
