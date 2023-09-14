import java.util.Arrays;

/**
 * SortWave
 * gfg
 */
public class SortWave {

    public static void main(String[] args) {
        int [] arr = { 10, 90, 49, 2, 1, 5, 23 };
        Arrays.sort(arr);
        
        for (int i = 0; i < (arr.length)-1; i+=2) {
            // System.out.println(i);
            swap(arr,i);
        }
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int[] arr,int i){
        int temp;
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}