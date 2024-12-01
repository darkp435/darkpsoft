#include<stdio.h> 
#include<string.h> 
#include<stdlib.h>
#define M 30000
// brainrot interpreter source code
void d(const char*a,char*b){while(*a){if(strncmp(a,"skibidi",7)==0){strcat(b,"+");a+=7;}else if(strncmp(a,"sigma",5)==0){strcat(b,
"-");a+=5;}else if(strncmp(a,"rizz",4)==0){strcat(b,">");a+=4;}else if(strncmp(a,"ohio",4)==0){strcat(b,"<");a+=4;}else if(strncmp
(a,"gyatt",5)==0){strcat(b,"[");a+=5;}else if(strncmp(a,"fanum tax",9)==0){strcat(b,"]");a+=9;}else if(strncmp(a,"grimace shake",
13)==0){strcat(b,".");a+=13;}else if(strncmp(a,"let him cook",12)==0){strcat(b,",");a+=12;}else{a++;}}}void e(const char*b){
unsigned char g[M]={0};int c=0;int j=0;char*f=(char*)b;while(f[j]){switch(f[j]){case'>':c++;break;case'<':c--;break;case'+':g[c]++;
break;case'-':g[c]--;break;case'.':putchar(g[c]);putchar('\n');break;case',':{g[c]=getchar();break;}case'[':if(g[c]==0){int h=1;
while(h>0){j++;if(f[j]=='[')h++;if(f[j]==']')h--;}}break;case']':if(g[c]!=0){int h=1;while(h>0){j--;if(f[j]==']')h++;if(f[j]=='[')
h--;}}break;}j++;}}int main(){char a[1024];char b[1024]="";printf("> ");fgets(a,sizeof(a),stdin);a[strcspn(a,"\n")]=0;d(a,b);e(b);
return 0;}