
import java.util.Arrays;
import java.util.Iterator;

public class C08_ZigZag_pattern {
    public static void main(String[] args) {
        String s = "WelcometoZohoCorp";
        int n = 3;
        System.out.println(ZigZag_Pattern(s, n));
    }

    public static String ZigZag_Pattern(String s, int n) {
//    	String res_Str=s;
    	if (n==1) {
			return s;
		}
    	StringBuilder[] row = new StringBuilder[n];
    	for (int i = 0; i < n; i++) {
			row[i] = new StringBuilder();
		}
    	
    	int index = 0; boolean down = true;
    	for (char c : s.toCharArray()){
    		if (index==0) {
				down = true;
			} else if (index == n-1) {
				down = false;
			}
    		row[index].append(c);
    		
    		if (down) {
				index +=1; 
			} else {
				index -=1;
			}
		}
    	System.out.println(Arrays.toString(row));
    	StringBuilder res_Str = new StringBuilder();
    	for (StringBuilder sb : row) {
			res_Str.append(sb);
		}
       return res_Str.toString();
    }
}
