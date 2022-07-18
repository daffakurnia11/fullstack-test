import './checker';
import answer from './answer_1';

describe("Test case", () => {
    it("Case 1", () => {
        const input1 = "abcdefg"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = ['ab', 'ac', 'ad', 'af', 'ag', 'ef', 'eg']
        expect(output1).toStrictEqual(answer1)
    });
    it("Case 2", () => {
        const input1 = "monolith repo"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = ['on', 'ol', 'ot', 'oh', 'or', 'op', 'it', 'ih', 'ir', 'ip', 'ep']
        expect(output1).toStrictEqual(answer1)
    })
    it("Case 3a", () => {
        const input1 = "bbbcd"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = []
        expect(output1).toStrictEqual(answer1)
    })
    it("Case 3b", () => {
        const input1 = "mytho"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = []
        expect(output1).toStrictEqual(answer1)
    })
    it("Case 3c", () => {
        const input1 = "bbbcd"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = []
        expect(output1).toStrictEqual(answer1)
    })
});
