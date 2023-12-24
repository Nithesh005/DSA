package com.springserver.spring_server.Java_Leetcode;
import java.util.HashMap;

public class C04_Roman_to_Int {
    public static void main(String[] args) {
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("I", 1);
        hashMap.put("V", 5);
        hashMap.put("X", 10);
        hashMap.put("L", 50);
        hashMap.put("C", 100);
        hashMap.put("D", 500);
        hashMap.put("M", 1000);

        String s = "VXI";
        int result1 = romanToInt(s, hashMap);
        System.out.println(result1);
    }

    private static int romanToInt(String s, HashMap<String, Integer> map) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        char[] chars = s.toCharArray();
        int res = map.get(Character.toString(chars[0])), i = 0;
        while (i < chars.length - 1) {
            if (map.get(Character.toString(chars[i])) >= map.get(Character.toString(chars[i + 1]))) {
                res += map.get(Character.toString(chars[i + 1]));
            } else {
                res += map.get(Character.toString(chars[i + 1])) - 2 * map.get(Character.toString(chars[i]));
            }
            i++;
        }
        return res;
    }
}
