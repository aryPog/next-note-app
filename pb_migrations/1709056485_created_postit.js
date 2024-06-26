migrate((db) => {
  const collection = new Collection({
    "id": "qzk70afkxgsmczk",
    "created": "2024-02-27 17:54:45.546Z",
    "updated": "2024-02-27 17:54:45.546Z",
    "name": "postit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fxdmqpns",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gzjtn0li",
        "name": "notes",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qzk70afkxgsmczk");

  return dao.deleteCollection(collection);
})
