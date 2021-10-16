const { BadRequest } = require('http-errors');
const { User } = require('../../models');

const changeStatus = async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;
  console.log(_id);

  if (typeof subscription === 'undefined') {
    throw new BadRequest('missing field subscription');
  }
  const result = await User.findOneAndUpdate({ _id }, { subscription }, { new: true });

  res.json({
    status: 'success',
    code: 200,
    data: {
      subscription: result.subscription
    }
  });
};

module.exports = changeStatus;
