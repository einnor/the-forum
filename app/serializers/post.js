import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
  keyForRelationship(key, relationship, method) {
    return `${key}Id`;
  }
});