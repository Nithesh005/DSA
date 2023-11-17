package com.springserver.spring_server.Java_Leetcode;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins = "*")
public class C01_Palindrome {
    @GetMapping(value="/C01_Palindrome")
    public static boolean isPalindrome(int x) {
        
        int rev=0;
        int original = x;
        while (x>0) {
            rev = (x%10)+(rev*10);
            x = x/10;
        }
        // System.out.println(original == rev);
        return original==rev;
    }
    // public static void main(String[] args){
    //     isPalindrome(121);
    // }
    
}
