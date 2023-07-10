function solution(n, l, r) {
  const count = (n, idx) => {
    if (idx === 0 ) return 0;
    if( n===0 ) return 1
    const patternlength = 5 ** (n - 1);
    const patternCount = 4 ** (n - 1);
    let quotient = Math.floor(idx / patternlength);
    let mod = idx % patternlength;
    if (quotient === 2) mod = 0;
    if (quotient > 2) quotient--;
    return quotient * patternCount + count(n - 1, mod);
  };
    console.log(count(n,r),count(n,l-1))
  return count(n, r)-count(n,l-1);
}
