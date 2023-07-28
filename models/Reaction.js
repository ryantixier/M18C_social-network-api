const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    //
    //
    //
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // format timetamp
      get: function (timeStamp) {
        // look up formatting timestamp, write code here;
        //
        //
        return `Placeholdèr ${timeStamp}`;
        // result/return will be what shows up in re: from db
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
  //
  //
  //
);

module.exports = reactionSchema;
