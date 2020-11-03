
function toCoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( toCoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return toCoins(amount, coins);
        }
    }
} 
console.log(toCoins(46, [10, 5, 2, 1]));