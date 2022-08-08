package beecrowd;

import java.util.Scanner;

public class Beecrowd_1861 {
    static class No {
        private String nome;
        private No esquerdo;
        private No direito;
        private int mortes;
        private boolean vida;

        public No(String nome) {
            this.nome = nome;
            this.esquerdo = null;
            this.direito = null;
            this.mortes = 0;
            this.vida = true;
        }


    }

    static class Arvore {
        private No raiz;

        public Arvore() {
            this.raiz = null;
        }

        public void adicionarAssassino(String nome) {
            if (this.raiz == null) {
                this.raiz = new No(nome);
                this.raiz.mortes++;

            } else {
                if(contains(nome)){
                    incrementarMorte(nome);
                } else {
                    adicionarAssassino(nome, this.raiz);
                }
            }
        }

        public void adicionarAssassino(String nome, No raiz) {
            if (nome.compareTo(raiz.nome) < 0) {
                if (raiz.esquerdo == null) {
                    raiz.esquerdo = new No(nome);
                    raiz.esquerdo.mortes++;

                } else
                    adicionarAssassino(nome, raiz.esquerdo);
            }

            if (nome.compareTo(raiz.nome) > 0) {
                if (raiz.direito == null) {
                    raiz.direito = new No(nome);
                    raiz.direito.mortes++;
                } else
                    adicionarAssassino(nome, raiz.direito);
            }
        }

        public void adicionarMorto(String nome) {
            if (this.raiz == null) {
                this.raiz = new No(nome);
                this.raiz.vida = false;
            } else
                if(contains(nome)){
                    matar(nome);
                } else {
                    adicionarMorto(nome, this.raiz);
                }
        }

        public void adicionarMorto(String nome, No raiz) {
            if (nome.compareTo(raiz.nome) < 0) {
                if (raiz.esquerdo == null) {
                    raiz.esquerdo = new No(nome);
                    raiz.esquerdo.vida = false;
                } else {
                    adicionarMorto(nome, raiz.esquerdo);
                }

            } else if (nome.compareTo(raiz.nome) > 0) {
                if (raiz.direito == null) {
                    raiz.direito = new No(nome);
                    raiz.direito.vida = false;
                } else {
                    adicionarMorto(nome, raiz.direito);
                }
            }
        }

        public boolean contains(String nome) {
            return contains(nome, this.raiz);
        }

        public boolean contains(String nome, No raiz) {
            if (raiz.nome.equals(nome)) {
                return true;

            } else {
                if (nome.compareTo(raiz.nome) < 0) {
                    if (raiz.esquerdo == null)
                        return false;
                    else
                        return contains(nome, raiz.esquerdo);

                } else if (nome.compareTo(raiz.nome) > 0) {
                    if (raiz.direito == null)
                        return false;
                    else
                        return contains(nome, raiz.direito);
                }
            }
            return false;
        }

        public void incrementarMorte(String nome) {
            incrementarMorte(nome, this.raiz);
        }

        private void incrementarMorte(String nome, No raiz) {
            if(raiz.nome.equals(nome)){
                raiz.mortes++;
            }

            if (nome.compareTo(raiz.nome) < 0) {
                if (raiz.esquerdo != null)
                    incrementarMorte(nome, raiz.esquerdo);
            } else if (nome.compareTo(raiz.nome) > 0) {
                if (raiz.direito != null)
                    incrementarMorte(nome, raiz.direito);
            }
        }

        public void matar(String nome) {
            matar(nome, this.raiz);
        }

        private void matar(String nome, No raiz) {
            if(raiz.nome.equals(nome)){
                raiz.vida = false;
            }

            if (nome.compareTo(raiz.nome) < 0) {
                if (raiz.esquerdo != null)
                    matar(nome, raiz.esquerdo);
            } else if (nome.compareTo(raiz.nome) > 0) {
                if (raiz.direito != null)
                    matar(nome, raiz.direito);
            }
        }

        public void exibir() {
            exibir(this.raiz);
        }

        public void exibir(No raiz) {
            if (raiz.vida) {
                System.out.println(raiz.nome + " " + raiz.mortes);
            }

            if (raiz.esquerdo != null) {
                exibir(raiz.esquerdo);
            }

            if (raiz.direito != null) {
                exibir(raiz.direito);
            }
        }

    }

    public static void main(String[] args) {
        Arvore arvore = new Arvore();
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNextLine()) {
            String[] nomes = scanner.nextLine().split(" ");

            arvore.adicionarAssassino(nomes[0]);
            arvore.adicionarMorto(nomes[1]);
        }

        System.out.println("HALL OF MURDERERS");
        arvore.exibir();
    }
}
