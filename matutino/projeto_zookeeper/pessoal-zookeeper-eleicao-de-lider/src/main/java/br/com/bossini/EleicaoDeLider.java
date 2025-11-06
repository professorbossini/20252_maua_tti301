package br.com.bossini;

import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;

import java.io.IOException;

import static org.apache.zookeeper.Watcher.Event.EventType.None;


public class EleicaoDeLider {
    private static final String HOST = "localhost";
    private static final String PORTA = "2181";
    private static final int TIMEOUT = 5000;
    private ZooKeeper zooKeeper;

    public static void main(String[] args) throws IOException, InterruptedException {
        System.out.printf("Estamos na thread principal: %s\n",Thread.currentThread().getName());
        EleicaoDeLider eleicaoDeLider = new EleicaoDeLider();
        eleicaoDeLider.conectar();
//        Thread.sleep(10000);
        eleicaoDeLider.executar();
        eleicaoDeLider.fechar();
    }

    public void conectar() throws IOException {
        zooKeeper = new ZooKeeper(
                String.format("%s:%s", HOST, PORTA), TIMEOUT,
                        (evento)->{
                            if (evento.getType() == None) {
                                if (evento.getState() == Watcher.Event.KeeperState.SyncConnected) {
                                    System.out.println("Conectado com sucesso!\n");
                                    System.out.printf("Estamos na thread da conexão: %s\n",Thread.currentThread().getName());
                                }
                                else if  (evento.getState() == Watcher.Event.KeeperState.Disconnected) {
                                    synchronized (zooKeeper) {
                                        System.out.println("Desconectado!\n");
                                        System.out.printf("Estamos na thread da desconexão: %s\n",Thread.currentThread().getName());
                                        zooKeeper.notify();
                                    }
                                }
                            }
                        }
                        );
    }

    public void executar() throws InterruptedException {
        synchronized (zooKeeper) {
            zooKeeper.wait();
        }
    }

    public void fechar () throws InterruptedException{
        zooKeeper.close();
    }



}
