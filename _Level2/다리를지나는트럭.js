// 스택활용

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let onbridge = [];
  let bridgeweight = 0;

  while (truck_weights.length !== 0) {
    answer += 1;
    if (onbridge.length == bridge_length) {
      bridgeweight -= onbridge.shift();
    }
    if (bridgeweight + truck_weights[0] > weight) {
      onbridge.push(0);
      continue;
    }
    let truck_weight = truck_weights.shift();
    onbridge.push(truck_weight);
    bridgeweight += truck_weight;
  }

  return answer + bridge_length;
}
