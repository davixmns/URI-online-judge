import java.io.IOException;
import java.util.Scanner; 

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner dado = new Scanner(System.in);

        int nmaior = -1;
        int posicao = 0;
        for (int i = 1; i <= 100; i++) {
            int entrada = dado.nextInt();
            if (nmaior < entrada) {
                nmaior = entrada;
                posicao = i;
            }
        }
        System.out.println(nmaior);
        System.out.println(posicao);
 
    }
 
}