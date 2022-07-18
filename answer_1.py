# modify your code here
def answer(string):
    result = ["ab", "ac", "ba", "bc", "ca", "cb"]
    print(result)
    return result


if __name__ == "__main__":
    result = answer("abcdefg")
    correct_answer = ['ab', 'ac', 'ad', 'af', 'ag', 'ef', 'eg']
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 1")

    result = answer("monolith repo")
    correct_answer = ['on', 'ol','ot', 'oh', 'or', 'op', 'it', 'ih', 'ir', 'ip', 'ep']
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 2")

    result = answer("bbbcd")
    correct_answer = []
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 3a")

    result = answer("mytho")
    correct_answer = []
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 3b")

    result = answer("")
    correct_answer = []
    assert len(result) == len(correct_answer)
    assert all([each in correct_answer for each in result])
    assert all([each in result for each in correct_answer])
    print("PASSED 3c")

