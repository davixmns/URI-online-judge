import java.io.IOException;
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner entrada = new Scanner(System.in);
        int x = entrada.nextInt();
        int y = entrada.nextInt();
        int aux;
        int soma = 0;

        if (x > y) {
            aux = x;
            x = y;
            y = aux;
        }
        for (int i = x + 1; i < y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
        System.out.println(soma);
 
    }
 
}