package java_dsa;

import java_dsa.Bubble_sort;

public class Struct_node {
    static Bubble_sort bs = new Bubble_sort();
    Node head;

    public static void main(String[] args) {
        int[] arr = {5, 10, 7, 3, 6, 2, 8};
        bs.bubble_sort(arr);
        // aditional_method(3);
        Struct_node Sn = new Struct_node();
        // Sn.head = new Node();

        // System.out.println(Sn.head);
        Node second = new Node();
        System.out.println(second.value);
    }

    /**
     * Node
     */
    public static class Node {
        int value = 4;
    }

    // public static class main extends Node {
    // int value1 = 5;
    // }

    // public static void aditional_method(int a) {
    // main two = new main();
    // System.out.println(two.value);
    // }

}
