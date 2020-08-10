import Service from '@ember/service';

export default Service.extend({
  list: [
    { id: 1, name: 'news', numberOfPosts: 64 },
    { id: 2, name: 'works', numberOfPosts: 100 },
    { id: 3, name: 'culture', numberOfPosts: 23 },
    { id: 4, name: 'general', numberOfPosts: 200 },
    { id: 5, name: 'projects', numberOfPosts: 64 },
    { id: 6, name: 'support', numberOfPosts: 64 },
  ],

  async getCategories() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:4000/api/categories',
      });

      if (response.status === 200) {
        const categories = response.data;
        this.set('list', categories);
      }
      return response;
    } catch (exception) {
      // Handle exception
    }
  },

  async saveCategory(name) {
    const payload = { name };
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/categories',
        data: payload,
      });

      if (response.status === 201) {
        const createdCategory = response.data;
        const categories = this.list;
        categories.push(createdCategory);
        this.set('list', categories);
      }
      return response;
    } catch (exception) {
      // Handle exception
    }
  },

  async updateCategory(id, name) {
    const payload = { name };
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:4000/api/categories/${id}`,
        data: payload,
      });

      if (response.status === 201) { 
        const updatedCategory = response.data;
        const categories = this.list;
        const indexOfOldCategory = categories.findIndex(cat => cat.id === id);
        categories[indexOfOldCategory] = updatedCategory;
        this.set('list', categories);
      }
      return response;
    } catch (exception) {
      // Handle exception
    }
  },

  async removeCategory(id) {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/api/categories/${id}`,
      });

      if (response.status === 201) {
        const categories = this.list;
        const updatedCategories = categories.filter(cat => cat.id !== id);
        this.set('list', updatedCategories);
      }
      return response;
    } catch (exception) {
      // Handle exception
    }
  },
});
