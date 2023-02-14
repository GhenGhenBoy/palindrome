function isPalindrome(s,i){
    if(i > s.length/2)
            {return true;}
        return s[i] == s[s.length-i-1] && isPalindrome(s, i+1)
    } 
         
       let str = "madam";
    let ans = isPalindrome(str, 0);
    if (ans == true)
        {
            console.log("Yes");}
    else
        {
            console.log("No");}
             