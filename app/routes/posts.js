import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    return [
      { id: 1, author: 'John Doe', authorImageUrl: 'https://place-hold.it/100x100/fff/666', title: 'Hammock beard marfa mixtape', numberOfReplies: 14, lastReply: '17 hours ago', lastReplyBy:'Jane Doe', content: 'Hammock beard marfa mixtape, hoodie unicorn swag pabst 3 wolf moon. Farm-to-table gochujang etsy put a bird on it, affogato PBR&B snackwave keffiyeh chicharrones wolf normcore knausgaard gluten-free post-ironic disrupt. Air plant semiotics taxidermy, fanny pack portland put a bird on it mlkshk godard YOLO hashtag cardigan keytar street art schlitz echo park. Butcher gochujang copper mug tbh, vaporware microdosing slow-carb synth af gluten-free tumblr pug taiyaki cronut. Art party pinterest kogi austin, keytar unicorn cliche. Gochujang banh mi hot chicken chia poutine keffiyeh deep v activated charcoal occupy.' },
      { id: 2, author: 'James Pierre', authorImageUrl: 'https://place-hold.it/100x100/fff/666', title: 'Lorem ipsum', numberOfReplies: 54, lastReply: '2 minutes ago', lastReplyBy: 'Sarah Blech', content: 'Hammock beard marfa mixtape, hoodie unicorn swag pabst 3 wolf moon. Farm-to-table gochujang etsy put a bird on it, affogato PBR&B snackwave keffiyeh chicharrones wolf normcore knausgaard gluten-free post-ironic disrupt. Air plant semiotics taxidermy, fanny pack portland put a bird on it mlkshk godard YOLO hashtag cardigan keytar street art schlitz echo park. Butcher gochujang copper mug tbh, vaporware microdosing slow-carb synth af gluten-free tumblr pug taiyaki cronut. Art party pinterest kogi austin, keytar unicorn cliche. Gochujang banh mi hot chicken chia poutine keffiyeh deep v activated charcoal occupy.' },
    ];
  }
}