package java_dsa;

import java.util.ArrayDeque;
import java.util.Queue;

public class ArrayQueue {
    public static void main(String[] args) {
        Queue <Integer> qu = new ArrayDeque<>(3);
        for (int i = 0; i <= 15; i++) {
            try {
                qu.add(i);
                System.out.println("Enqueued: " + i);
            } catch (Exception e) {
                // TODO: handle exception
                System.out.println("Queue Overflowed");
            }
        }
        System.out.println(qu);
    }
}
