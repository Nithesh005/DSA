public class SumFoundBwtTheIndex {
    public static void main(String[] args) {
        int[] arr = { 15, 2, 4, 8, 9, 5, 10, 23 };
        int sum = 23;
        indexranges(arr, sum);
    }

    public static void indexranges(int[] arr, int sum) {

        for (int i = 0; i <= (arr.length) - 1; i++) {
            if (arr[i] == sum) {
                System.out.println("The sum is at the index of :" + i);
                return;
            }
            int currentSum = arr[i];
            for (int j = i+1; j <= (arr.length) - 1; j++) {
                currentSum = currentSum+arr[j];
                if (currentSum == sum) {
                    System.out.println("Index ranges form "+i+" to "+j);
                    return;
                }
            }
            System.out.println("Sum is not found at any of the index");
        }
    }
}
