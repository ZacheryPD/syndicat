'use strict';

module.exports = function(sequelize, DataTypes) {
  var PreferenceSection = sequelize.define('PreferenceSection', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'ttrss_prefs_sections',
    classMethods: {
    }
  });
  return PreferenceSection;
};
