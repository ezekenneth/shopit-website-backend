const mongoose = require("mongoose");

const validateDBid = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("This id is not valid");
  }
};

module.exports = validateDBid;