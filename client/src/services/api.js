import axios from 'axios';

const postMood = async (mood, token) => {
  await axios.post('http://localhost:3000/moods', {mood, token})
  console.log('success?');
}

export default postMood;
