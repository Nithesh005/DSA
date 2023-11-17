class matrix{
    public static void main(String[] args) {
        int[][] matrix_val1 = {{1,2,3},{4,5,6}};
        int[][] matrix_val2 = {{7,8},{9,10},{11,12}};

        printthematrix(matrix_val1,matrix_val2 );
    }
    public static void printthematrix(int[][] matrix_val1,int[][]matrix_val2){
        // for (int i=0;i<matrix_val1.length;i++){
        //     System.out.println();
        //     for (int j=0;j<matrix_val1[i].length;j++)
        //     System.out.print(matrix_val1[i][j]+" ");
        // }
        // System.out.println();
        // for (int i=0;i<matrix_val2.length;i++){
        //     System.out.println();
        //     for (int j=0;j<matrix_val2[i].length;j++)
        //     System.out.print(matrix_val2[i][j]+" ");
        // }
        // System.out.println();
        // System.out.println("Final answer : ");

        for (int i = 0; i < matrix_val1.length; i++) {
            for (int j = 0; j < matrix_val2[0].length; j++) {
                System.out.print(matrix_val1[i][j]);

            }
            System.out.println();
        }
    }
}