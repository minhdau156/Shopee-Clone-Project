import {describe, it, expect} from 'vitest'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'




const access_token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5naGllbW1pbmgxNTZAZ21haWwuY29tIiwiaWQiOiI2ODMzMmIwMGE3MmI0YWRkOWFkMzFhNWUiLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI1LTA1LTI1VDE0OjM2OjQ4Ljk5NVoiLCJpYXQiOjE3NDgxODM4MDgsImV4cCI6MTc0ODI3MDIwOH0.-GtVBCDLxWEnbAel06-6HTbl-hzj3tU7zY2QIy47Jqk'


const refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5naGllbW1pbmgxNTZAZ21haWwuY29tIiwiaWQiOiI2ODMzMmIwMGE3MmI0YWRkOWFkMzFhNWUiLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI1LTA1LTI1VDE0OjM2OjQ4Ljk5NVoiLCJpYXQiOjE3NDgxODM4MDgsImV4cCI6MTc2MjAwNzgwOH0.2-_HnSHXc7OENQ3GkOsTcIw-XpCEkf_sadphPycj2cA'

const profile = '{"roles":["User"],"_id":"68332b00a72b4add9ad31a5e","email":"nghiemminh156@gmail.com","createdAt":"2025-05-25T14:36:48.945Z","updatedAt":"2025-05-25T14:36:48.945Z","__v":0}'


describe('setAccessTokenToLs', () => {
    it('access_token được set vào localtorage', () => {
        setAccessTokenToLS(access_token)
        expect(getAccessTokenFromLS()).toBe(access_token)
    })
})

describe('setRefreshTokenToLs', () => {
    it('refresh_token được set vào localtorage', () => {
        setRefreshTokenToLS(refresh_token)
        expect(getRefreshTokenFromLS()).toEqual(refresh_token)
    })
})

describe('clearLS', () => {
    it('xóa tất cả trong localStorage', () => {
        setRefreshTokenToLS(refresh_token)
        setAccessTokenToLS(access_token)

        clearLS()

        expect(localStorage.getItem('access_token')).toBeNull()
        expect(localStorage.getItem('refresh_token')).toBeNull()
        
            
})
    })
