import {describe, it, expect} from 'vitest'
import { isAxiosError } from '../utils'
import { AxiosError } from 'axios'

describe('isAxiosError', () => {
    //it dùng để ghi chú trường họp cần test
    it('isAxiosError trả về boolean', () => {
        //expect dùng để mong đợi giá trị trả về
        expect(isAxiosError(new Error())).toBe(false)

        expect(isAxiosError(new AxiosError())).toBe(true)
    }
)
})


