const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/resume", async (req, res) => {

  const { name, skills, experience } = req.body;

  const resume = `
Professional Resume

Name: ${name}

Skills: ${skills}

Experience: ${experience}

Summary:
An experienced professional skilled in ${skills}.
`;

  res.json({
    result: resume
  });

});
// Caption Generator
router.post("/caption", (req, res) => {

const { topic } = req.body;

const caption = `🔥 ${topic} vibes!

Living the moment and loving every second.`;

res.json({ result: caption });

});


// Startup Name Generator
router.post("/startup-name", (req, res) => {

const { keyword } = req.body;

const names = [
keyword + "ify",
keyword + "Hub",
keyword + "Labs",
"Get" + keyword,
keyword + "AI"
];

res.json({ result: names });

});


// Blog Idea Generator
router.post("/blog-ideas", (req, res) => {

const { topic } = req.body;

const ideas = [
`10 Things You Should Know About ${topic}`,
`Beginner Guide to ${topic}`,
`Future of ${topic}`,
`How ${topic} Is Changing the World`
];

res.json({ result: ideas });

});


// Tweet Generator
router.post("/tweet", (req, res) => {

const { topic } = req.body;

const tweet = `🚀 Just exploring ${topic} today. The future looks exciting!`;

res.json({ result: tweet });

});


// Hashtag Generator
router.post("/hashtags", (req, res) => {

const { topic } = req.body;

const hashtags = [
`#${topic}`,
`#${topic}AI`,
`#${topic}Tech`,
`#Learn${topic}`,
`#${topic}Tools`
];

res.json({ result: hashtags });

});

module.exports = router;