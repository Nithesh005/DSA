package java_dsa;

import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("null");
        list.add("1");
        list.add("2");
        list.remove("1");

        Iterator<String> iterator = list.iterator();
        System.out.println(iterator.next());
        System.out.println(iterator.next());
        // System.out.println(iterator.next());
    }
}
