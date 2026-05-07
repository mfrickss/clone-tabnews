import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = await database.query("SELECT version()");

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersion.rows[0],
  });
  console.log(postgresVersion.rows[0]);
}

export default status;
