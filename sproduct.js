const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendfile("public/sproduct.html"))
    .post((req, res) => res.send("POST"));
module.exports = router;
const appId = '{YOUR_SANDBOX_APPLICATION_ID}';
const locationId = '{YOUR_SANDBOX_LOCATION_ID}'; 
 async function initializeCard(payments) {
   const card = await payments.card();
   await card.attach('#card-container'); 
   return card; 
 }

document.addEventListener('DOMContentLoaded', async function () {
  if (!window.Square) {
    throw new Error('Square.js failed to load properly');
  }
  const payments = window.Square.payments(appId, locationId);
  let card;
  try {
    card = await initializeCard(payments);
  } catch (e) {
    console.error('Initializing Card failed', e);
    return;
  }

  // Step 5.2: create card payment
});
