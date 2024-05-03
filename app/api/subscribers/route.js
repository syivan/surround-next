import executeSchema from "@/utils/db";

export async function POST(req) {
  try {
    const receipt = await req.json();
    const result = await executeSchema({
      query: "INSERT INTO users SET ?",
      values: {
        email: receipt.email,
        enrollment_date: receipt.enrollment_date,
      },
    });
    return new Response("OK");
  } catch (error) {
    return { error };
  }
}

export async function DELETE(req) {
  try {
    const receipt = await req.json();
    const result = await executeSchema({
      query: `DELETE FROM users WHERE id = ?`,
      values: receipt.email,
    });
    return new Response("OK");
  } catch (error) {
    return { error };
  }
}
