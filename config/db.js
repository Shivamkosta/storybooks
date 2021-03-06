const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (err) {
    next(err);
    console.log("Error:", err);
  }
};

module.exports = connectDB;
