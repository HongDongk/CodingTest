// 정규식

function solution(files) {
  return files.sort((a, b) => {
    const aHead = a.match(/\D+/g)[0].toLowerCase();
    const bHead = b.match(/\D+/g)[0].toLowerCase();

    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;
    if (aHead == bHead) {
      const aNum = Number(a.match(/\d+/g)[0]);
      const bNum = Number(b.match(/\d+/g)[0]);

      return aNum - bNum;
    }
  });
}
