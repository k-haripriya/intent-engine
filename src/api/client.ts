import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc5NzI5NDUzLCJpYXQiOjE3Nzk3MjU4NTMsImp0aSI6IjNjZWJkZDI5YWMyNTQxYWY4NjY5MDcwODI1OGExMWZmIiwidXNlcl9pZCI6IjEifQ.3xfjs8fTHC16qF5kLvzmtZGaH3dDlIcezfJDqa2Dzo4',
  },
});
