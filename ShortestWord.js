(function findShort(s){
  const shortest = s.split(' ').sort((a, b) => {
      return a.length - b.length;
  }).shift();
  return shortest.length
})("bitcoin take over the world maybe who knows");