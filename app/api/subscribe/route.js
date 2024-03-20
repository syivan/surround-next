import executeSchema from "@/db";

export async function POST(req) {
    try {
        const receipt = await req.json();
        const result = await executeSchema({
            query: 'INSERT INTO users SET ?',
            values: { email: receipt.email, enrollment_date: receipt.enrollment_date }
        })
        console.log(receipt);
        return new Response('OK');
    } catch (error) {
        return { error }
    }
}