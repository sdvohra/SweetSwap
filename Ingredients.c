#include<stdio.h>
#include<stdlib.h>

int num;
float amount[10];
char ingredient[10][20];
char original[30];
char replace[30];
float conversion;

int is_alpha(char c){
    return (c<='z' && c>= 'a') || (c<='Z' && c>='A') || (c=='-');
}

int is_match(char* s1, char* s2){
    int i=0;
    int yes=1;
    int length1=0;
    int length2=0;

    for(i=0; is_alpha(s1[i]); i++){
        length1++;
    }

    for(i=0; is_alpha(s2[i]); i++){
        length2++;
    }

    if(length1!=length2){
        yes=0 ;
    }

    else{
        for(i=0; is_alpha(s1[i]); i++){
            if(s1[i]!=s2[i]){
                yes=0;
            }
        }
    }

    return yes;

}

void rewrite(char* w1, char* w2){
    int i=0;
    int l1=0;
    int l2=0;
    for(i=0; is_alpha(w1[i]); i++){
        l1++;
    }

    for(i=0; is_alpha(w2[i]); i++){
        l2++;
    }
    if(l2>=l1){
        for(i=0; i<l2; i++){
            w1[i]=w2[i];
        }
    }
    else{
        for(i=0; i<l1; i++){
            if(i<l2){
                w1[i]=w2[i];
            }
            else{
                w1[i]='0';
            }
        }
    }

}


int main(){
    scanf("%d %s %s", &num, &original, &replace);
    FILE *inp = fopen("ingredients.in","r");
    int i;
    int j;
    char read[30];
    char temp[30];
    int rows;
    int mark=0;
    for(i=0; i<10; i++){
        for(j=0; j<30; j++){
            read[j]='0';
        }
        for(j=0; j<30; j++){
            temp[j]='0';
        }
        fscanf(inp,"%s", &read);
        fscanf(inp, "%d", &rows);
        if(is_match(original, read)){
            for(j=0; j<rows; j++){
                fscanf(inp, "%s", &temp);
                if(is_match(replace, temp)){
                    fscanf(inp, "%f", &conversion);
                    mark=1;
                    break;
                }
                else{
                    fscanf(inp, "%f", &conversion);
                }
            }
        }
        else{
            for(j=0; j<rows; j++){
                fscanf(inp, "%s", &temp);
                fscanf(inp, "%f", &conversion);
            }
        }
        if(mark==1) break;
    }
    mark=0;
    for(i=0; i<num; i++){
        scanf("%s %f", ingredient+i, amount+i);
        if(is_match(ingredient[i], original)){
            amount[i]=amount[i]*conversion;
            rewrite(ingredient[i], original);
            mark=1;
        }
    }
    /* if(mark==0){
        printf("No Replacement\n");
    } */
    for(i=0; i<num; i++){
        for(j=0; is_alpha(ingredient[i][j]); j++){
            printf("%c", ingredient[i][j]);
        }
        printf(" %f\n", amount[i]);
    }
}
