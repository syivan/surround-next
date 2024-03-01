// import executeSchema from "@/db";

// export async function POST(req) {
//     try {
//         const test = await req.json();
//         const result = await executeSchema({
//             query: 'INSERT INTO users(name) VALUES(?)',
//             values: test.name,
//         })
//         console.log(result)
//         return new Response('OK');
//     } catch (error) {
//         console.log(error);
//     }
// }

import executeSchema from "@/db";

export async function POST(req) {
    try {
        const receipt = await req.json();
        const result = await executeSchema({
            query: 'INSERT INTO users(email) VALUES(?)',
            values: receipt.email
        })
        console.log(receipt);
        return new Response('OK');
    } catch (error) {
        return { error }
    }
}