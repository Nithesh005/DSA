// import java.util.*;

// class Solution {

//     public static void main(String args[]) {
//         Scanner in = new Scanner(System.in);
//         int n = in.nextInt(); // the number of temperatures to analyze
//         int[] arr = new int[n];
//         for (int i = 0; i < n; i++) {
//             int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
//             arr[i] = t;
//         }

//         // Find the closest temperature to zero
//         if (arr.length>0) {
//             int closestTemp = arr[0];
//             for (int temp : arr) {
//                 if (closestTemp + (temp) == 0) {
//                     // System.out.println("entered");
//                     closestTemp = Math.abs(closestTemp);
//                 } else {
//                     if (Math.abs(temp - 0) <= Math.abs(closestTemp)) {
//                         closestTemp = (temp - 0);
//                     }
//                 }
//                 // System.out.println(temp);
//             } 
//         }else{
//             closestTemp = 0;
//         }

//         // Print the result
//         System.out.println(closestTemp);
//     }
// }


// 

import java.util.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // the number of temperatures to analyze
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            int t = in.nextInt(); // a temperature expressed as an integer ranging from -273 to 5526
            arr[i] = t;
        }

        // Find the closest temperature to zero
        int closestTemp = 0;

        if (arr.length > 0) {
            closestTemp = arr[0];

            for (int temp : arr) {
                if (temp == 0) {
                    closestTemp = 0;
                    break; // No need to continue, we found an exact match.
                } else if (Math.abs(temp) < Math.abs(closestTemp) || (Math.abs(temp) == Math.abs(closestTemp) && temp > closestTemp)) {
                    closestTemp = temp;
                }
            }
        }

        // Print the result
        System.out.println(closestTemp);
    }
}
