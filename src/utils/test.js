const api_key = 'df0ecc66f6msh2efa1c1824c8b48p15df0cjsn947d9710b419'
const api_host = 'judge0-ce.p.rapidapi.com'
const url = 'https://judge0-ce.p.rapidapi.com/submissions'

import axios from 'axios'

const options = {
  method: 'POST',
  url: url,
  params: {
    base64_encoded: 'true',
    wait: 'false',
    fields: '*'
  },
  headers: {
    'x-rapidapi-key': api_key,
    'x-rapidapi-host': api_host,
    'Content-Type': 'application/json'
  },
  data: {
    language_id: 52,
    source_code:
      'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
   //  stdin: 'SnVkZ2Uw'

  }
}

try {
  const response = await axios.request(options)
  console.log(response.data)
} catch (error) {
  console.error(error)
}


