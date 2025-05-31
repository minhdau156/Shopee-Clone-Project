import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
    test('App render và chuyển trang', async() => {
        render(<App />, {
            wrapper: BrowserRouter,
        })
        await waitFor(() => {
            expect(document.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
        })
        screen.debug(document.body.parentElement as HTMLElement, 99999999)
    })
})