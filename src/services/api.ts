import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/',
})
