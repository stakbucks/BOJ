const moves=[
    {
        direction:'d',
        move:[1,0]
    },
    {
        direction:'l',
        move:[0,-1]
    },
    {
        direction:'r',
        move:[0,1]
    },
    {
        direction:'u',
        move:[-1,0]
    }
]

function solution(n, m, x, y, r, c, k) {
 
    let [currentX, currentY]=[x,y];
    
    let answer='';

    
    const minDist=Math.abs(currentX-r)+Math.abs(currentY-c)
    const res=k-minDist
    if (minDist % 2 !== k % 2 || res < 0) return "impossible";
    
    while(1){
        if(Math.abs(currentX-r)+Math.abs(currentY-c)>=k) break;

        
        for(const {direction, move} of moves){
            const [dx,dy]=move;
            const [nx, ny]=[dx+currentX, dy+currentY];
            if(nx>0 && nx<=n && ny>0 && ny<=m){
                answer+=direction;
                [currentX, currentY]=[nx, ny];
                break;
            }
        }
        k--;
    }
  if (currentX < r) answer += "d".repeat(r - currentX);
  if (currentY > c) answer += "l".repeat(currentY - c);
  if (currentY < c) answer += "r".repeat(c - currentY);
  if (currentX > r) answer += "u".repeat(currentX - r);
    
    
    
    return answer;
}

// dll

// [d,u,l,r]