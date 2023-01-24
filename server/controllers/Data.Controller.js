const Account = require('./../models/Account');
const Application = require('../models/Application');
const Hardware = require('../models/Hardware');
const Software = require('../models/Software');
const UpdateAccount = require('./../models/UpdateAccount');

const CartData = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const accounts = await Account.find({userId:userId});
    const softs = await Software.find({userId:userId});
    const hards = await Hardware.find({userId:userId});
    const uaccounts = await UpdateAccount.find({userId:userId});
    const apps = await Application.find({userId:userId});
    const cart = accounts.concat(softs, hards, uaccounts, apps)
    res.json({
      success: true,
      cart:cart
    })
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}

const OpenRequests = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const accounts = await Account.find({userId:userId, requestStatus:"open"});
    const softs = await Software.find({userId:userId, requestStatus:"open"});
    const hards = await Hardware.find({userId:userId, requestStatus:"open"});
    const uaccounts = await UpdateAccount.find({userId:userId, requestStatus:"open"});
    const apps = await Application.find({userId:userId, requestStatus:"open"});
    const open = accounts.concat(softs, hards, uaccounts, apps)
    res.json({
      success: true,
      open:open
    })
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}

const CloseRequests = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const accounts = await Account.find({userId:userId, requestStatus:"close"});
    const softs = await Software.find({userId:userId, requestStatus:"close"});
    const hards = await Hardware.find({userId:userId, requestStatus:"close"});
    const uaccounts = await UpdateAccount.find({userId:userId, requestStatus:"close"});
    const apps = await Application.find({userId:userId, requestStatus:"close"});
    const close = accounts.concat(softs, hards, uaccounts, apps)
    res.json({
      success: true,
      close:close
    })
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}

const ActionRequests = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const accounts = await Account.find({userId:userId, requestStatus:"require action"});
    const softs = await Software.find({userId:userId, requestStatus:"require action"});
    const hards = await Hardware.find({userId:userId, requestStatus:"require action"});
    const uaccounts = await UpdateAccount.find({userId:userId, requestStatus:"require action"});
    const apps = await Application.find({userId:userId, requestStatus:"require action"});
    const action = accounts.concat(softs, hards, uaccounts, apps)
    res.json({
      success: true,
      action:action
    })
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}

const ApprovedRequests = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const accounts = await Account.find({userId:userId, approved: true});
    const softs = await Software.find({userId:userId, approved: true});
    const hards = await Hardware.find({userId:userId, approved: true});
    const uaccounts = await UpdateAccount.find({userId:userId, approved: true});
    const apps = await Application.find({userId:userId, approved: true});
    const approveds = accounts.concat(softs, hards, uaccounts, apps)
    res.json({
      success: true,
      approved:approveds
    })
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}

module.exports = {CartData, OpenRequests, CloseRequests, ActionRequests, ApprovedRequests }