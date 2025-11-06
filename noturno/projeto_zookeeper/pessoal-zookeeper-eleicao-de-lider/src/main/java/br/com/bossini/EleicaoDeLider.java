package br.com.bossini;

import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;

import java.io.IOException;

import static org.apache.zookeeper.Watcher.Event.EventType.None;

public class EleicaoDeLider {
    private static final String HOST = "localhost";
    private static final String PORTA = "2181";
    private static final int TIMEOUT = 5000;
    private ZooKeeper zooKeeper;

    public static void main(String [] args) throws IOException, InterruptedException {
        System.out.printf("Executando em main - nome da thread: %s\n", Thread.currentThread().getName());
        EleicaoDeLider eleicaoDeLider = new EleicaoDeLider();
        eleicaoDeLider.conectar();
//        Thread.sleep(10000);
        eleicaoDeLider.executar();
        eleicaoDeLider.fechar();
        System.out.printf("Encerrando o método main: %s\n", Thread.currentThread().getName());
    }

    private void fechar() throws InterruptedException {
        zooKeeper.close();
    }

    //o construtor lança uma exceção verificada
    public void conectar() throws IOException {
        zooKeeper = new ZooKeeper(
            String.format("%s:%s", HOST, PORTA),
            TIMEOUT,
            //implementação da interface Watcher usando uma expressão Lambda
            //chamado na Thread de eventos
            (evento) -> {
                synchronized (zooKeeper) {
                    System.out.println("Tratando evento: " + Thread.currentThread().getName());
                    if (evento.getType() == Watcher.Event.EventType.None) {
                        if (evento.getState() == Watcher.Event.KeeperState.SyncConnected) {
                                System.out.println("Conectado com sucesso");
                        }
                    }
                    zooKeeper.notify();
                }
            }
        );
    }

    public void executar()  throws InterruptedException {
        synchronized (zooKeeper) {
            zooKeeper.wait();
        }
    }


}
