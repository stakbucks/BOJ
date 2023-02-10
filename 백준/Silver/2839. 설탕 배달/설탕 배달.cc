#include <stdio.h>
int main(void) {
	int N;
	scanf("%d", &N);
	int five = N / 5;
	int three = 0;


	while (1) {
		if ((N-(five*5)) % 3 == 0) {
			three = (N -(five*5)) / 3;
			break;
		}
		five--;
		if (five == -1) break;
	}
	
	printf("%d", five + three);

}