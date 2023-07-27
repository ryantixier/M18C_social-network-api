const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Student model
const studentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // format timestamp
      get: function (timeStamp) {
        // look up formatting timestamp, write code here;
        //
        //
        return `Placeholdèr ${timeStamp}`;
        // return will be what shows up in re: from db
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Student = model("student", studentSchema);

module.exports = Student;
