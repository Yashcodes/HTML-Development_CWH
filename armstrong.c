#include<stdio.h>
#include<conio.h>
#include<math.h>

void main()
{
    int a,r,n,s=0,i;

    printf("enter the number to check whether it is an armstrong or not");
    scanf("%d",&n);

    a=n;

    for ( i = 1; i <= n; i++)
    {
        r=a%10;
        s=s+pow(r,3);
        a=a/10;
    }

    if (s==n)
    {
        printf("%d is an armstrong number",s);
    }
    else
    {
        printf("%d is not an armstrong number",n);
    }
    

    getchar();
    
    
}