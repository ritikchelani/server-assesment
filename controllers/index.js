const ComponentOne = require('../model/componentOne');
const ComponentTwo = require('../model/componentTwo');
const ComponentThree = require('../model/componentThree');
const Count = require('../model/count');

async function updateCount(component, countType) {
  await Count.updateOne({ component }, { $inc: { [countType]: 1 } }, { upsert: true });
}

async function getCount(component) {
  return await Count.findOne({ component });
}

exports.addComponentOne = async (req, res) => {
  try {
    const newData = new ComponentOne(req.body);
    await newData.save();
    await updateCount('componentOne', 'addCount');
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateComponentOne = async (req, res) => {
  try {
    const { id } = req.params;
    await ComponentOne.findByIdAndUpdate(id, req.body);
    await updateCount('componentOne', 'updateCount');
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getComponentOneCount = async (req, res) => {
  try {
    const count = await getCount('componentOne');
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addComponentTwo = async (req, res) => {
  try {
    const newData = new ComponentTwo(req.body);
    await newData.save();
    await updateCount('componentTwo', 'addCount');
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateComponentTwo = async (req, res) => {
  try {
    const { id } = req.params;
    await ComponentTwo.findByIdAndUpdate(id, req.body);
    await updateCount('componentTwo', 'updateCount');
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getComponentTwoCount = async (req, res) => {
  try {
    const count = await getCount('componentTwo');
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addComponentThree = async (req, res) => {
  try {
    const newData = new ComponentThree(req.body);
    await newData.save();
    await updateCount('componentThree', 'addCount');
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateComponentThree = async (req, res) => {
  try {
    const { id } = req.params;
    await ComponentThree.findByIdAndUpdate(id, req.body);
    await updateCount('componentThree', 'updateCount');
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getComponentThreeCount = async (req, res) => {
  try {
    const count = await getCount('componentThree');
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
