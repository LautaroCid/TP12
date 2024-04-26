function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function myFuncion4(){
    con=[];
    let a=0,b=0,c=true,i=0;

    a=getRandomInt(100);

    while(c==true){
        if(a%2==0){
            a=a/2;
            con[i]=a;
        }else{
            a=(a*3)+1;
            con[i]=a;
        }

        i=i+1;

        if(a==1){
            c=false;
        }

        if(b<a){
            b=a;
        }
    }

    alert("la secuencia es "+con);
    alert("tiene "+i+" caracteres");
    alert("El numero mas grande de la secuencia es: "+b);
}