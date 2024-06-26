// import mysql from "serverless-mysql"

// const db = mysql({
//     config: {
//         host: process.env.MYSQL_HOST,
//         port: process.env.MYSQL_PORT,
//         database: process.env.MYSQL_DATABASE,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD
//     }
// });

// export default async function executeSchema({ query, values }) {
//     try {
//         const results = await db.query(query, values);
//         await db.end();
//         return results;
//     } catch (error) {
//         return { error };
//     }
// }

import mysql from "serverless-mysql";

//reminder: please use .env for api_keys
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

//delete .env
//sent to Naresh for validation
export default async function executeSchema({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
