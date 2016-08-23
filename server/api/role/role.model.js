'use strict';

import mongoose from 'mongoose';

var RoleSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Role', RoleSchema);
