function searchMatrix(matrix, target){
  const set = new Set()
  for(let i of matrix){
    for(let n of i){
      set.add(n)
    }
  }
  if(set.has(target)){
    return true
  }
  return false
}

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],1)