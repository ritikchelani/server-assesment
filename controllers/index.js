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
    if (!count) {
      res.status(200).json({ addCount: 0, updateCount: 0 });
      return;
    }
    res.status(200).json(count);
  } catch (error) {
    console.error('Error retrieving Component One count:', error);
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
    if (!count) {
      res.status(200).json({ addCount: 0, updateCount: 0 });
      return;
    }
    res.status(200).json(count);
  } catch (error) {
    console.error('Error retrieving Component Two count:', error);
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
    if (!count) {
      res.status(200).json({ addCount: 0, updateCount: 0 });
      return;
    }
    res.status(200).json(count);
  } catch (error) {
    console.error('Error retrieving Component Three count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getNewestComponentOne = async (req, res) => {
  try {
    const newestComponentOne = await ComponentOne.findOne().sort({ createdAt: -1 });
    res.status(200).json(newestComponentOne);
  } catch (error) {
    console.error('Error retrieving newest Component One:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getNewestComponentTwo = async (req, res) => {
  try {
    const newestComponentTwo = await ComponentTwo.findOne().sort({ createdAt: -1 });
    res.status(200).json(newestComponentTwo);
  } catch (error) {
    console.error('Error retrieving newest Component Two:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getNewestComponentThree = async (req, res) => {
  try {
    const newestComponentThree = await ComponentThree.findOne().sort({ createdAt: -1 });
    res.status(200).json(newestComponentThree);
  } catch (error) {
    console.error('Error retrieving newest Component Three:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

