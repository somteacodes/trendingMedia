import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/week?api_key=b32d45b2c231eb8ff04cf2172ed01f85',
//   headers: {
//     Authorization: token,
//   },
});
