package java_dsa;
import java.util.Arrays;

public class Bubble_sort {

    public static void main(String[] args) {
        int[] arr ={5,10,7,3,6,2,8};
        bubble_sort(arr);
        
    }

    static void bubble_sort(int[] arr) {
        int len = arr.length,temp=0;
        for (int i = 0; i < len; i++) {
            for (int j = 0; j < (len-1)-i; j++) {
                if (arr[j]>arr[j+1]) {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            // System.out.println();
        }
        System.out.println(Arrays.toString(arr));
    }
}