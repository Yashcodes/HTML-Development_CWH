#include<stdio.h>
#include<conio.h>

void main()
{
    int t;
    scanf("%d",&t);
    while (t--)
    {
        
    
    int i,n,f=1;

    printf("Ennter the value to calculate factorial");
    scanf("%d",&n);

    for ( i = 1; i <= n; i++)
    {
        f=f*i;  
    }

    printf("Factorial of %d is %d",n,f);
    }

    getchar();
    
}