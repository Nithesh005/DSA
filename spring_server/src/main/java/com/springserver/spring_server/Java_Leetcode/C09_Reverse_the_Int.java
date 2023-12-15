
public class C09_Reverse_the_Int {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 153;
		int result = reverse_the_int(n);
		System.out.println(result);
	}

	public static int reverse_the_int(int n) {
		int rev = 0 ;
		while (n>=1) {
			rev = (rev*10)+n%10;
			n = n/10;
		}
		
		return rev;
	}
	

}