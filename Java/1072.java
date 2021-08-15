import java.io.IOException;
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner entrada = new Scanner(System.in);

        int cin = 0;
        int cout = 0;
        int n = entrada.nextInt();
        for (int i = 0; i < n; i++) {
            int x = entrada.nextInt();

            if (x >= 10 && x <= 20) {
                cin++;
            } else{
                cout++;
            }
        }
        System.out.println(cin + " in");
        System.out.println(cout + " out");
 
    }
 
}