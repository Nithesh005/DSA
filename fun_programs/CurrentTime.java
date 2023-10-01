package fun_programs;

import java.time.LocalTime;

/**
 * CurrentTime
 */
public class CurrentTime {

    public static void main(String[] args) {
        LocalTime lt = LocalTime.now();
        System.out.println("Current Time: " + lt);
    }
}
