// const MongoClient = require("mongodb").MongoClient;
const dbOperations = require("./operations");

const assert = require("assert");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "conFusion";

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);
  console.log("Database connection established successfully");
  const db = client.db(dbname);
  dbOperations.insertDocument(
    db,
    {
      name: "Pizza Inn Kenya",
      description: "Test",
    },
    "dishes",
    (result) => {
      console.log(`Insert Document:\n ${result.ops}`);
      dbOperations.findDocuments(db, "dishes", (docs) => {
        console.log(`Found Documents:\n${docs}`);

        dbOperations.updateDocument(
          db,
          { name: "Pizza Inn Kenya" },
          { description: "This restaurant is located in kenya" },
          "dishes",
          (result) => {
            console.log(`Updated Document Successfully:\n ${result.result}`);
            dbOperations.findDocuments(db, "dishes", (docs) => {
              console.log(`Found updated Documents:\n${docs}`);
              db.dropCollection("dishes", (result) => {
                console.log("Dropped Collection: ", result);

                client.close();
              });
            });
          }
        );
      });
    }
  );
});
