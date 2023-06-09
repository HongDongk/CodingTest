// 스택활용

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let on_bridge = [];
  let bridge_weight = 0;
  while (truck_weights.length > 0) {
    answer++;
    if (on_bridge.length == bridge_length) {
      bridge_weight -= on_bridge.shift();
    }
    if (bridge_weight + truck_weights[0] > weight) {
      on_bridge.push(0);
      continue;
    }
    let truck_weight = truck_weights.shift();
    on_bridge.push(truck_weight);
    bridge_weight += truck_weight;
  }

  return answer + bridge_length;
}
