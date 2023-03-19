//자바스크립트로 풀 수 없는 문제임

#include<iostream>
 
#define endl "\n"
using namespace std;
 
int E, S, M;
 
void Input()
{
    cin >> E >> S >> M;
}
 
void Solution()
{
    int Year = 1;
    while (1)
    {
        if ((Year - E) % 15 == 0 && (Year - S) % 28 == 0 && (Year - M) % 19 == 0) break;
        Year++;
    }
    cout << Year << endl;
}
 
void Solve()
{
    Input();
    Solution();
}
 
int main(void)
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
 
//    freopen("Input.txt", "r", stdin);
    Solve();
 
    return 0;
}
