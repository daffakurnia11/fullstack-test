import './checker';
import answer from './answer_1';

describe("Test case", () => {
    it("Case 1", () => {
        const input1 = "abc"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = ['ab', 'ac', 'ba', 'bc', 'ca', 'cb']
        expect(output1).toStrictEqual(answer1)
    });
    it("Case 2", () => {
        const input1 = "bba"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = ['ab', 'ba', 'bb']
        expect(output1).toStrictEqual(answer1)
    })
    it("Case 3", () => {
        const input1 = "bbbcd"
        let output1: string[] = answer(input1).sortString()
        console.log('output', output1)
        let answer1: string[] = ['bb', 'bc', 'bd', 'cb', 'cd', 'db', 'dc']
        expect(output1).toStrictEqual(answer1)
    })

});
