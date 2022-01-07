#include<stdio.h>
#include<conio.h>
#include<string.h>

int main()
{
    char str1[10], str2[10];
    int cmp;

    printf("Enter the string:");
    scanf("%s",&str1);

    strcpy(str2,str1);  //  for copying string from one variable to another variable
    strrev(str1);       // for reverse a string
    strcmp(str1,str2);  // for comparison of two strings 

    cmp=strcmp(str1,str2);
    
    if (cmp==0)
    {
        printf("Entered string is palindrome");
    }
    
    else
    {
        printf("entered string is not palindrome");
    }
    
    getchar();
    return 0;
}