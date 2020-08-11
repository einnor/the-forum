import Service from '@ember/service';

export default Service.extend({

  async fetch() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:4000/api/posts',
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

  async save(name) {
    const payload = { id, title, content, author };
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/posts',
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

  async update(id, name) {
    const payload = { name };
    try {
      const response = await axios({
        method: 'put',
        url: `http://localhost:4000/api/posts/${id}`,
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

  async remove(id) {
    try {
      const response = await axios({
        method: 'delete',
        url: `http://localhost:4000/api/posts/${id}`,
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
