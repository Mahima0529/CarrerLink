// import mongoose from "mongoose";

// export const connection = ()=>{
//     mongoose.connect(process.env.MONGO_URI, {
//         dbName: "CareerLink"
//     }).then(()=>{
//         console.log("Connected to database.")
//     }).catch(err=>{
//         console.log(`Some error occured while connecting to database: ${err}`)
//     })
//     console.log("Mongo DB Name:", mongoose.connection.name);

// }

import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "CareerLink" })
    .then((conn) => {
      console.log("Connected to database.");
      console.log("Mongo DB Name:", conn.connection.name);
   
    }
)
    
    .catch((err) => {
      console.error("Database connection failed ❌");
      console.error(err.message);
      process.exit(1);
    });
    
};
