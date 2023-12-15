// package com.springserver.spring_server.Java_Leetcode;

public class C05_Int_to_Roman {
    public static void main(String[] args) {
        System.out.println(int_to_roman(13));
    }

    public static String int_to_roman(int num) {
        char[] str = {'X','V','I'};
        int[] intVal = {10,5,1};
        String res="";

        for (int i = 0; i < intVal.length; i++) {
            while (num >= intVal[i]) {
                res = res+str[i];
                num = num-intVal[i];
            }
        }

        return res;
    }
}
