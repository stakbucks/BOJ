#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


int main() {
	int N;
	cin >> N;
	int arr[1001];
	for (int i = 0; i < N; i++) {
		cin >> arr[i];
	}
	sort(arr, arr + N);
	for (int i = 0; i < N; i++) {
		cout << arr[i] << '\n';
	}
}