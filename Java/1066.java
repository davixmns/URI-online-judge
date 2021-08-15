import java.io.IOException;
import java.util.Scanner; 

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner entrada = new Scanner(System.in);
        int cpos = 0;
        int cneg = 0;
        int cimp = 0;
        int cpar = 0;
        int numero;

        for(int i=0;i<5;i++){
            numero = entrada.nextInt();
            if(numero %2==0){
                cpar++;
            } else {
                cimp++;
            }
            if(numero >0){
                cpos++;
            }
            if(numero < 0){
                cneg++;
            }
        }
        System.out.println(cpar + " valor(es) " + "par(es)");
        System.out.println(cimp + " valor(es) " + "impar(es)");
        System.out.println(cpos + " valor(es) " + "positivo(s)");
        System.out.println(cneg + " valor(es) " + "negativo(s)");
    }
}