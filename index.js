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
        key: 'API_KEY',
        user_id: 'USER_ID',
        sender: '발신번호',
        receiver: data.phone,
        msg: `📢 ${data.name}님 예약이 접수되었습니다.`,
        template_code: 'TEMPLATE_CODE'
      }
    });

    res.status(200).send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
