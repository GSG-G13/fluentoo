const { Op } = require('sequelize');
const { Profile, User } = require('../../models');
const { CustomeError } = require('../../utils');

const search = async (req, res, next) => {
  const {
    page, limit, name, spokenLanguages, practiceLanguages,
  } = req.query;
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  const currentPage = pageNumber || 1;
  const itemsPerPage = pageSize || 10;

  const query = {
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
    include: {
      model: User,
      attributes: ['id', 'username', 'email'],
    },
    attributes: ['avatar', 'spokenLanguages', 'country'],
    where: {},
  };

  if (name && spokenLanguages && practiceLanguages) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
      spokenLanguages: {
        [Op.contains]: [spokenLanguages],
      },
      practiceLanguages: {
        [Op.contains]: [practiceLanguages],
      },
    };
  } else if (name && spokenLanguages) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
      spokenLanguages: {
        [Op.contains]: [spokenLanguages],
      },
    };
  } else if (name && practiceLanguages) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
      practiceLanguages: {
        [Op.contains]: [practiceLanguages],
      },
    };
  } else if (spokenLanguages && practiceLanguages) {
    query.where = {
      spokenLanguages: {
        [Op.contains]: [spokenLanguages],
      },
      practiceLanguages: {
        [Op.contains]: [practiceLanguages],
      },
    };
  } else if (name) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
    };
  } else if (spokenLanguages) {
    query.where = {
      spokenLanguages: {
        [Op.contains]: [spokenLanguages],
      },
    };
  } else if (practiceLanguages) {
    query.where = {
      practiceLanguages: {
        [Op.contains]: [practiceLanguages],
      },
    };
  } else {
    throw new CustomeError(
      'You must provide a name, spokenLanguages or practiceLanguages.',
      400,
    );
  }

  try {
    const profiles = await Profile.findAndCountAll(query);
    return res.json({
      totalProfiles: profiles.count,
      profiles: profiles.rows,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = search;
