import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
       Scanner dado = new Scanner(System.in);
        int contador = 0;
        double numero;
        double soma = 0;
        for (int i = 0; i < 6; i++) {
            numero = dado.nextDouble();

            if(numero > 0){
                contador++;
                soma += numero;
            }
        }
        soma /= contador;
        System.out.println(contador + " valores positivos");
        System.out.printf("%.1f\n", soma);
    }
 
}