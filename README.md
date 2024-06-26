# 💻 CodingTest

JavaScript 코딩테스트 준비

- 프로그래머스 입문 100제
- 프로그래머스 Level 1
- 프로그래머스 Level 2
- 프로그래머스 Level 3

<br/><br/>

# 😎 스킬체크

### 1. 이진수 관련 유용함수

- **10진수를 2진수로 바꾸기** ▶️ parseInt(n, 2);

- **2진수를 10진수로 바꾸기** ▶️ n.toString(2);

- **2진수일때 같은 자릿수로 맞추기** ▶️ n.padStart(10, 0); (앞에 0으로 채워서 10자릿수 맞추기)

<br/>

### 2. sort() 함수

- **sort()안의 함수가 0보다 큰 경우 b가 먼저 온다.**

- **sort()안의 함수가 0을 반환하면 a와 b를 서로 변경하지 않는다.**

- **sort()안의 함수가 0보다 작은 경우 a가 먼저 온다.**

```javaScript
// 오름차순정렬

arr.sort((a, b) => {
  if(a > b) return 1;
  if(a === b) return 0;
  if(a < b) return -1;
});
```

<br/>

### 3. 소수의 갯수

- **특정 수 제곱근 이하까지 나누면서 확인**

```javaScript
function sosu(k){
  if(k<=1) return false;

  for(let i =2; i<=Math.sqrt(k); i++){
    if(k%i === 0) return false;
  }

  return true;
}
```
