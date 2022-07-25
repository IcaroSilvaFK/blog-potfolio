import { api } from '../configs/axios';

export async function getArticles() {
  try {
    const { data } = await api.get('articles', {
      params: {
        tags: 'JavaScript, TypeScript, React, Node',
        state: 'fresh',
      },
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
