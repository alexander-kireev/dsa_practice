# TASK:
# Given 2 arrays, create function that return true if arrays
# contain any common items

# arr1 = ['a', 'b', 'c', 'd']
# arr2 = ['e', 'f', 'b']
# should return true
# ------------------
# arr1 = ['a', 'b', 'c', 'd']
# arr2 = ['e', 'f', 'g']
# should return false


# brute force solution O(a*b)
def findMatch(array1, array2):
    for i in array1:
        if i in array2:
            return True
    return False


# hashmap solution
def findMatchHash(arr1, arr2):
    found = {}

    for i in arr1: 
        found[i] = True

    for j in arr2:
        if found.get(j):
            return True
    return False
        

arr1 = ['a', 'b', 'c', 'd']
arr2 = ['e', 'f', 'b']
arr3 = ['e', 'f', 'g']

print(findMatchHash(arr1, arr3))