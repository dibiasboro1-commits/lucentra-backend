const Tool = require("../models/Tool");

exports.createTool = async (req, res) => {
  try {

    const { name, description, price, category } = req.body;

    const tool = new Tool({
      name,
      description,
      price,
      category,
      createdBy: req.user.id
    });

    await tool.save();

    res.status(201).json({
      message: "Tool created successfully",
      tool
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTools = async (req, res) => {
  try {

    const tools = await Tool.find({ approved: true }).populate("createdBy", "name email");

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.upvoteTool = async (req, res) => {
  try {

    const toolId = req.params.id;

    const tool = await Tool.findById(toolId);

    if (!tool) {
      return res.status(404).json({ message: "Tool not found" });
    }

    tool.upvotes += 1;

    await tool.save();

    res.json({
      message: "Tool upvoted successfully",
      upvotes: tool.upvotes
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.approveTool = async (req, res) => {
  try {

    const toolId = req.params.id;

    const tool = await Tool.findById(toolId);

    if (!tool) {
      return res.status(404).json({ message: "Tool not found" });
    }

    tool.approved = true;

    await tool.save();

    res.json({
      message: "Tool approved successfully",
      tool
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.searchTools = async (req, res) => {
  try {

    const query = req.query.q;

    const tools = await Tool.find({
      approved: true,
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } }
      ]
    });

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getTrendingTools = async (req, res) => {
  try {

    const tools = await Tool.find({ approved: true })
      .sort({ upvotes: -1 })
      .limit(10);

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getTrendingTools = async (req, res) => {
  try {

    const tools = await Tool.find({ approved: true })
      .sort({ upvotes: -1 })
      .limit(10);

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.searchTools = async (req, res) => {
  try {

    const query = req.query.query || "";

    const tools = await Tool.find({
      approved: true,
      name: { $regex: query, $options: "i" }
    });

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getToolsByCategory = async (req, res) => {
  try {

    const category = req.params.category;

    const tools = await Tool.find({
      approved: true,
      category: category
    });

    res.json(tools);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};