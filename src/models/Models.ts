import { createConnection, Connection } from "typeorm";

export class Models {
  private connection!: Connection;

  constructor(connection?: Connection) {
    if (connection) this.connection = connection;
    this.bootstap();
  }

  private async bootstap(): Promise<void> {
    if (!this.connection)
      this.connection = await createConnection({
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "sample",
      });
  }
}

export default Models;
