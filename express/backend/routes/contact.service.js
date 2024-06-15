const express = require("express");
const router = express.Router();
/**
 * This is a sample route that will be used to get all the products
 */
router.post("/send", function (req, res, next) {
  /**
   * This is a sample data that will be sent
   */
  console.log(req.body);

  let { email } = req.body;
  res.send("what the hell ! - >" + email);
});
// Export the router
module.exports = router;
