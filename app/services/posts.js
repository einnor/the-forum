import Service from '@ember/service';

export default Service.extend({
  list: [
    { id: '1', author: 'John Doe', authorImageUrl: 'https://place-hold.it/100x100/fff/666', title: 'Hammock beard marfa mixtape', numberOfReplies: 14, lastReply: '17 hours ago', lastReplyBy: 'Jane Doe', content: 'Hammock beard marfa mixtape, hoodie unicorn swag pabst 3 wolf moon. Farm-to-table gochujang etsy put a bird on it, affogato PBR&B snackwave keffiyeh chicharrones wolf normcore knausgaard gluten-free post-ironic disrupt. Air plant semiotics taxidermy, fanny pack portland put a bird on it mlkshk godard YOLO hashtag cardigan keytar street art schlitz echo park. Butcher gochujang copper mug tbh, vaporware microdosing slow-carb synth af gluten-free tumblr pug taiyaki cronut. Art party pinterest kogi austin, keytar unicorn cliche. Gochujang banh mi hot chicken chia poutine keffiyeh deep v activated charcoal occupy.' },
    { id: '2', author: 'James Pierre', authorImageUrl: 'https://place-hold.it/100x100/fff/666', title: 'Lorem ipsum', numberOfReplies: 54, lastReply: '2 minutes ago', lastReplyBy: 'Sarah Blech', content: 'Hammock beard marfa mixtape, hoodie unicorn swag pabst 3 wolf moon. Farm-to-table gochujang etsy put a bird on it, affogato PBR&B snackwave keffiyeh chicharrones wolf normcore knausgaard gluten-free post-ironic disrupt. Air plant semiotics taxidermy, fanny pack portland put a bird on it mlkshk godard YOLO hashtag cardigan keytar street art schlitz echo park. Butcher gochujang copper mug tbh, vaporware microdosing slow-carb synth af gluten-free tumblr pug taiyaki cronut. Art party pinterest kogi austin, keytar unicorn cliche. Gochujang banh mi hot chicken chia poutine keffiyeh deep v activated charcoal occupy.' },
  ],

  // async fetch() {
  //   try {
  //     const response = await axios({
  //       method: 'get',
  //       url: 'http://localhost:4000/api/posts',
  //     });

  //     if (response.status === 200) {
  //       const categories = response.data;
  //       this.set('list', categories);
  //     }
  //     return response;
  //   } catch (exception) {
  //     // Handle exception
  //   }
  // },

  // async save(name) {
  //   const payload = { id, title, content, author };
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'http://localhost:4000/api/posts',
  //       data: payload,
  //     });

  //     if (response.status === 201) {
  //       const createdCategory = response.data;
  //       const categories = this.list;
  //       categories.push(createdCategory);
  //       this.set('list', categories);
  //     }
  //     return response;
  //   } catch (exception) {
  //     // Handle exception
  //   }
  // },

  // async update(id, name) {
  //   const payload = { name };
  //   try {
  //     const response = await axios({
  //       method: 'put',
  //       url: `http://localhost:4000/api/posts/${id}`,
  //       data: payload,
  //     });

  //     if (response.status === 201) {
  //       const updatedCategory = response.data;
  //       const categories = this.list;
  //       const indexOfOldCategory = categories.findIndex(cat => cat.id === id);
  //       categories[indexOfOldCategory] = updatedCategory;
  //       this.set('list', categories);
  //     }
  //     return response;
  //   } catch (exception) {
  //     // Handle exception
  //   }
  // },

  // async remove(id) {
  //   try {
  //     const response = await axios({
  //       method: 'delete',
  //       url: `http://localhost:4000/api/posts/${id}`,
  //     });

  //     if (response.status === 201) {
  //       const categories = this.list;
  //       const updatedCategories = categories.filter(cat => cat.id !== id);
  //       this.set('list', updatedCategories);
  //     }
  //     return response;
  //   } catch (exception) {
  //     // Handle exception
  //   }
  // },
});
