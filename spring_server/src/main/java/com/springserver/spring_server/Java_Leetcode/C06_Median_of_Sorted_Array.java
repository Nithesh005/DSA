package com.springserver.spring_server.Java_Leetcode;
import java.lang.reflect.Array;
import java.util.Arrays;

public class C06_Median_of_Sorted_Array {  
    public static void main(String[] args) {
        int[] nums1 = new int[]{2, 4,9};
        int[] nums2 = new int[]{ 4,6,7,8};
        // System.out.println(7/2-1);
        System.out.println("Median of two sorted arrays: " + findMedianSortedArrays(nums1, nums2));
    }

    public static int findMedianSortedArrays(int[] nums1, int[] nums2) {
        int median = 0;
        int[] result = new int[nums1.length + nums2.length];

        System.arraycopy(nums1, 0, result, 0, nums1.length);

        System.arraycopy(nums2, 0, result, nums1.length, nums2.length);
        Arrays.sort(result);
        System.out.println(Arrays.toString(result));
        if (result.length %2 !=0) {
            median = result[result.length/2];
        }else{
            median = (result[(result.length)/2] + result[(result.length)/2 - 1]) / 2 ;
        }
        return median;
    }
}
