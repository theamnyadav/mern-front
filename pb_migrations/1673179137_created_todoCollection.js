migrate((db) => {
  const collection = new Collection({
    "id": "chp85u8j48pxppn",
    "created": "2023-01-08 11:58:57.254Z",
    "updated": "2023-01-08 11:58:57.254Z",
    "name": "todoCollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0dnm6snu",
        "name": "field",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("chp85u8j48pxppn");

  return dao.deleteCollection(collection);
})
