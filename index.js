const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  try {
    const data = req.body;

    const response = await axios.post('https://apis.aligo.in/send/', null, {
      params: {
        key: 'is02m5kx6deb2ohhnwof43vg6ek29vf1',
        user_id: 'cnb116',
        sender: '010-5051-7769',
        receiver: data.phone,
        msg: `📢 ${data.name}님 예약이 접수되었습니다.`,
        template_code: 'TZ_1545'
      }
    });

    res.status(200).send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred.');
  }
});

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('✅ Aligo Proxy Server is running!');
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
