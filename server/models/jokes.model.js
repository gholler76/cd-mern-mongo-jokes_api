const mongoose = require("mongoose");

// Boilerplate User Schema
// const UserSchema = new mongoose.Schema({
// 	name: { type: String },
// 	age: { type: Number }
// }, { timsestamp: true });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

// with validation
const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "Setup is required"],
			minlength: [10, "Setup must be at least 10 characters"]
		},
		punchline: {
			type: String,
			required: [true, "Punchline is required"],
			minlength: [3, "Punchline must be at least 3 characters"]
		},
		
	},
	{ timestamps: true }
)

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;