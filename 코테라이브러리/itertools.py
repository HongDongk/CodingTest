# 순열
from itertools import permutations

ex = [1,2,3]

answer = list(permutations(ex ,2)) # [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)] =>  2개씩 순열만들기


# 조합
from itertools import combinations

ex = [1,2,3]

answer = list(combinations(ex ,2)) # [(1,2), (1,3), (2,3)] =>  2개씩 조합만들기


# 중복순열
from itertools import product

ex = [1,2,3]

answer = list(product(ex , repeat=2)) # [(1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)]


