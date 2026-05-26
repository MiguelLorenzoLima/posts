import { PostRepository } from '@/repositories/post/post-repositorie';
import { PostModel } from '../../models/post/post-model';
import { resolve } from 'path';
import { readFile } from 'fs/promises'; // ler arquivo e retorna os dados em string

//ler o arquivo do disco, vamos buscar a rota na raiz
const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 0; // simular um tempo de espera para ler o arquivo do disco

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    return new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    // ja vai ler o arquivo dentro da tipagem
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent); // parse = analisar
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published); // filter vai retornar um array com os elementos que derem true
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id); // find vai encontrar o primeiro elemento que der true
    if (!post) throw new Error('Post nao encontrado'); // throw serve para lançar um erro
    return post;
  }
}
