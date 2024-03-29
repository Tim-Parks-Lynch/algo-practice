# TC: O(n)
# SC: O(1)

def is_palindrome(str):
    start = 0
    end = len(s) - 1

    while(start <= end):
        if(s[start] == s[end]):
            start += 1
            end -= 1
        else:
            return False
    
    return True