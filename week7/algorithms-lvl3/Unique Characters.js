function unique(str) {
  s=str.toLowerCase(str)
  char=s.split('')
  console.log(char);
  for (i=0; i<=char.length-1; i++){
     for(j=i+1; j<=char.length-1;j++){
      console.log(char[i]+char[j])
      if (char[i]==char[j]){
        
        return "String is not Unique"
      }
     }
    }
    return "String is Unique"
}
console.log(unique("String is Unique *&^"))