for (let key in statistics) {
  if (key.charAt(0) == 'r' || statistics[key]%2 != 0){
    console.log(statistics[key]);
   }
}
