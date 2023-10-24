import java.util.Arrays;

public class ArrayPrograms {
    public static void main(String[] args) {
        int arr[] = {1,2,3,5,6};
        int n =6;
        missingnumber(arr,n);
    }
    private static void missingnumber(int[] arr,int n){
        int len= n;
        float f = (len+1);
        float Total = len * (f/2);
        int sum = 0;
        for (int i : arr) {
            sum +=i;
        }  
        System.out.println((int)(Total-sum));
    }
}
