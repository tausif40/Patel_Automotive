//Require Mongoose
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const CategorySchema = new mongoose.Schema({
	_id: Number,
	catnm: {
		type: String,
		required: [ true, "Category name is required" ],
		unique: true,
		trim: true
	}
});

// Apply the uniqueValidator plugin to UserSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model(
	"category_collection",
	CategorySchema
);

export default CategorySchemaModel;
