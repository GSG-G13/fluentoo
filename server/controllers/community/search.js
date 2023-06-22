const { Op } = require('sequelize');
const { Profile, User } = require('../../models');

const search = async (req, res) => {
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

  if (name) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
    };
  }

  if (spokenLanguages) {
    query.where = {
      ...query.where,
      spokenLanguages: {
        [Op.contains]: [spokenLanguages],
      },
    };
  }

  if (practiceLanguages) {
    query.where = {
      ...query.where,
      practiceLanguages: {
        [Op.contains]: [practiceLanguages],
      },
    };
  }

  try {
    const profiles = await Profile.findAndCountAll(query);
    return res.json({
      totalProfiles: profiles.count,
      profiles: profiles.rows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving profiles.' });
  }
};

module.exports = search;
