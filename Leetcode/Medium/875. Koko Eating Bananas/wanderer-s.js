/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
  const pilesCount = piles.length
  let min = 1,
      max = Math.max(...piles),
      k = max
  if(pilesCount === h) {
    // 더미 개수와 주어진 시간이 같으면 시간 당 바나나더미 하나씩 먹었다는 의미
    // 따라서 더미중 가장 바나나가 많은 갯수가 K 가됨
      return max
  }
  
  function findTime(hourPerEat) {
    // 시간당 몇개를 먹는지 넣으면 총 시간을 찾아주는 함수
      return piles.reduce((time, banana) => {
        // 다 먹고 시간이 남아도 더 이상 먹지 않으니 Math.ceil로 올림 해주어야 함
          time += Math.ceil(banana/hourPerEat)
          return time
      }, 0)
  }
  // 이진탐색
  while(min <= max) {
      const mid = Math.floor((max + min) / 2)
      
      if(findTime(mid) <= h) {
          k = mid
          max = mid - 1
      } else {
          min = mid + 1
      }
  }
  return k
};