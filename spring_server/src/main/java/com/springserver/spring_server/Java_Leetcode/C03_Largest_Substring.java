/**
 * Largest_Substring
 */
package com.springserver.spring_server.Java_Leetcode;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class C03_Largest_Substring {
    @GetMapping(value = "/C03_Largest_Substring")
    public static String largestSubstring(String input){
        String largeststring = "";
        String currecString = "";
        for (int i = 0; i < input.length(); i++) {
           char currentchar = input.charAt(i);
           if (currecString.indexOf(currentchar)==-1) {
               currecString = currecString+currentchar; 
           } else {
            // System.out.println(currecString);
             currecString = currecString.substring(currecString.indexOf(currentchar)+1)+currentchar;
           }
           if (currecString.length()>largeststring.length()) {
            largeststring = currecString;
           }
        }
        return largeststring;
    }

    // public static void main(String[] args) {
    //     String str = "abcdabefghijcadbb";
    //     String Lss = largestSubstring(str);
    //     System.out.println(Lss);
    // }
}