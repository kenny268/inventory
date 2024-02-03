/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
// eslint-disable-next-line quotes
const inventoryCollection = 'inventory';

exports.createInventory = functions.https.onRequest(async (req, res) => {
  try {
    const {name, quantity} = req.body;
    const inventoryRef = db.collection(inventoryCollection);
    await inventoryRef.add({name, quantity});
    res.status(201).send("Inventory created successfully");
  } catch (error) {
    console.error("Error creating inventory:", error);
    res.status(500).send("Internal Server Error");
  }
});

exports.updateInventory = functions.https.onRequest(async (req, res) => {
  try {
    const {id, name, quantity} = req.body;

    const inventoryRef = db.collection(inventoryCollection);

    // Check if the document exists before updating
    const docSnapshot = await inventoryRef.doc(id).get();
    if (!docSnapshot.exists) {
      return res.status(404).send("Inventory not found");
    }

    // Build the update object with only defined values
    const updateObject = {};
    if (name !== undefined) {
      updateObject.name = name;
    }
    if (quantity !== undefined) {
      updateObject.quantity = quantity;
    }

    // Update only the specified fields
    await inventoryRef.doc(id).set(updateObject, {merge: true});

    res.status(200).send("Inventory updated successfully");
  } catch (error) {
    console.error("Error updating inventory:", error);
    res.status(500).send("Internal Server Error");
  }
});


exports.getInventory = functions.https.onRequest(async (_, res) => {
  try {
    const snapshot = await db.collection(inventoryCollection).get();
    const inventoryList = [];
    snapshot.forEach((doc) => {
      inventoryList.push({id: doc.id, ...doc.data()});
    });
    res.status(200).json(inventoryList);
  } catch (error) {
    console.error("Error getting inventory:", error);
    res.status(500).send("Internal Server Error");
  }
});

exports.deleteInventory = functions.https.onRequest(async (req, res) => {
  try {
    const {id} = req.body;
    const inventoryRef = db.collection(inventoryCollection);
    await inventoryRef.doc(id).delete();
    res.status(200).send("Inventory deleted successfully");
  } catch (error) {
    console.error("Error deleting inventory:", error);
    res.status(500).send("Internal Server Error");
  }
});

