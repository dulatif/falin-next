import api from "./index";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

class ExampleService {
  private static readonly PATH = "/posts";

  // # basic crud
  static async getAll() {
    return await api.get<Post[]>(this.PATH);
  }

  static async find(id: number) {
    return await api.get<Post>(`${this.PATH}/${id}`);
  }

  static async create(body: Omit<Post, "id">) {
    return await api.post<Post>(this.PATH, body);
  }

  static async update(id: number, body: Partial<Post>) {
    return await api.put<Post>(`${this.PATH}/${id}`, body);
  }

  static async delete(id: number) {
    return await api.delete(`${this.PATH}/${id}`);
  }
}

export default ExampleService;
