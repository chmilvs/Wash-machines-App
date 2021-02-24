const express = require("express");
const ModelWm = require("../models/ModelWm");
const WashMachine = require("../models/WashMachine");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const models = await ModelWm.find().populate("instances");
    res.status(200).json({ success: true, models });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Create the first model!" });
  }
});

router.post("/new", async (req, res) => {
  const { model } = req.body;

  const newModel = new ModelWm({ model });
  const wm = new WashMachine({ model });
  try {
    await wm.save();
    newModel.instances.push(wm);
    await newModel.save();
    res.status(200).json({ success: true, newModel });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        message: "Such model already exist or field is empty!",
      });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const modelDelete = await ModelWm.findByIdAndDelete(id).populate("instances");
  for (let i = 0; i < modelDelete.instances.length; i++) {
    await WashMachine.findByIdAndDelete(modelDelete.instances[i]);
  }
  try {
    res.status(200).json({ success: true, modelDelete });
  } catch (error) {
    res.status(404).json({ success: false, message: "Server error" });
  }
});

router.post("/:id/products", async (req, res) => {
  const { id } = req.params;
  const model = await ModelWm.findById(id).populate("instances");
  try {
    const wm = new WashMachine({});
    await wm.save();
    model.instances.push(wm);
    await model.save();
    res.status(200).json({ success: true, model });
  } catch (error) {
    res.status(400).json({ success: false, message: "Instance wasn't save!" });
  }
});

router.get("/:id/:idproduct", async (req, res) => {
  const { id, idproduct } = req.params;
  const model = await ModelWm.findById(id).populate("instances");
  const wm = await WashMachine.findByIdAndDelete(idproduct);
  model.instances = model.instances.filter((el) => {
    return JSON.stringify(el._id) !== JSON.stringify(wm._id);
  });
  await model.save();
  res.status(201).json({ success: true, model });
});

router.get("/:id/:idproduct/state", async (req, res) => {
  const { id, idproduct } = req.params;
  const model = await ModelWm.findById(id).populate("instances");
  const wm = await WashMachine.findById(idproduct);
  if (wm.isTurnedOn) {
    wm.isTurnedOn = false;
    await wm.save();
  } else {
    wm.isTurnedOn = true;
    await wm.save();
  }
  model.instanse = model.instances.map((el) => {
    if (
      JSON.stringify(el._id) == JSON.stringify(wm._id) &&
      el.isTurnedOn !== wm.isTurnedOn
    ) {
      el.isTurnedOn = wm.isTurnedOn;
    }
  });
  await model.save();
  res.status(200).json({ success: true, model });
});

module.exports = router;
