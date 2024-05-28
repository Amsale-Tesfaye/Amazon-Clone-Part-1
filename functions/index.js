const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { setGlobalOptions } = require("firebase-functions/v2");
dotenv.config();
const Stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
setGlobalOptions({ maxInstances: 10});

app.use(cors({ orign: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);


    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  }else
  res.status(403).json({
    message: "total must be greater than 0",
   });

});
exports.api = onRequest(app);
