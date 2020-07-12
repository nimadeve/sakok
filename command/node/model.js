module.exports = {
    init: (name) => {
      return `import mongoose, { Schema } from 'mongoose';
const ${name}Schema = new Schema({
    deletedAt:{  date: {type:Date} , actor:{ type: Schema.Types.ObjectId , ref:'contact'}   }
    createdAt: { type: Date , default: Date.now() },
    updatedAt: { type: Date }
});

const ${name}Model = mongoose.model('${name}', ${name}Schema);
export default ${name}Model;
      `
    },
  };
