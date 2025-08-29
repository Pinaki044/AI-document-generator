const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// POST endpoint /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    
    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let alphaChars = [];
    
    // Process each item
    for (let item of data) {
      const str = String(item);
      
      if (!isNaN(str) && str.trim() !== '') {
        // It's a number
        const num = Number(str);
        sum += num;
        
        if (num % 2 === 0) {
          evenNumbers.push(str);
        } else {
          oddNumbers.push(str);
        }
      } else if (/^[a-zA-Z]+$/.test(str)) {
        // It's an alphabet
        alphabets.push(str.toUpperCase());
        alphaChars = [...str.split('').reverse(), ...alphaChars];
      } else {
        // It's a special character
        specialChars.push(str);
      }
    }
    
    // Create alternating case string
    let concatString = '';
    for (let i = 0; i < alphaChars.length; i++) {
      concatString += i % 2 === 0 
        ? alphaChars[i].toUpperCase() 
        : alphaChars[i].toLowerCase();
    }
    
    // Send response
    res.json({
      is_success: true,
      user_id: "pinaki_priya",
      email: "pinakipriya2k@gmail.com", 
      roll_number: "22BHI10001", 
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: concatString
    });
    
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Something went wrong"
    });
  }
});

// GET endpoint for testing
app.get('/bfhl', (req, res) => {
  res.json({ 
    operation_code: 1,
    message: "API is working! Use POST method to process data." 
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
