import java.util.Scanner;

public class grenais {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int grenais = 0;
        int empates = 0;
        int vitoriasInter = 0;
        int vitoriasGremio = 0;

        for (int i = 0; i < 1; i++) {
            int entradaInter = entrada.nextInt();
            int entradaGremio = entrada.nextInt();

            if(entradaInter>entradaGremio){
                vitoriasInter++;
            } else if(entradaInter<entradaGremio){
                vitoriasGremio++;
            } else {
                empates++;
            }

            System.out.println("Novo grenal (1-sim 2-nao)");
            grenais++;

            int opcao = entrada.nextInt();
            if(opcao == 1){
                i--;
            } else {
                i++;
            }
        }

        System.out.println(grenais + " grenais");
        System.out.println("Inter:" + vitoriasInter);
        System.out.println("Gremio:" + vitoriasGremio);
        System.out.println("Empates:" + empates);

        if(vitoriasInter>vitoriasGremio) {
            System.out.println("Inter venceu mais");
        }else if(vitoriasGremio>vitoriasInter){
            System.out.println("Gremio venceu mais");
        } else {
            System.out.println("Nao houve vencedor");
        }
    }
}
