import axios from 'axios'

const RAPID_API_KEY = 'df0ecc66f6msh2efa1c1824c8b48p15df0cjsn947d9710b419'
const RAPID_API_HOST = 'judge0-ce.p.rapidapi.com'
const RAPID_API_URL = 'https://judge0-ce.p.rapidapi.com/submissions'

// console.log(RAPID_API_HOST)
function encodeBase64 (str) {
  const utf8Bytes = new TextEncoder().encode(str)
  const binaryString = Array.from(utf8Bytes)
    .map(byte => String.fromCharCode(byte))
    .join('')
  return btoa(binaryString)
}

function decodeBase64 (base64Str) {
  const binaryString = atob(base64Str)
  const bytes = new Uint8Array(
    [...binaryString].map(char => char.charCodeAt(0))
  )
  return new TextDecoder().decode(bytes)
}

// const encodeBase64 = str => btoa(unescape(encodeURIComponent(str)))
// const decodeBase64 = str => decodeURIComponent(escape(atob(str)))

export const handleCompile = async (language_id, code) => {
  try {
    const formData = {
      language_id,
      source_code: encodeBase64(code)
    }

    const options = {
      method: 'POST',
      url: RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*', wait: 'false' },
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': RAPID_API_HOST,
        'x-rapidapi-key': RAPID_API_KEY
      },
      data: formData
    }

    const response = await axios.request(options)
    const token = response.data.token
    return await checkStatus(token) // ✅ This is now properly returned
  } catch (err) {
    console.error('Compilation error:', err)
    throw err
  }
}

export const checkStatus = async token => {
  const options = {
    method: 'GET',
    url: RAPID_API_URL + '/' + token,
    params: { base64_encoded: 'true', fields: '*' },
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': RAPID_API_HOST
    }
  }

  try {
    let response = await axios.request(options)
    let statusId = response.data.status?.id

    if (statusId === 1 || statusId === 2) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return await checkStatus(token) // ✅ Recursive wait
    } else {
      response.data.stdout = decodeBase64(response.data.stdout)
      return response.data.stdout
    }
  } catch (err) {
    console.error('Status check error:', err)
    throw err
  }
}
