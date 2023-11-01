public class Gas_Station {
    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0;
        int currentGas = 0;
        int startStation = 0;
        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i] - cost[i];
            currentGas += gas[i] - cost[i];
            // If currentGas becomes negative, reset and start from the next station
            if (currentGas < 0) {
                System.out.println(currentGas);
                currentGas = 0;
                startStation = i + 1;
            }
        }
        // If totalGas is negative, it means there is no valid starting station
        if (totalGas < 0) {
            return -1;
        } else {
            return startStation;
        }
    }
    public static void main(String[] args) {
        int[] gas = {1, 2, 3, 4, 5};
        int[] cost = {2, 3, 2, 6, 1};
        int startStation = canCompleteCircuit(gas, cost);
        if (startStation != -1) {
            System.out.println("You can start at gas station " + startStation);
        } else {
            System.out.println("There is no valid starting station.");
        }
    }
}
