import axios from 'axios';

const postMood = async (mood, token) => {
  await axios.post('http://localhost:3000/moods', {mood, token})
}

const getMoods = async () => {
  const res = await axios.get('http://localhost:3000/moods');
  return res.data;
}

export { postMood,
         getMoods };
