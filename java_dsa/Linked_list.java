package java_dsa;

class Linked_list {
    // Creating a node
    Node head;

    static class Node {
        int value;
        Node next;

        Node(int d) {
            value = d;
        }
    }

    public static void main(String[] args) {
        Linked_list sn = new Linked_list();

        // Assign value values
        sn.head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);

        // Connect nodess
        sn.head.next = second;
        second.next = third;
        // printing node-value
        while (sn.head != null) {
            System.out.print(sn.head.value + " ");
            // System.out.println(sn.head);
            sn.head = sn.head.next;
        }
    }
}