const mongoose = require("mongoose");

// Boilerplate User Schema
// const UserSchema = new mongoose.Schema({
// 	name: { type: String },
// 	age: { type: Number }
// }, { timsestamp: true });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

// with validation
const UserSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: [true, "First name is required"],
			minlength: [6, "First name must be at least 6 characters"]
		},
		last_name: {
			type: String,
			required: [true, "Last name is required"],
			maxlength: [20, "Last name can not be more than 20 characters"]
		},
		age: {
			type: Number,
			min: [13, "You must be at least 13 to register"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
		},
	},
	{ timestamps: true }
)

const User = mongoose.model("User", UserSchema);

module.exports = User;