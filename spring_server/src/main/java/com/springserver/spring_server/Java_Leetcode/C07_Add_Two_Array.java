import java.util.Arrays;

public class C07_Add_Two_Array {
    public static void main(String[] args) {
        int[] nums1 = new int[]{2, 4 };
        int[] nums2 = new int[]{3,6};
        int a = addTwoNumbers(nums1, nums2);
    }
    public static int addTwoNumbers(int[] nums1,int[] nums2){
        int n1 = valueofnum1(nums1);
        int n2 = valueofnum2(nums2);
        int res = n1+n2;
        int[] resArr = numtoArray(res);
        System.out.println(Arrays.toString(resArr));
        return 0;
    }
    public static int[] numtoArray(int res){
        System.out.println(res);
        int val=res;
        int[] resArr = new int[String.valueOf(res).length()];
        int i =0;
        while (res > 0) {
            val = res%10;
            resArr[i++] = val; 
            res = res/10;
        }

        return resArr;
    }
    public static int valueofnum1(int[] nums1){
        int val=0;
        for (int i = 0; i < nums1.length; i++) {
            val = val*10 + nums1[nums1.length-1-i];
        }
        return val;
    }
    public static int valueofnum2(int[] nums2){
        int val=0;
        for (int i = 0; i < nums2.length; i++) {
            val = val*10 + nums2[nums2.length-1-i];
        }
        return val;
    }
}
