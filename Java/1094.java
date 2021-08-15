import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        Scanner entrada = new Scanner(System.in);

        int n = entrada.nextInt();
        double qtdCobaias = 0;
        int qtdRatos = 0, qtdCoelhos = 0, qtdSapos = 0;

        for (int i = 0; i < n; i++) {
            int numero = entrada.nextInt();
            char letra = entrada.next().charAt(0);

            switch (letra) {
                case 'C':
                    qtdCoelhos += numero;
                    break;
                case 'S':
                    qtdSapos += numero;
                    break;
                case 'R':
                    qtdRatos += numero;
                    break;
            }
            qtdCobaias += numero;
        }
        double pRatos = (qtdRatos / qtdCobaias) * 100;
        double pSapos = (qtdSapos / qtdCobaias) * 100;
        double pCoelhos = (qtdCoelhos / qtdCobaias) * 100;

        System.out.printf("Total: %d cobaias\n", (int)qtdCobaias);
        System.out.println("Total de coelhos: " + qtdCoelhos);
        System.out.println("Total de ratos: " + qtdRatos);
        System.out.println("Total de sapos: " + qtdSapos);

        System.out.printf("Percentual de coelhos: %.2f %%\n", pCoelhos);
        System.out.printf("Percentual de ratos: %.2f %%\n", pRatos);
        System.out.printf("Percentual de sapos: %.2f %%\n", pSapos);
 
    }
 
}