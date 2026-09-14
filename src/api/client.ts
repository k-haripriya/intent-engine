import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg5NDE1NTMxLCJpYXQiOjE3ODk0MTE5MzEsImp0aSI6IjliMjQyZTZjOGFjMzRmZTRhMWE3YjBlMzllZDE0MzcyIiwidXNlcl9pZCI6IjEifQ.369ELBCb0KSwjHaYtEdlnZfQc7RmqiZkiKnQbyWCQR0',
  },
});
